import React from "react";

export default function Navigation({ onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="navigation-panel">
      <button onClick={onPrev} disabled={!hasPrev}>
        Câu trước
      </button>
      <button onClick={onNext} disabled={!hasNext}>
        Câu tiếp
      </button>
    </div>
  );
}
