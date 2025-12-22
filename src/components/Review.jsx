import React from "react";

export default function Review({ questions, userAnswers, onBack }) {
  return (
    <div className="review-container">
      <h2>Xem lại câu hỏi</h2>
      <div className="review-questions">
        {questions.map((q, i) => {
          const userAnsIdx = userAnswers[i];
          const userAnsLetter = userAnsIdx !== undefined ? String.fromCharCode(65 + userAnsIdx) : null;
          const userAns = userAnsIdx !== undefined ? q.options[userAnsIdx] : "Chưa chọn";
          const correctAnsLetter = String.fromCharCode(65 + q.correctAnswer);
          const correctAns = q.options[q.correctAnswer];
          const isCorrect = userAnsIdx === q.correctAnswer;
          
          return (
            <div key={i} className={`review-question ${isCorrect ? 'correct' : 'incorrect'}`}>
              <div className="review-question-header">
                <strong>Câu {i + 1}:</strong> 
                {isCorrect ? 
                  <span className="badge badge-correct">✓ Đúng</span> : 
                  <span className="badge badge-incorrect">✗ Sai</span>
                }
              </div>
              <div className="review-question-text">{q.text}</div>
              <div className="review-options">
                {q.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  let className = "review-option";
                  if (idx === q.correctAnswer) className += " correct-answer";
                  if (idx === userAnsIdx && idx !== q.correctAnswer) className += " wrong-answer";
                  
                  return (
                    <div key={idx} className={className}>
                      <span className="review-option-letter">{letter}.</span>
                      <span className="review-option-text">{option}</span>
                    </div>
                  );
                })}
              </div>
              <div className="review-answer-summary">
                <div className={`answer-info ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <strong>Câu trả lời của bạn:</strong> {userAnsLetter ? `${userAnsLetter}. ${userAns}` : userAns}
                </div>
                {!isCorrect && (
                  <div className="answer-info correct">
                    <strong>Đáp án đúng:</strong> {correctAnsLetter}. {correctAns}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={onBack}>Quay về kết quả</button>
    </div>
  );
}
