import { useState, useEffect } from "react";

import FileSelector from "./components/FileSelector";
import Quiz from "./components/Quiz";
import Navigation from "./components/Navigation";
import Results from "./components/Results";
import Review from "./components/Review";
import QuestionGenerator from "./components/QuestionGenerator";
import {
  saveQuestionsToStorage,
  loadQuestionsFromStorage,
  getAllSavedQuestionSets,
  exportQuestionsToTxt,
} from "./utils/questionExporter";
import "./App.css";

function getChapters(questions) {
  const chapters = {};
  questions.forEach((q) => {
    if (q.chapter) {
      chapters[q.chapter] = (chapters[q.chapter] || 0) + 1;
    }
  });
  return chapters;
}

// Base question files
const baseQuestionFiles = [
  { path: "ktct.txt", title: "Kinh tế Chính trị", code: "KTCT" },
  { path: "nlmkt.txt", title: "Nguyên lý Marketing", code: "NLMKT" },
  { path: "mmt.txt", title: "Mạng Máy Tính", code: "MMT" },
];

// Function to get all available question files (including saved AI questions)
function getAvailableQuestionFiles() {
  const files = [...baseQuestionFiles];

  // Check for saved AI generated questions
  const savedSets = getAllSavedQuestionSets();
  savedSets.forEach((set) => {
    files.unshift({
      path: set.key, // Use key as identifier
      title: set.name,
      code: "AI",
      isSaved: true,
      count: set.count,
    });
  });

  return files;
}

function App() {
  // App state
  const [screen, setScreen] = useState("file"); // file, practice-mode, chapter, quiz, results, review, generator
  const [practiceMode, setPracticeMode] = useState(null); // null, "by-chapter", "random-50", "random-by-chapter"
  const [randomQuestionCount, setRandomQuestionCount] = useState(50); // Number of questions for random practice
  const [questionFiles, setQuestionFiles] = useState(
    getAvailableQuestionFiles()
  );
  const [selectedFile, setSelectedFile] = useState(
    questionFiles[0]?.path || baseQuestionFiles[0].path
  );
  const [questions, setQuestions] = useState([]);

  // Update question files when component mounts or when screen changes
  useEffect(() => {
    const updatedFiles = getAvailableQuestionFiles();
    setQuestionFiles(updatedFiles);
  }, [screen]); // Re-check when screen changes
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [loading, setLoading] = useState(false);

  // Debug: Log screen changes
  useEffect(() => {
    console.log(`🖥️ Screen changed to: "${screen}"`);
    if (screen === "select-random-count") {
      console.log("✅ select-random-count screen should be visible");
    }
  }, [screen]);

  // Parse .txt file content into questions
  function parseQuestionsFromTxt(txt) {
    const lines = txt.split(/\r?\n/);
    const questions = [];
    let currentQuestionText = "";
    let currentOptions = [];
    let currentOptionLetters = [];
    let correctAnswerInfo = null;
    let chapterIdentifier = "";
    let currentExplanation = "";
    let collectingExplanation = false;

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Skip empty lines when not collecting explanation
      if (!trimmedLine && !collectingExplanation) return;

      // Chapter identifier (format: "CHƯƠNG X" or "CHƯƠNG X: Title")
      const chapterMatch = trimmedLine.match(/^(CHƯƠNG\s*\d+)(?::\s*(.*))?$/i);
      if (chapterMatch) {
        chapterIdentifier = chapterMatch[1];
        collectingExplanation = false;
        return;
      }

      // Explanation start (format: "^explanation text`" or "^explanation text")
      if (trimmedLine.startsWith("^")) {
        const explanationContent = trimmedLine.substring(1);
        if (explanationContent.endsWith("`")) {
          currentExplanation = explanationContent.slice(0, -1).trim();
          // Save question with explanation
          if (
            currentQuestionText &&
            currentOptions.length > 0 &&
            correctAnswerInfo
          ) {
            const correctIndex = currentOptionLetters.indexOf(
              correctAnswerInfo.letter
            );
            if (correctIndex !== -1) {
              questions.push({
                text: currentQuestionText.trim(),
                options: currentOptions,
                correctAnswer: correctIndex,
                chapter: chapterIdentifier || "AI Generated",
                explanation: currentExplanation,
              });
            }
          }
          // Reset
          currentQuestionText = "";
          currentOptions = [];
          currentOptionLetters = [];
          correctAnswerInfo = null;
          currentExplanation = "";
          collectingExplanation = false;
        } else {
          currentExplanation = explanationContent.trim();
          collectingExplanation = true;
        }
        return;
      }

      // Continue collecting explanation
      if (collectingExplanation) {
        if (trimmedLine.endsWith("`")) {
          currentExplanation += " " + trimmedLine.slice(0, -1).trim();
          // Save question with explanation
          if (
            currentQuestionText &&
            currentOptions.length > 0 &&
            correctAnswerInfo
          ) {
            const correctIndex = currentOptionLetters.indexOf(
              correctAnswerInfo.letter
            );
            if (correctIndex !== -1) {
              questions.push({
                text: currentQuestionText.trim(),
                options: currentOptions,
                correctAnswer: correctIndex,
                chapter: chapterIdentifier || "AI Generated",
                explanation: currentExplanation,
              });
            }
          }
          // Reset
          currentQuestionText = "";
          currentOptions = [];
          currentOptionLetters = [];
          correctAnswerInfo = null;
          currentExplanation = "";
          collectingExplanation = false;
        } else if (trimmedLine) {
          currentExplanation += " " + trimmedLine;
        }
        return;
      }

      // Question start (format: "Câu X: question text")
      const questionMatch = trimmedLine.match(/^Câu\s+\d+:\s*(.+)$/i);
      if (questionMatch) {
        // Save previous question if exists (without explanation)
        if (
          currentQuestionText &&
          currentOptions.length > 0 &&
          correctAnswerInfo
        ) {
          const correctIndex = currentOptionLetters.indexOf(
            correctAnswerInfo.letter
          );
          if (correctIndex !== -1) {
            questions.push({
              text: currentQuestionText.trim(),
              options: currentOptions,
              correctAnswer: correctIndex,
              chapter: chapterIdentifier,
            });
          }
        }
        // Start new question
        currentQuestionText = questionMatch[1].trim();
        currentOptions = [];
        currentOptionLetters = [];
        correctAnswerInfo = null;
        return;
      }

      // Option (format: "A. option text")
      const optionMatch = trimmedLine.match(/^([A-D])\.\s*(.*)$/);
      if (optionMatch && !trimmedLine.startsWith("•")) {
        currentOptionLetters.push(optionMatch[1].toUpperCase());
        currentOptions.push(optionMatch[2].trim());
        return;
      }

      // Correct answer (format: "• A. answer text;" or "•    A.  a;")
      const correctAnswerMatch = trimmedLine.match(
        /^•\s*([A-D])\.\s*(.*?);?\s*$/i
      );
      if (correctAnswerMatch) {
        correctAnswerInfo = {
          letter: correctAnswerMatch[1].toUpperCase(),
          text: correctAnswerMatch[2].replace(/;$/, "").trim(),
        };
        return;
      }
    });

    // Save last question if exists (without explanation)
    if (currentQuestionText && currentOptions.length > 0 && correctAnswerInfo) {
      const correctIndex = currentOptionLetters.indexOf(
        correctAnswerInfo.letter
      );
      if (correctIndex !== -1) {
        questions.push({
          text: currentQuestionText.trim(),
          options: currentOptions,
          correctAnswer: correctIndex,
          chapter: chapterIdentifier,
        });
      }
    }

    return questions;
  }

  // Load questions when file is selected
  const handleFileSelect = async (filePath) => {
    setSelectedFile(filePath);
    setLoading(true);
    try {
      // Check if it's a saved question set (from localStorage)
      if (
        filePath === "ai_generated_questions" ||
        filePath.startsWith("saved_")
      ) {
        const savedQuestions = loadQuestionsFromStorage(filePath);
        if (savedQuestions && savedQuestions.length > 0) {
          setQuestions(savedQuestions);
          setScreen("practice-mode");
          setPracticeMode(null);
          setSelectedChapter("");
          setFilteredQuestions([]);
          setCurrentQuestionIndex(0);
          setUserAnswers([]);
          setShowFeedback(false);
          setLoading(false);
          return;
        } else {
          alert("Không tìm thấy câu hỏi đã lưu. Vui lòng tạo câu hỏi mới!");
          setLoading(false);
          return;
        }
      }

      // Dynamically import the text file
      let txt = "";
      if (filePath === "ktct.txt") {
        txt = (await import("./assets/ktct.txt?raw")).default;
      } else if (filePath === "nlmkt.txt") {
        txt = (await import("./assets/nlmkt.txt?raw")).default;
      } else if (filePath === "mmt.txt") {
        txt = (await import("./assets/mmt.txt?raw")).default;
      }

      const parsedQuestions = parseQuestionsFromTxt(txt);

      if (parsedQuestions.length === 0) {
        alert(
          "Không tìm thấy câu hỏi trong file. Vui lòng kiểm tra định dạng!"
        );
        setLoading(false);
        return;
      }

      setQuestions(parsedQuestions);
      setScreen("practice-mode");
      setPracticeMode(null);
      setSelectedChapter("");
      setFilteredQuestions([]);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowFeedback(false);
    } catch (err) {
      console.error("Error loading questions:", err);
      alert("Không thể tải file câu hỏi. Vui lòng thử lại!");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle chapter selection
  const handleChapterSelect = (chapter, questionsToFilter = null) => {
    console.log(`🎯 Selecting chapter: ${chapter}`);
    setSelectedChapter(chapter);
    // Use provided questions or fallback to state
    const questionsSource = questionsToFilter || questions;
    console.log(
      `📊 Filtering from ${questionsSource.length} questions for chapter: ${chapter}`
    );

    // Debug: Show all chapters in questions
    const allChapters = [
      ...new Set(questionsSource.map((q) => q.chapter || "No chapter")),
    ];
    console.log(`📚 Available chapters in questions:`, allChapters);

    // Filter questions - handle both exact match and fallback to "AI Generated"
    let filtered = questionsSource.filter((q) => {
      const qChapter = q.chapter || "AI Generated";
      return qChapter === chapter;
    });

    // If no exact match and chapter is "AI Generated", try to get all questions without chapter
    if (filtered.length === 0 && chapter === "AI Generated") {
      filtered = questionsSource.filter(
        (q) => !q.chapter || q.chapter === "AI Generated" || q.chapter === ""
      );
    }

    console.log(`✅ Filtered to ${filtered.length} questions`);

    if (filtered.length === 0) {
      console.error(`❌ No questions found for chapter: ${chapter}`);
      console.error(`Available chapters:`, allChapters);
      alert(
        `Không tìm thấy câu hỏi nào cho chương "${chapter}".\n\nCác chương có sẵn: ${allChapters.join(
          ", "
        )}`
      );
      return;
    }

    // If practice mode is "random-by-chapter", shuffle and limit questions
    if (practiceMode === "random-by-chapter") {
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      const availableCount = shuffled.length;
      // Limit to selected count, but don't exceed available questions
      const limited = shuffled.slice(
        0,
        Math.min(randomQuestionCount, availableCount)
      );
      filtered = limited;

      // Show info if requested count is more than available
      if (randomQuestionCount > availableCount) {
        console.log(
          `ℹ️ Chương "${chapter}" chỉ có ${availableCount} câu hỏi (yêu cầu: ${randomQuestionCount}). Sẽ làm ${availableCount} câu.`
        );
      }

      console.log(
        `🎲 Shuffled and limited to ${filtered.length} questions (requested: ${randomQuestionCount}, available: ${availableCount})`
      );
    }

    setFilteredQuestions(filtered);
    setScreen("quiz");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowFeedback(false);
    console.log(`✅ Quiz screen activated with ${filtered.length} questions`);
  };

  // Handle option selection
  const handleSelectOption = (idx) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = idx;
    setUserAnswers(updatedAnswers);
    setShowFeedback(true);
  };

  // Navigation
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowFeedback(false);
    }
  };
  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    }
  };

  // Submit quiz
  const handleSubmitQuiz = () => {
    setScreen("results");
  };

  // Restart quiz
  const handleRestart = () => {
    setScreen("quiz");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowFeedback(false);
  };

  // Show review
  const handleShowReview = () => {
    setScreen("review");
  };
  const handleBackToResults = () => {
    setScreen("results");
  };
  const handleBackToMain = () => {
    setScreen("file");
  };

  // Handle back from chapter screen - go to practice-mode if exists, otherwise go to file
  const handleBackFromChapter = () => {
    if (practiceMode !== null) {
      setScreen("practice-mode");
    } else {
      setScreen("file");
    }
  };

  // Handle going to generator
  const handleGoToGenerator = () => {
    setScreen("generator");
  };

  // Handle questions generated from AI
  const handleQuestionsGenerated = (generatedContent) => {
    // If it's already parsed questions (from extract mode or AI generation)
    if (Array.isArray(generatedContent)) {
      console.log(`📥 Received ${generatedContent.length} questions directly`);

      // Validate questions
      if (generatedContent.length === 0) {
        alert("Không có câu hỏi nào được tạo. Vui lòng thử lại!");
        return;
      }

      // Auto-save to localStorage
      const saved = saveQuestionsToStorage(
        generatedContent,
        "ai_generated_questions"
      );
      if (saved) {
        console.log("✅ Questions saved to localStorage");
        // Update question files list - will trigger on next render
        setTimeout(() => {
          setQuestionFiles(getAvailableQuestionFiles());
        }, 100);
      }

      setQuestions(generatedContent);

      // Check if all questions have same chapter or only one chapter
      const chapters = getChapters(generatedContent);
      const chapterKeys = Object.keys(chapters);

      console.log(`📚 Found ${chapterKeys.length} chapters:`, chapterKeys);

      // If only one chapter (or all AI Generated), go directly to quiz
      if (chapterKeys.length <= 1) {
        const chapter = chapterKeys[0] || "AI Generated";
        console.log(`✅ Auto-selecting chapter: ${chapter}, going to quiz...`);
        // Pass questions directly to avoid state timing issues
        handleChapterSelect(chapter, generatedContent);
      } else {
        console.log(`📑 Multiple chapters found, showing selection screen...`);
        setScreen("chapter");
        setSelectedChapter("");
        setFilteredQuestions([]);
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setShowFeedback(false);
      }
      return;
    }

    // Otherwise, parse the generated text
    const parsedQuestions = parseQuestionsFromTxt(generatedContent);

    if (parsedQuestions.length === 0) {
      alert("Không thể phân tích câu hỏi được tạo. Vui lòng thử lại!");
      return;
    }

    setQuestions(parsedQuestions);

    // Check chapters - if all are "AI Generated" or only one chapter, skip selection
    const chapters = getChapters(parsedQuestions);
    const chapterKeys = Object.keys(chapters);

    if (
      chapterKeys.length <= 1 ||
      chapterKeys.every((ch) => !ch || ch === "AI Generated")
    ) {
      // Auto-select the chapter and go to quiz
      const chapter = chapterKeys[0] || "AI Generated";
      console.log(`✅ Auto-selecting chapter: ${chapter}, going to quiz...`);
      // Pass questions directly to avoid state timing issues
      handleChapterSelect(chapter, parsedQuestions);
    } else {
      // Multiple chapters, show selection
      setScreen("chapter");
      setSelectedChapter("");
      setFilteredQuestions([]);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setShowFeedback(false);
    }
  };

  // Results details
  const score = filteredQuestions.reduce(
    (acc, q, i) => acc + (userAnswers[i] === q.correctAnswer ? 1 : 0),
    0
  );
  const details = filteredQuestions
    .map((q, i) => {
      const userAns =
        userAnswers[i] !== undefined ? q.options[userAnswers[i]] : "Chưa chọn";
      const correctAns = q.options[q.correctAnswer];
      return `Câu ${i + 1}: Bạn chọn: ${userAns} | Đúng: ${correctAns}`;
    })
    .join("\n");

  return (
    <>
      <header className="app-header">
        <h1 className="app-title">📚 Hệ thống Trắc nghiệm Online</h1>
        <p className="app-subtitle">Luyện tập và kiểm tra kiến thức của bạn</p>
      </header>

      <div className="app-container">
        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Đang tải câu hỏi...</p>
          </div>
        )}

        {!loading && screen === "file" && (
          <>
            <FileSelector
              files={questionFiles}
              selectedFile={selectedFile}
              onSelect={handleFileSelect}
            />
            <div className="divider-section">
              <div className="divider-line"></div>
              <span className="divider-text">HOẶC</span>
              <div className="divider-line"></div>
            </div>
            <button onClick={handleGoToGenerator} className="btn-ai-generator">
              <span className="ai-icon">🤖</span>
              <div className="ai-text">
                <div className="ai-title">
                  Tạo câu hỏi tự động với AI
                  <span className="new-badge">Mới</span>
                </div>
                <div className="ai-desc">Upload PDF/DOCX và dùng Gemini AI</div>
              </div>
            </button>
          </>
        )}
        {screen === "generator" && (
          <QuestionGenerator
            onQuestionsGenerated={handleQuestionsGenerated}
            onBack={handleBackToMain}
          />
        )}
        {screen === "practice-mode" && questions.length > 0 && (
          <div className="practice-mode-selection">
            <h2>Chọn chế độ ôn tập</h2>
            <div className="practice-mode-options">
              <button
                className="practice-mode-btn"
                onClick={() => {
                  console.log("📖 Clicked 'Ôn tập theo chương'");
                  setPracticeMode("by-chapter");
                  setScreen("chapter");
                  console.log("✅ Set screen to 'chapter'");
                }}
              >
                <span className="mode-icon">📖</span>
                <div className="mode-content">
                  <div className="mode-title">Ôn tập theo chương</div>
                  <div className="mode-desc">Chọn chương cụ thể để ôn tập</div>
                </div>
              </button>

              <button
                className="practice-mode-btn"
                onClick={() => {
                  console.log("🎲 Clicked 'Ôn tập ngẫu nhiên (50 câu)'");
                  // Random 50 questions from all questions
                  const shuffled = [...questions].sort(
                    () => Math.random() - 0.5
                  );
                  const random50 = shuffled.slice(
                    0,
                    Math.min(50, shuffled.length)
                  );
                  setFilteredQuestions(random50);
                  setPracticeMode("random-50");
                  setScreen("quiz");
                  setCurrentQuestionIndex(0);
                  setUserAnswers([]);
                  setShowFeedback(false);
                  console.log(
                    "✅ Set screen to 'quiz' with random 50 questions"
                  );
                }}
              >
                <span className="mode-icon">🎲</span>
                <div className="mode-content">
                  <div className="mode-title">Ôn tập ngẫu nhiên (50 câu)</div>
                  <div className="mode-desc">
                    Làm 50 câu hỏi ngẫu nhiên từ tất cả chương
                  </div>
                </div>
              </button>

              <button
                className="practice-mode-btn"
                onClick={() => {
                  console.log("📚 Clicked 'Ôn tập ngẫu nhiên theo chương'");
                  setPracticeMode("random-by-chapter");
                  setScreen("select-random-count");
                  console.log("✅ Set screen to 'select-random-count'");
                }}
              >
                <span className="mode-icon">📚</span>
                <div className="mode-content">
                  <div className="mode-title">
                    Ôn tập ngẫu nhiên theo chương
                  </div>
                  <div className="mode-desc">
                    Chọn số lượng câu hỏi và chương để làm bài ngẫu nhiên
                  </div>
                </div>
              </button>
            </div>
            <button
              className="btn-back"
              onClick={() => {
                console.log("🔙 Clicked 'Quay về chọn môn học'");
                handleBackToMain();
              }}
            >
              ← Quay về chọn môn học
            </button>
          </div>
        )}

        {screen === "select-random-count" && (
          <div className="random-count-selection">
            <h2>Chọn số lượng câu hỏi</h2>
            <p className="selection-subtitle">
              Chọn số lượng câu hỏi bạn muốn làm ngẫu nhiên từ chương đã chọn
            </p>
            <p
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                opacity: 0.7,
                fontSize: "0.9rem",
              }}
            >
              Số lượng hiện tại: <strong>{randomQuestionCount}</strong> câu hỏi
            </p>
            <div className="count-buttons">
              {[10, 15, 20, 25, 30, 50, 100].map((count) => (
                <button
                  key={count}
                  className={`count-btn ${
                    randomQuestionCount === count ? "active" : ""
                  }`}
                  onClick={() => {
                    setRandomQuestionCount(count);
                    setScreen("chapter");
                  }}
                >
                  <span className="count-number">{count}</span>
                  <span className="count-label">câu hỏi</span>
                </button>
              ))}
            </div>
            <button
              className="btn-back"
              onClick={() => setScreen("practice-mode")}
            >
              ← Quay về chọn chế độ
            </button>
          </div>
        )}

        {screen === "chapter" && questions.length > 0 && (
          <div className="chapter-selection">
            <h2>Chọn chương để bắt đầu</h2>
            <div className="chapter-buttons">
              {Object.entries(getChapters(questions)).map(
                ([chapter, count]) => (
                  <button
                    key={chapter}
                    className={`chapter-btn${
                      selectedChapter === chapter ? " active" : ""
                    }`}
                    onClick={() => handleChapterSelect(chapter)}
                  >
                    <span className="chapter-name">{chapter}</span>
                    <span className="chapter-count">{count} câu hỏi</span>
                  </button>
                )
              )}
            </div>
            <button className="btn-back" onClick={handleBackFromChapter}>
              ←{" "}
              {practiceMode !== null
                ? "Quay về chọn chế độ"
                : "Quay về chọn môn học"}
            </button>
          </div>
        )}
        {screen === "quiz" && (
          <>
            {filteredQuestions.length > 0 ? (
              <>
                <Quiz
                  question={filteredQuestions[currentQuestionIndex]}
                  questionIndex={currentQuestionIndex}
                  totalQuestions={filteredQuestions.length}
                  onSelectOption={handleSelectOption}
                  selectedOption={userAnswers[currentQuestionIndex]}
                  showFeedback={showFeedback}
                />
                <Navigation
                  onPrev={handlePrev}
                  onNext={handleNext}
                  hasPrev={currentQuestionIndex > 0}
                  hasNext={currentQuestionIndex < filteredQuestions.length - 1}
                />
                <button className="btn-submit" onClick={handleSubmitQuiz}>
                  ✓ Nộp bài
                </button>
              </>
            ) : (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                <div>
                  <strong>Không có câu hỏi nào để hiển thị.</strong>
                  <p>
                    Đã có {questions.length} câu hỏi tổng cộng, nhưng không tìm
                    thấy câu hỏi cho chương đã chọn.
                  </p>
                  <p>Chương đã chọn: {selectedChapter || "N/A"}</p>
                  <button
                    onClick={handleBackToMain}
                    style={{ marginTop: "1rem" }}
                  >
                    Quay về
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        {screen === "results" && (
          <Results
            score={score}
            total={filteredQuestions.length}
            details={details}
            onRestart={handleRestart}
            onReview={handleShowReview}
            onBack={handleBackToMain}
            onSaveQuestions={() => {
              // Save current filtered questions
              const questionsToSave =
                filteredQuestions.length > 0 ? filteredQuestions : questions;
              saveQuestionsToStorage(questionsToSave, "ai_generated_questions");
              setQuestionFiles(getAvailableQuestionFiles());
              alert(
                `✅ Đã lưu ${questionsToSave.length} câu hỏi! Bạn có thể chọn "KTCT Chương AI" để làm lại.`
              );
            }}
            onExportTxt={() => {
              // Export current questions to TXT
              const questionsToExport =
                filteredQuestions.length > 0 ? filteredQuestions : questions;
              const filename = `questions_${
                new Date().toISOString().split("T")[0]
              }.txt`;
              exportQuestionsToTxt(questionsToExport, filename);
            }}
            canSave={filteredQuestions.length > 0 || questions.length > 0}
          />
        )}
        {screen === "review" && (
          <Review
            questions={filteredQuestions}
            userAnswers={userAnswers}
            onBack={handleBackToResults}
          />
        )}
      </div>
    </>
  );
}

export default App;
