import { useState } from "react";

export default function SkillsTab() {
  const [input, setInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log('Working');
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
            <input onKeyDown={handleKeyDown} type="text" placeholder="Type skill and press Enter" />
          </div>
        </div>
      </form>
    </>
  );
}
