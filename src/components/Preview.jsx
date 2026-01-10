import { useState } from "react";

export default function Preview({ inputValue }) {
  return (
    <div className="preview-window">
      <div className="preview-pdf">
        <h1>{inputValue}</h1>
      </div>
    </div>
  );
}
