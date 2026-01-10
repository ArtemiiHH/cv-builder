import { useState } from "react";

export default function Preview({ cvData }) {
  return (
    <div className="preview-window">
      <div className="cv-preview">
        <h1 className="cv-name">{cvData.personal.fullName}</h1>
      </div>
    </div>
  );
}
