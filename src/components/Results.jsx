import React from "react";

export default function Results({
  score,
  total,
  details,
  onRestart,
  onReview,
  onBack,
  onSaveQuestions,
  onExportTxt,
  canSave = false,
}) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 50;
  
  return (
    <div className="results-container">
      <h2>🎯 Kết quả làm bài</h2>
      
      <div className={`score-card ${passed ? 'passed' : 'failed'}`}>
        <div className="score-main">
          <div className="score-number">{score}</div>
          <div className="score-divider">/</div>
          <div className="score-total">{total}</div>
        </div>
        <div className="score-percentage">{percentage}%</div>
        <div className="score-status">
          {passed ? '✓ Đạt yêu cầu' : '✗ Chưa đạt'}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item correct-stat">
          <div className="stat-icon">✓</div>
          <div className="stat-label">Câu đúng</div>
          <div className="stat-value">{score}</div>
        </div>
        <div className="stat-item incorrect-stat">
          <div className="stat-icon">✗</div>
          <div className="stat-label">Câu sai</div>
          <div className="stat-value">{total - score}</div>
        </div>
        <div className="stat-item total-stat">
          <div className="stat-icon">∑</div>
          <div className="stat-label">Tổng số câu</div>
          <div className="stat-value">{total}</div>
        </div>
      </div>

      <div className="results-actions">
        <button className="btn-primary" onClick={onReview}>
          📝 Xem chi tiết
        </button>
        {canSave && onSaveQuestions && (
          <button className="btn-save" onClick={onSaveQuestions}>
            💾 Lưu câu hỏi
          </button>
        )}
        {canSave && onExportTxt && (
          <button className="btn-export" onClick={onExportTxt}>
            📥 Tải xuống TXT
          </button>
        )}
        <button className="btn-secondary" onClick={onRestart}>
          🔄 Làm lại
        </button>
        <button className="btn-secondary" onClick={onBack}>
          🏠 Quay về
        </button>
      </div>
    </div>
  );
}
