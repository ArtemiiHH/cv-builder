import { useState } from "react";

export default function SkillsTab({ updateSkillsInput }) {
  const [input, setInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      updateSkillsInput(input.trim());
      setInput("");
    }
  }

  return (
    <>
      <div className="form-navigation">
        <h1 className="form-title">Skills</h1>
      </div>
      <form>
        <div className="input-group">
          {/* Soft Skills */}
          <div className="input-group">
            <label>Skills</label>
            <input
              type="text"
              placeholder="Type skill and press Enter"
              value={input}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
