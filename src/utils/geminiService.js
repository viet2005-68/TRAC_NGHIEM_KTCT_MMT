import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Initialize Gemini API
 * Support both gemini-pro and newer models
 */
export function initializeGemini(apiKey) {
  if (!apiKey) {
    throw new Error('API key is required');
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // Try gemini-1.5-flash first (faster, cheaper, AI Studio default)
    // Fallback to gemini-pro if flash not available
    return genAI.getGenerativeModel({
      model: 'gemini-2.5-pro',
      generationConfig: {
        temperature: 0.0,
        topK: 40,
        topP: 0.95,
      },
    });
  } catch (error) {
    console.error('Error initializing Gemini:', error);
    throw new Error('Không thể khởi tạo Gemini API. Vui lòng kiểm tra API key.');
  }
}

/**
 * Generate multiple choice questions from text using Gemini
 */
export async function generateQuestions(model, text, options = {}) {
  const {
    numberOfQuestions = 10,
    language = 'vi', // Vietnamese
    difficulty = 'medium', // easy, medium, hard
    topic = '',
    includeExplanations = true
  } = options;

  const languageInstruction = language === 'vi'
    ? 'Tạo câu hỏi bằng tiếng Việt'
    : 'Create questions in English';

  const difficultyInstruction = {
    easy: language === 'vi' ? 'Câu hỏi dễ, kiến thức cơ bản' : 'Easy questions, basic knowledge',
    medium: language === 'vi' ? 'Câu hỏi trung bình' : 'Medium difficulty questions',
    hard: language === 'vi' ? 'Câu hỏi khó, yêu cầu suy luận sâu' : 'Hard questions, requiring deep reasoning'
  }[difficulty];

  const explanationInstruction = includeExplanations
    ? (language === 'vi' ? 'Thêm giải thích chi tiết cho đáp án đúng.' : 'Include detailed explanations for correct answers.')
    : '';

  const topicInstruction = topic
    ? (language === 'vi' ? `Tập trung vào chủ đề: ${topic}` : `Focus on topic: ${topic}`)
    : '';

  // Handle "generate maximum" mode
  const questionCountInstruction = numberOfQuestions === 0 || numberOfQuestions === -1
    ? (language === 'vi'
      ? 'hãy tạo CÀ NHIỀU câu hỏi trắc nghiệm CHẤT LƯỢNG CAO nhất có thể từ nội dung này. Tạo câu hỏi cho TẤT CẢ các khái niệm, định nghĩa, và thông tin quan trọng'
      : 'create AS MANY HIGH-QUALITY multiple choice questions as possible from this content. Create questions for ALL key concepts, definitions, and important information')
    : (language === 'vi'
      ? `hãy tạo ${numberOfQuestions} câu hỏi trắc nghiệm với 4 đáp án (A, B, C, D)`
      : `create ${numberOfQuestions} multiple choice questions with 4 options (A, B, C, D)`);

  const prompt = `
${languageInstruction}. ${difficultyInstruction}. ${topicInstruction}

Dựa trên nội dung sau, ${questionCountInstruction}.
${explanationInstruction}

QUAN TRỌNG: Bạn PHẢI trả lời bằng JSON format, KHÔNG dùng text format.

Định dạng JSON CHÍNH XÁC như sau:

{
  "questions": [
    {
      "text": "Nội dung câu hỏi",
      "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      "correctAnswer": 0,
      ${includeExplanations ? '"explanation": "Giải thích chi tiết",' : ''}
      "chapter": "AI Generated"
    }
  ]
}

LƯU Ý QUAN TRỌNG:
- correctAnswer là index (0=A, 1=B, 2=C, 3=D)
- Mỗi câu hỏi phải có đúng 4 đáp án
- Câu hỏi phải dựa trên nội dung được cung cấp, không tự bịa đặt
- Đảm bảo các đáp án sai hợp lý và có tính nhiễu
- CHỈ trả về JSON, không có text thêm trước hoặc sau JSON
- Đảm bảo JSON hợp lệ, có thể parse được

NỘI DUNG:
${text}

Hãy tạo các câu hỏi chất lượng cao và trả về JSON format.
`.trim();

  try {
    // Use JSON mode if available (Gemini 1.5+)
    const generationConfig = {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
    };

    // Try to use responseMimeType for JSON (Gemini 1.5+)
    let result;
    try {
      result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          ...generationConfig,
          responseMimeType: 'application/json',
        }
      });
    } catch {
      // Fallback for older models
      result = await model.generateContent(prompt);
    }

    const response = await result.response;
    let generatedText = response.text();

    // Try to extract JSON from response (in case AI adds extra text)
    let jsonData = null;

    // First, try direct JSON parse (if responseMimeType was used)
    try {
      jsonData = JSON.parse(generatedText);
      console.log('✅ Successfully parsed JSON response (direct)');
    } catch {
      // If direct parse fails, try to extract JSON from text
      const jsonMatch = generatedText.match(/\{[\s\S]*"questions"[\s\S]*\}/);
      if (jsonMatch) {
        try {
          jsonData = JSON.parse(jsonMatch[0]);
          console.log('✅ Successfully parsed JSON response (extracted)');
        } catch (parseError) {
          console.warn('⚠️ JSON parse failed, trying to fix...', parseError);
          // Try to fix common JSON issues
          try {
            // Remove trailing commas, fix unescaped quotes, etc.
            let fixedJson = jsonMatch[0]
              .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
              .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // Add quotes to keys if missing
              .replace(/:\s*([^",[\]{}]+)([,}\]])/g, ': "$1"$2'); // Add quotes to unquoted values

            jsonData = JSON.parse(fixedJson);
            console.log('✅ Fixed and parsed JSON');
          } catch (fixError) {
            console.error('❌ Could not parse JSON:', fixError);
            console.error('Raw response:', generatedText.substring(0, 500));
            throw new Error('Không thể parse JSON từ AI response. Vui lòng thử lại.');
          }
        }
      } else {
        console.error('❌ No JSON found in response');
        console.error('Raw response:', generatedText.substring(0, 500));
        throw new Error('Không tìm thấy JSON trong response. AI có thể đã trả về format khác.');
      }
    }

    // Convert JSON to text format for compatibility with existing parser
    if (jsonData && jsonData.questions && Array.isArray(jsonData.questions)) {
      if (jsonData.questions.length === 0) {
        throw new Error('AI không tạo được câu hỏi nào. Vui lòng thử lại với nội dung khác hoặc điều chỉnh options.');
      }

      const formattedText = jsonData.questions.map((q, index) => {
        // Validate question structure
        if (!q.text || !q.options || !Array.isArray(q.options) || q.options.length !== 4) {
          console.warn(`⚠️ Question ${index + 1} has invalid structure, skipping...`);
          return null;
        }

        if (q.correctAnswer === undefined || q.correctAnswer < 0 || q.correctAnswer > 3) {
          console.warn(`⚠️ Question ${index + 1} has invalid correctAnswer, skipping...`);
          return null;
        }

        const questionNum = index + 1;
        const correctLetter = String.fromCharCode(65 + q.correctAnswer); // A, B, C, D
        const correctText = q.options[q.correctAnswer];

        let formatted = `Câu ${questionNum}: ${q.text}\n`;
        q.options.forEach((opt, idx) => {
          formatted += `${String.fromCharCode(65 + idx)}. ${opt}\n`;
        });
        formatted += `• ${correctLetter}. ${correctText};`;

        if (q.explanation) {
          formatted += `\n^${q.explanation}\``;
        }

        return formatted;
      }).filter(q => q !== null).join('\n\n');

      if (!formattedText) {
        throw new Error('Tất cả câu hỏi đều có format không hợp lệ. Vui lòng thử lại.');
      }

      console.log(`✅ Successfully converted ${jsonData.questions.length} questions to text format`);

      // Convert JSON questions to app format
      const appQuestions = jsonData.questions
        .map((q) => {
          // Validate question structure
          if (!q.text || !q.options || !Array.isArray(q.options) || q.options.length !== 4) {
            return null;
          }

          if (q.correctAnswer === undefined || q.correctAnswer < 0 || q.correctAnswer > 3) {
            return null;
          }

          return {
            text: q.text.trim(),
            options: q.options.map(opt => opt.trim()),
            correctAnswer: q.correctAnswer,
            chapter: q.chapter || "AI Generated",
            explanation: q.explanation || null
          };
        })
        .filter(q => q !== null);

      return {
        text: formattedText,
        json: jsonData,
        questions: appQuestions, // Direct questions array
        success: true
      };
    } else {
      throw new Error('JSON không có format đúng. Thiếu field "questions" hoặc không phải array.');
    }
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
}

/**
 * Generate questions from multiple chunks with smart distribution
 * LEANN-inspired: optimizes token usage and maintains context
 */
export async function generateQuestionsFromChunks(model, chunks, options = {}) {
  const allQuestions = []; // Array of question objects
  const allTexts = []; // Array of text strings (for backward compatibility)
  const { numberOfQuestions = 10, autoOptimize = true } = options;

  // Auto-optimize: merge chunks if ratio is poor
  // Manual mode: respect user's numberOfQuestions setting
  let processedChunks = chunks;
  let questionsPerChunk = [];

  if (autoOptimize && numberOfQuestions > 0) {
    // If user sets specific number, optimize chunk merging
    const MIN_QUESTIONS_PER_CHUNK = 2;
    const optimalChunkCount = Math.ceil(numberOfQuestions / MIN_QUESTIONS_PER_CHUNK);

    if (chunks.length > optimalChunkCount) {
      console.log(`📦 Auto-optimizing: Merging ${chunks.length} chunks into ~${optimalChunkCount} optimal chunks...`);
      processedChunks = mergeChunks(chunks, optimalChunkCount);
    }
  }

  // Smart question distribution based on chunk sizes
  const totalSize = processedChunks.reduce((sum, chunk) => {
    return sum + (typeof chunk === 'string' ? chunk.length : chunk.text.length);
  }, 0);

  if (numberOfQuestions === 0 || numberOfQuestions === -1) {
    // Generate maximum questions mode: let AI decide per chunk
    console.log(`🚀 Maximum questions mode: AI will generate as many quality questions as possible from each chunk`);
    questionsPerChunk = processedChunks.map(() => 0); // 0 means "generate as many as you can"
  } else {
    // Specific number mode: distribute proportionally
    questionsPerChunk = processedChunks.map(chunk => {
      const chunkSize = typeof chunk === 'string' ? chunk.length : chunk.text.length;
      const proportion = chunkSize / totalSize;
      const calculated = Math.round(proportion * numberOfQuestions);
      return autoOptimize ? Math.max(1, calculated) : Math.max(0, calculated);
    });

    // Adjust to match exact total (only if not in max mode)
    const currentTotal = questionsPerChunk.reduce((a, b) => a + b, 0);
    if (currentTotal !== numberOfQuestions && numberOfQuestions > 0) {
      const diff = numberOfQuestions - currentTotal;
      // Add/subtract from largest chunk
      const maxIndex = questionsPerChunk.indexOf(Math.max(...questionsPerChunk));
      questionsPerChunk[maxIndex] = Math.max(0, questionsPerChunk[maxIndex] + diff);
    }
  }

  const mode = numberOfQuestions <= 0 ? 'MAX' : (autoOptimize ? 'OPTIMIZED' : 'MANUAL');
  console.log(`📊 Distribution [${mode}]: ${questionsPerChunk.map(q => q || '∞').join(', ')} questions across ${processedChunks.length} chunks`);

  for (let i = 0; i < processedChunks.length; i++) {
    const chunk = processedChunks[i];
    const chunkText = typeof chunk === 'string' ? chunk : chunk.text;
    const chunkMetadata = typeof chunk === 'object' ? chunk.metadata : null;

    const chunkOptions = {
      ...options,
      numberOfQuestions: questionsPerChunk[i],
      // Add context from metadata if available
      topic: options.topic || (chunkMetadata?.title ? chunkMetadata.title : options.topic)
    };

    try {
      console.log(`🔄 Processing chunk ${i + 1}/${processedChunks.length} (${chunkText.length} chars, ${questionsPerChunk[i]} questions)...`);

      const result = await generateQuestions(model, chunkText, chunkOptions);

      // Collect both questions array and text
      if (result.questions && Array.isArray(result.questions)) {
        allQuestions.push(...result.questions);
        console.log(`✅ Added ${result.questions.length} questions from chunk ${i + 1}`);
      }
      if (result.text) {
        allTexts.push(result.text);
      }

      // Progressive delay to avoid rate limiting (longer delay for more chunks)
      if (i < processedChunks.length - 1) {
        const delay = Math.min(2000 + (i * 500), 5000); // Max 5 seconds
        console.log(`⏳ Waiting ${delay}ms before next chunk...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error(`❌ Error generating questions for chunk ${i + 1}:`, error);

      // Retry once with exponential backoff
      try {
        console.log(`🔄 Retrying chunk ${i + 1}...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        const result = await generateQuestions(model, chunkText, chunkOptions);

        if (result.questions && Array.isArray(result.questions)) {
          allQuestions.push(...result.questions);
        }
        if (result.text) {
          allTexts.push(result.text);
        }
      } catch {
        console.error(`❌ Retry failed for chunk ${i + 1}, skipping...`);
        // Continue with other chunks
      }
    }
  }

  // Return questions array if available, otherwise return text
  if (allQuestions.length > 0) {
    console.log(`✅ Total questions collected: ${allQuestions.length}`);
    return {
      questions: allQuestions,
      text: allTexts.join('\n\n')
    };
  }

  return allTexts.join('\n\n');
}

/**
 * Merge small chunks into larger ones for better question distribution
 */
function mergeChunks(chunks, targetCount) {
  if (chunks.length <= targetCount) return chunks;

  const merged = [];
  const chunksPerGroup = Math.ceil(chunks.length / targetCount);

  for (let i = 0; i < chunks.length; i += chunksPerGroup) {
    const group = chunks.slice(i, i + chunksPerGroup);

    // Merge text from group
    const mergedText = group.map(chunk =>
      typeof chunk === 'string' ? chunk : chunk.text
    ).join('\n\n');

    // Combine metadata if present
    const hasMetadata = group.some(chunk => typeof chunk === 'object' && chunk.metadata);

    if (hasMetadata) {
      merged.push({
        text: mergedText,
        metadata: {
          type: 'merged',
          originalChunks: group.length,
          totalSize: mergedText.length
        }
      });
    } else {
      merged.push(mergedText);
    }
  }

  return merged;
}

/**
 * Optimize text before sending to API
 * Removes unnecessary whitespace and formatting while preserving content
 */
export function optimizeTextForAPI(text) {
  return text
    // Remove excessive whitespace
    .replace(/\s+/g, ' ')
    // Remove multiple newlines (keep double newlines for paragraphs)
    .replace(/\n{3,}/g, '\n\n')
    // Trim
    .trim();
}

/**
 * Analyze text complexity to adjust chunking strategy
 */
export function analyzeTextComplexity(text) {
  const lines = text.split('\n');
  const words = text.split(/\s+/);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);

  // Calculate metrics
  const avgWordsPerSentence = words.length / Math.max(sentences.length, 1);
  const avgCharsPerWord = text.length / Math.max(words.length, 1);
  const hasCode = /```|function|class|def |public |private /.test(text);
  const hasTables = /\|.*\|.*\|/.test(text);
  const hasLists = /^\s*[-*\d]+\./m.test(text);

  return {
    totalChars: text.length,
    totalWords: words.length,
    totalSentences: sentences.length,
    totalLines: lines.length,
    avgWordsPerSentence: Math.round(avgWordsPerSentence),
    avgCharsPerWord: Math.round(avgCharsPerWord),
    hasCode,
    hasTables,
    hasLists,
    complexity: avgWordsPerSentence > 25 ? 'high' : avgWordsPerSentence > 15 ? 'medium' : 'low'
  };
}

/**
 * Suggest optimal chunk size based on text analysis
 */
export function suggestChunkSize(textAnalysis) {
  const { complexity, hasCode, hasTables, totalChars } = textAnalysis;

  let baseSize = 4000;

  // Adjust based on complexity
  if (complexity === 'high') {
    baseSize = 3000; // Smaller chunks for complex text
  } else if (complexity === 'low') {
    baseSize = 5000; // Larger chunks for simple text
  }

  // Adjust for special content
  if (hasCode) {
    baseSize = Math.min(baseSize, 3500); // Code needs more context
  }
  if (hasTables) {
    baseSize = Math.min(baseSize, 3000); // Tables are dense
  }

  // Don't chunk if text is small
  if (totalChars < baseSize * 0.8) {
    return null; // No chunking needed
  }

  return baseSize;
}

/**
 * Validate and clean generated questions
 */
export function validateGeneratedQuestions(text) {
  const lines = text.split('\n');
  const errors = [];
  let questionCount = 0;

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Check for question format
    if (trimmed.match(/^Câu\s+\d+:/i)) {
      questionCount++;
    }

    // Check for proper answer marker
    if (trimmed.startsWith('•') && !trimmed.includes(';')) {
      errors.push(`Line ${index + 1}: Missing semicolon after correct answer`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    questionCount
  };
}

/**
 * Estimate token count (rough estimation)
 */
export function estimateTokens(text) {
  // Rough estimate: ~4 characters per token for Vietnamese
  return Math.ceil(text.length / 4);
}

/**
 * Calculate estimated cost (for Gemini Pro)
 */
export function estimateCost(inputTokens, outputTokens) {
  // Gemini Pro pricing (as of 2024)
  // Free tier: 60 requests per minute
  const inputCostPer1K = 0.00025; // $0.00025 per 1K input tokens
  const outputCostPer1K = 0.0005; // $0.0005 per 1K output tokens

  const inputCost = (inputTokens / 1000) * inputCostPer1K;
  const outputCost = (outputTokens / 1000) * outputCostPer1K;

  return {
    inputCost,
    outputCost,
    totalCost: inputCost + outputCost,
    currency: 'USD'
  };
}
