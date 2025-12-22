import { useState, useRef, useEffect } from "react";
import { parseDOCX, parsePDF, extractQuestionsFromDOCX, smartChunk } from "../utils/documentParser";
import { 
  initializeGemini, 
  generateQuestions, 
  generateQuestionsFromChunks, 
  estimateTokens,
  analyzeTextComplexity,
  suggestChunkSize,
  optimizeTextForAPI
} from "../utils/geminiService";
import { exportQuestionsToTxt } from "../utils/questionExporter";

export default function QuestionGenerator({ onQuestionsGenerated, onBack }) {
  // Try to get API key from environment variable
  const envApiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  const [apiKey, setApiKey] = useState(envApiKey);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(""); // pdf, docx, existing
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [generatedQuestions, setGeneratedQuestions] = useState(null);
  const [generationSuccess, setGenerationSuccess] = useState(false);
  
  // Options
  const [mode, setMode] = useState("generate"); // generate or extract
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(10);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [topic, setTopic] = useState("");
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [chunkSize, setChunkSize] = useState(4000);
  const [pastedText, setPastedText] = useState("");
  const [useTextArea, setUseTextArea] = useState(false);
  const [pdfStartPage, setPdfStartPage] = useState(1);
  const [pdfEndPage, setPdfEndPage] = useState(0); // 0 means all pages
  
  const fileInputRef = useRef(null);
  
  // Debug: Log state changes
  useEffect(() => {
    console.log("🔍 State update:", {
      generationSuccess,
      hasGeneratedQuestions: !!generatedQuestions,
      questionsLength: generatedQuestions?.length || 0,
      processing,
      mode
    });
  }, [generationSuccess, generatedQuestions, processing, mode]);
  
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    const extension = selectedFile.name.split('.').pop().toLowerCase();
    
    if (!['pdf', 'docx', 'doc'].includes(extension)) {
      setError("Chỉ hỗ trợ file PDF hoặc DOCX");
      return;
    }
    
    setFile(selectedFile);
    setFileType(extension === 'pdf' ? 'pdf' : 'docx');
    setError("");
    setGenerationSuccess(false);
    setGeneratedQuestions(null);
  };
  
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setError("");
    setGenerationSuccess(false);
    setGeneratedQuestions(null);
  };
  
  const handleGenerate = async () => {
    // Check if using text area or file
    if (!useTextArea && !file) {
      setError("Vui lòng chọn file hoặc paste text vào ô bên dưới");
      return;
    }
    
    if (useTextArea && !pastedText.trim()) {
      setError("Vui lòng paste nội dung vào ô text");
      return;
    }
    
    if (mode === "generate" && !apiKey) {
      setError("Vui lòng nhập Gemini API Key");
      return;
    }
    
    setProcessing(true);
    setProgress("Đang xử lý file...");
    setError("");
    setGeneratedQuestions(null);
    setGenerationSuccess(false);
    
    try {
      let extractedText = "";
      let detectedQuestions = null;
      
      // If using text area, use pasted text directly
      if (useTextArea) {
        setProgress("Đang xử lý text đã paste...");
        extractedText = pastedText;
      }
      // Parse file based on type
      else if (fileType === "docx") {
        setProgress("Đang đọc file DOCX...");
        const docxResult = await parseDOCX(file);
        
        if (mode === "extract") {
          // Try to extract existing questions
          setProgress("Đang phát hiện câu hỏi có sẵn...");
          detectedQuestions = extractQuestionsFromDOCX(docxResult.textWithMarkers);
          
          if (detectedQuestions.length === 0) {
            throw new Error("Không tìm thấy câu hỏi trắc nghiệm trong file. Hãy thử chế độ 'Tạo câu hỏi mới'.");
          }
          
          // Convert to standard format
          const formattedQuestions = detectedQuestions.map((q, index) => {
            const correctIndex = q.options.findIndex(opt => opt.letter === q.formattedAnswer);
            return {
              text: q.text,
              options: q.options.map(opt => opt.text),
              correctAnswer: correctIndex !== -1 ? correctIndex : 0,
              chapter: "Extracted",
              source: "extracted"
            };
          });
          
          setProgress(`Đã trích xuất ${formattedQuestions.length} câu hỏi!`);
          onQuestionsGenerated(formattedQuestions, "Extracted Questions");
          setProcessing(false);
          return;
        } else {
          extractedText = docxResult.plainText;
        }
      } else if (fileType === "pdf") {
        setProgress("Đang đọc file PDF...");
        
        if (mode === "extract") {
          throw new Error("Chế độ 'Trích xuất' không hỗ trợ PDF (không detect được format). Vui lòng dùng file DOCX hoặc chế độ 'Tạo mới'.");
        }
        
        const pdfResult = await parsePDF(
          file, 
          pdfStartPage, 
          pdfEndPage > 0 ? pdfEndPage : null
        );
        setProgress(`Đã đọc ${pdfResult.extractedPages} trang từ PDF (trang ${pdfResult.startPage}-${pdfResult.endPage} / ${pdfResult.totalPages} trang tổng cộng)`);
        extractedText = pdfResult.text;
      }
      
      if (mode === "generate") {
        // Generate questions using Gemini
        setProgress("Đang kết nối với Gemini AI...");
        const model = initializeGemini(apiKey);
        
        // Estimate tokens
        const estimatedTokens = estimateTokens(extractedText);
        setProgress(`Văn bản có khoảng ${estimatedTokens} tokens. Đang xử lý...`);
        
        // Check if we need to chunk using LEANN-inspired smart chunking
        let generatedResult;
        if (estimatedTokens > chunkSize) {
          setProgress("Văn bản dài, đang sử dụng smart chunking...");
          
          // Use smart chunking with structure preservation
          const smartChunks = smartChunk(extractedText, {
            maxChunkSize: chunkSize,
            minChunkSize: 500,
            overlap: 200,
            preserveStructure: true
          });
          
          setProgress(`Đã chia thành ${smartChunks.length} phần với smart boundaries. Đang tạo câu hỏi...`);
          
          generatedResult = await generateQuestionsFromChunks(model, smartChunks, {
            numberOfQuestions,
            difficulty,
            topic,
            includeExplanations,
            language: 'vi'
          });
        } else {
          setProgress("Đang tạo câu hỏi...");
          generatedResult = await generateQuestions(model, extractedText, {
            numberOfQuestions,
            difficulty,
            topic,
            includeExplanations,
            language: 'vi'
          });
        }
        
        setProgress("Hoàn thành! Đang chuyển sang màn hình câu hỏi...");
        
        // Debug: Log generatedResult structure
        console.log("🔍 Generated result structure:", {
          type: typeof generatedResult,
          isArray: Array.isArray(generatedResult),
          hasQuestions: generatedResult?.questions ? true : false,
          questionsLength: generatedResult?.questions?.length || 0,
          keys: generatedResult && typeof generatedResult === 'object' ? Object.keys(generatedResult) : 'N/A'
        });
        
        // Collect all generated questions from chunks
        let allGeneratedQuestions = [];
        
        // Try multiple ways to extract questions
        if (generatedResult) {
          // Method 1: Check if result has questions array
          if (generatedResult.questions && Array.isArray(generatedResult.questions)) {
            allGeneratedQuestions = generatedResult.questions;
            console.log(`📦 Method 1: Collected ${allGeneratedQuestions.length} questions from result.questions`);
          }
          // Method 2: Check if result itself is an array
          else if (Array.isArray(generatedResult)) {
            allGeneratedQuestions = generatedResult;
            console.log(`📦 Method 2: Collected ${allGeneratedQuestions.length} questions from array`);
          }
          // Method 3: Check if result has text and we need to parse (fallback)
          else if (generatedResult.text && typeof generatedResult.text === 'string') {
            console.log(`⚠️ Result has text but no questions array, will parse from text`);
          }
        }
        
        console.log(`📊 Final allGeneratedQuestions length: ${allGeneratedQuestions.length}`);
        console.log(`📊 Mode: ${mode}, Should show save button: ${allGeneratedQuestions.length > 0 && mode === "generate"}`);
        console.log(`🔍 Debug check: allGeneratedQuestions.length=${allGeneratedQuestions.length}, mode="${mode}", condition=${allGeneratedQuestions.length > 0 && mode === "generate"}`);
        
        // If we have questions array from result.questions, it's definitely AI generation
        // Always show success message for AI-generated questions
        if (allGeneratedQuestions.length > 0 && generatedResult && generatedResult.questions) {
          console.log(`✅ AI Generated questions detected from result.questions! Setting state...`);
          setGeneratedQuestions(allGeneratedQuestions);
          setGenerationSuccess(true);
          setProcessing(false); // Stop processing to show success message
          console.log(`✅ Generated ${allGeneratedQuestions.length} questions, ready to save to TXT`);
          // Don't navigate immediately - wait for user to click "Tiếp tục" or "Làm bài ngay"
          return;
        }
        
        // Fallback: if we have questions but not from result.questions, still try to show save option if mode is generate
        if (allGeneratedQuestions.length > 0 && mode === "generate") {
          console.log(`✅ AI Generated questions detected (mode check)! Setting state...`);
          setGeneratedQuestions(allGeneratedQuestions);
          setGenerationSuccess(true);
          setProcessing(false);
          console.log(`✅ Generated ${allGeneratedQuestions.length} questions, ready to save to TXT`);
          return;
        }
        
        // For other cases, navigate immediately
        if (allGeneratedQuestions.length > 0) {
          console.log(`✅ Passing ${allGeneratedQuestions.length} questions directly (not AI generated or extract mode)`);
          onQuestionsGenerated(allGeneratedQuestions, "Generated Questions");
        } else {
          // Fallback to text parsing
          const textToParse = typeof generatedResult === 'string' ? generatedResult : generatedResult.text;
          onQuestionsGenerated(textToParse, "Generated Questions");
        }
      }
      
      setProcessing(false);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Có lỗi xảy ra. Vui lòng thử lại.");
      setProcessing(false);
      setProgress("");
    }
  };
  
  return (
    <div className="generator-container">
      <div className="generator-header">
        <h2>🤖 Tạo câu hỏi tự động với AI</h2>
        <p className="generator-subtitle">Sử dụng Gemini AI để tạo câu hỏi từ tài liệu của bạn</p>
      </div>
      
      {/* API Key Input */}
      <div className="generator-section">
        <label className="generator-label">
          <span className="label-icon">🔑</span>
          Gemini API Key
          <a 
            href="https://aistudio.google.com/apikey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="api-key-link"
          >
            (Lấy key miễn phí)
          </a>
        </label>
        
        {envApiKey ? (
          <div className="env-key-notice">
            <span className="env-icon">✅</span>
            <span>API Key đã được cấu hình từ file .env.local</span>
            <button 
              className="btn-change-key"
              onClick={() => setApiKey("")}
              type="button"
            >
              Đổi key khác
            </button>
          </div>
        ) : (
          <>
            <input
              type="password"
              className="generator-input"
              placeholder="Nhập Gemini API Key của bạn..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="helper-text">
              💡 Tip: Tạo file <code>.env.local</code> với <code>VITE_GEMINI_API_KEY=your_key</code> để không cần nhập lại
            </p>
          </>
        )}
        
        {!envApiKey && (
          <p className="helper-text">
            API key sẽ không được lưu trữ, chỉ dùng trong phiên này
          </p>
        )}
      </div>
      
      {/* Mode Selection */}
      <div className="generator-section">
        <label className="generator-label">
          <span className="label-icon">⚙️</span>
          Chế độ xử lý
        </label>
        <div className="mode-buttons">
          <button
            className={`mode-btn ${mode === "generate" ? "active" : ""}`}
            onClick={() => handleModeChange("generate")}
          >
            <span className="mode-icon">✨</span>
            <div className="mode-info">
              <div className="mode-title">Tạo câu hỏi mới</div>
              <div className="mode-desc">Dùng AI tạo câu hỏi từ nội dung</div>
            </div>
          </button>
          <button
            className={`mode-btn ${mode === "extract" ? "active" : ""}`}
            onClick={() => handleModeChange("extract")}
          >
            <span className="mode-icon">📝</span>
            <div className="mode-info">
              <div className="mode-title">Trích xuất câu hỏi</div>
              <div className="mode-desc">Phát hiện câu hỏi có sẵn (chữ nghiêng = đáp án)</div>
            </div>
          </button>
        </div>
      </div>
      
      {/* File Upload or Text Input Toggle */}
      <div className="generator-section">
        <label className="generator-label">
          <span className="label-icon">📄</span>
          Nguồn nội dung
        </label>
        
        <div className="input-method-toggle">
          <button
            type="button"
            className={`toggle-btn ${!useTextArea ? 'active' : ''}`}
            onClick={() => {
              setUseTextArea(false);
              setPastedText("");
            }}
          >
            📁 Upload File
          </button>
          <button
            type="button"
            className={`toggle-btn ${useTextArea ? 'active' : ''}`}
            onClick={() => {
              setUseTextArea(true);
              setFile(null);
            }}
          >
            📝 Paste Text
          </button>
        </div>
        
        {!useTextArea ? (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <button 
              className="upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              {file ? `📎 ${file.name}` : "Chọn file PDF hoặc DOCX"}
            </button>
            {file && (
              <>
                <div className="file-info">
                  <span>Loại: {fileType.toUpperCase()}</span>
                  <span>Kích thước: {(file.size / 1024).toFixed(2)} KB</span>
                </div>
                
                {fileType === "pdf" && (
                  <div className="pdf-page-selector">
                    <label className="page-label">Chọn trang PDF:</label>
                    <div className="page-inputs">
                      <div className="page-input-group">
                        <label>Từ trang</label>
                        <input
                          type="number"
                          min="1"
                          value={pdfStartPage}
                          onChange={(e) => setPdfStartPage(parseInt(e.target.value) || 1)}
                          className="generator-input small"
                        />
                      </div>
                      <span className="page-separator">→</span>
                      <div className="page-input-group">
                        <label>Đến trang</label>
                        <input
                          type="number"
                          min="0"
                          value={pdfEndPage}
                          onChange={(e) => setPdfEndPage(parseInt(e.target.value) || 0)}
                          className="generator-input small"
                          placeholder="0 = Tất cả"
                        />
                      </div>
                    </div>
                    <p className="helper-text">
                      💡 Để 0 ở "Đến trang" để đọc hết file
                    </p>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <textarea
              className="text-input-area"
              placeholder="Paste nội dung từ PDF hoặc bất kỳ nguồn nào vào đây...&#10;&#10;VD: Copy text từ PDF viewer, Word, hoặc bất kỳ tài liệu nào"
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              rows={10}
            />
            {pastedText && (
              <div className="text-info">
                <span>📊 {pastedText.length} ký tự</span>
                <span>📄 ~{Math.ceil(pastedText.length / 4000)} chunks</span>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Options for Generate Mode */}
      {mode === "generate" && (
        <div className="generator-section">
          <label className="generator-label">
            <span className="label-icon">🎯</span>
            Tùy chọn tạo câu hỏi
          </label>
          
          <div className="options-grid">
            <div className="option-item">
              <label>Số lượng câu hỏi</label>
              <div className="number-input-wrapper">
                <input
                  type="number"
                  className="generator-input small"
                  min="0"
                  max="100"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                  placeholder="0 = Tối đa"
                />
                <button
                  type="button"
                  className="btn-max-questions"
                  onClick={() => setNumberOfQuestions(0)}
                  title="Tạo tối đa câu hỏi có thể"
                >
                  ∞ Max
                </button>
              </div>
              <p className="helper-text">
                💡 Nhập 0 hoặc click "Max" để AI tự động tạo tối đa câu hỏi có thể
              </p>
            </div>
            
            <div className="option-item">
              <label>Độ khó</label>
              <select
                className="generator-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Dễ</option>
                <option value="medium">Trung bình</option>
                <option value="hard">Khó</option>
              </select>
            </div>
            
            <div className="option-item full-width">
              <label>Chủ đề tập trung (tùy chọn)</label>
              <input
                type="text"
                className="generator-input"
                placeholder="VD: Mạng máy tính, TCP/IP..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            
            <div className="option-item">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={includeExplanations}
                  onChange={(e) => setIncludeExplanations(e.target.checked)}
                />
                <span>Bao gồm giải thích</span>
              </label>
            </div>
          </div>
        </div>
      )}
      
      {/* Error Display */}
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}
      
      {/* Progress Display */}
      {processing && (
        <div className="progress-message">
          <div className="progress-spinner"></div>
          <span>{progress}</span>
        </div>
      )}
      
      {/* Success Message with Save Option - Only show for AI generation mode */}
      {generationSuccess && generatedQuestions && generatedQuestions.length > 0 && !processing && mode === "generate" && (
        <div className="success-message">
          <div className="success-header">
            <span className="success-icon">✅</span>
            <div className="success-content">
              <strong>Đã tạo thành công {generatedQuestions.length} câu hỏi!</strong>
              <p>Bạn có thể lưu toàn bộ câu hỏi ra file TXT để sử dụng sau, hoặc tiếp tục để làm bài ngay.</p>
            </div>
          </div>
          <div className="success-actions">
            <button
              className="btn-save-txt"
              onClick={() => {
                const filename = `ai_questions_${new Date().toISOString().split('T')[0]}.txt`;
                exportQuestionsToTxt(generatedQuestions, filename);
                alert(`✅ Đã lưu ${generatedQuestions.length} câu hỏi ra file ${filename}`);
              }}
            >
              💾 Lưu toàn bộ câu hỏi ra TXT
            </button>
            <button
              className="btn-continue"
              onClick={() => {
                // Navigate to quiz with generated questions
                onQuestionsGenerated(generatedQuestions, "Generated Questions");
                setGenerationSuccess(false);
                setGeneratedQuestions(null);
              }}
            >
              ➡️ Tiếp tục làm bài
            </button>
            <button
              className="btn-dismiss"
              onClick={() => {
                // Still navigate to quiz even when closing
                if (generatedQuestions && generatedQuestions.length > 0) {
                  onQuestionsGenerated(generatedQuestions, "Generated Questions");
                }
                setGenerationSuccess(false);
                setGeneratedQuestions(null);
              }}
            >
              ➡️ Làm bài ngay
            </button>
          </div>
        </div>
      )}
      
      {/* Action Buttons */}
      <div className="generator-actions">
        <button
          className="btn-generate"
          onClick={handleGenerate}
          disabled={processing || generationSuccess || !file || (mode === "generate" && !apiKey) || (useTextArea && !pastedText.trim())}
        >
          {processing ? "Đang xử lý..." : (mode === "generate" ? "🚀 Tạo câu hỏi" : "📥 Trích xuất")}
        </button>
        <button className="btn-back" onClick={onBack}>
          ← Quay lại
        </button>
      </div>
      
      {/* Info Box */}
      <div className="info-box">
        <h4>💡 Lưu ý:</h4>
        <ul>
          <li><strong>Tạo câu hỏi mới:</strong> AI sẽ đọc nội dung và tạo câu hỏi trắc nghiệm mới với LEANN-inspired smart chunking</li>
          <li><strong>Trích xuất câu hỏi:</strong> Phát hiện câu hỏi có sẵn trong file DOCX. <strong>Chữ in nghiêng (italic) HOẶC in đậm (bold)</strong> được coi là đáp án đúng</li>
          <li><strong>File PDF:</strong> ✅ Hỗ trợ đầy đủ! Có thể chọn trang cụ thể (từ trang X đến trang Y). Chỉ dùng cho "Tạo mới"</li>
          <li><strong>File DOCX:</strong> Hỗ trợ cả "Tạo mới" và "Trích xuất", có thể detect chữ in nghiêng và in đậm</li>
          <li><strong>Paste Text:</strong> Paste trực tiếp từ bất kỳ nguồn nào (PDF reader, Word, web...)</li>
          <li><strong>API Key:</strong> Lấy miễn phí tại <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a> hoặc config trong .env.local</li>
          <li><strong>Max Questions (∞):</strong> Nhập 0 hoặc click "Max" để AI tự động tạo tối đa câu hỏi có thể từ nội dung</li>
          <li><strong>Smart Chunking:</strong> Tự động merge chunks để tối ưu tốc độ và chất lượng</li>
        </ul>
      </div>
    </div>
  );
}
