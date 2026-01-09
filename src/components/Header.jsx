import { useState } from "react";
// Import Tabs
import PersonalTab from "./PersonalTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import SkillsTab from "./SkillsTab";

export default function Header() {
  const [activeTab, setActiveTab] = useState("personal");

  function onTabChange(tabName) {
    setActiveTab(tabName);
  }

  return (
    <header>
      <nav className="header-tab-navigation">
        <button
          className={activeTab === "personal" ? "active" : ""}
          onClick={() => setActiveTab("personal")}
          onTabChange={(PersonalTab) => setActiveTab(PersonalTab)}
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
