import { useState } from "react";

export default function SkillsTab({ skillData, updateSkillsInput }) {
  const [input, setInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && input.trim() !== "") {
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

            <div className="skill-card-box">
              {skillData.map((skill, index) => (
                <span key={index} className="skill-card">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
