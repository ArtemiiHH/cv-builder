import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <header>
      <nav className="tab-navigation">
        <button
          className={activeTab === "personal" ? "active-tab" : ""}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={activeTab === "experience" ? "active-tab" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={activeTab === "education" ? "active-tab" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "skills" ? "active-tab" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </nav>
      <div className="download-btn">
        <button>Download</button>
      </div>
    </header>
  );
}
