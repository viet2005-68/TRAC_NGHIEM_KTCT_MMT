import React from "react";

export default function Quiz({
  question,
  questionIndex,
  totalQuestions,
  onSelectOption,
  selectedOption,
  showFeedback,
}) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  
  return (
    <div className="quiz-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="question-count">
        Câu {questionIndex + 1} / {totalQuestions}
      </div>
      <div className="question-text">{question.text}</div>
      <div className="options-container">
        {question.options.map((option, idx) => {
          let className = "option";
          const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
          
          if (selectedOption !== undefined && selectedOption !== null) {
            if (idx === selectedOption) className += " selected";
            if (showFeedback) {
              if (idx === question.correctAnswer) className += " correct";
              else if (idx === selectedOption) className += " incorrect";
            }
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => onSelectOption(idx)}
              disabled={showFeedback}
            >
              <span className="option-letter">{optionLetter}.</span> {option}
            </button>
          );
        })}
      </div>
      {showFeedback && question.explanation && (
        <div className="explanation">
          <strong>Giải thích:</strong>
          <div>
            {question.explanation.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
