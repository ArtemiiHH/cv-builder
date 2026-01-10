import { useState } from "react";

export default function Preview({ inputValue }) {
  return (
    <div className="preview-window">
      <div className="cv-preview">
        <h1 className="cv-name">{inputValue}</h1>
      </div>
    </div>
  );
}
