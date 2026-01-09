import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <header>
      <nav className="header-tab-navigation">
        <button
          className={activeTab === "personal" ? "active" : ""}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </nav>
      <div className="header-download-btn">
        <button>Download</button>
      </div>
    </header>
  );
}
