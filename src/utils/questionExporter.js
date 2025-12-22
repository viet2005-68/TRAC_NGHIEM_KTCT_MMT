/**
 * Export questions to TXT format
 */
export function exportQuestionsToTxt(questions, filename = "questions.txt") {
  let txt = "";
  let currentChapter = "";
  let questionCounter = 1; // Global counter across chapters
  
  questions.forEach((q) => {
    // Add chapter header if changed
    const qChapter = q.chapter || "AI Generated";
    if (qChapter !== currentChapter) {
      if (currentChapter) txt += "\n";
      txt += `${qChapter}\n`;
      currentChapter = qChapter;
      questionCounter = 1; // Reset counter for new chapter
    }
    
    // Question number
    txt += `Câu ${questionCounter}: ${q.text}\n`;
    questionCounter++;
    
    // Options
    q.options.forEach((opt, idx) => {
      const letter = String.fromCharCode(65 + idx); // A, B, C, D
      txt += `${letter}. ${opt}\n`;
    });
    
    // Correct answer
    const correctLetter = String.fromCharCode(65 + q.correctAnswer);
    const correctText = q.options[q.correctAnswer];
    txt += `• ${correctLetter}. ${correctText};\n`;
    
    // Explanation if available
    if (q.explanation) {
      txt += `^${q.explanation}\`\n`;
    }
    
    txt += "\n";
  });
  
  // Create blob and download
  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  return filename;
}

/**
 * Save questions to localStorage
 */
export function saveQuestionsToStorage(questions, key = "ai_generated_questions") {
  try {
    const data = {
      questions,
      timestamp: new Date().toISOString(),
      count: questions.length
    };
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
}

/**
 * Load questions from localStorage
 */
export function loadQuestionsFromStorage(key = "ai_generated_questions") {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;
    
    const parsed = JSON.parse(data);
    return parsed.questions || null;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return null;
  }
}

/**
 * Get all saved question sets from localStorage
 */
export function getAllSavedQuestionSets() {
  const sets = [];
  
  // Check for AI generated questions
  const aiQuestions = loadQuestionsFromStorage("ai_generated_questions");
  if (aiQuestions && aiQuestions.length > 0) {
    sets.push({
      key: "ai_generated_questions",
      name: "KTCT Chương AI",
      count: aiQuestions.length,
      timestamp: localStorage.getItem("ai_generated_questions_timestamp") || new Date().toISOString()
    });
  }
  
  // Can add more saved sets here in the future
  
  return sets;
}

/**
 * Delete saved questions from localStorage
 */
export function deleteSavedQuestions(key = "ai_generated_questions") {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_timestamp`);
    return true;
  } catch (error) {
    console.error("Error deleting from localStorage:", error);
    return false;
  }
}

