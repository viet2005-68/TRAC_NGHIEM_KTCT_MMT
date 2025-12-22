import React from "react";

export default function FileSelector({ files, selectedFile, onSelect }) {
  return (
    <div className="file-selection">
      <h2>Chọn bộ câu hỏi</h2>
      <div className="file-buttons">
        {files.map((file) => (
          <button
            key={file.path}
            className={`file-btn${selectedFile === file.path ? " active" : ""}${file.isSaved ? " saved" : ""}`}
            onClick={() => onSelect(file.path)}
          >
            <span className="file-name">
              {file.title}
              {file.isSaved && <span className="saved-badge">💾 Đã lưu</span>}
            </span>
            <span className="file-code">
              {file.code}
              {file.count && ` • ${file.count} câu`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
