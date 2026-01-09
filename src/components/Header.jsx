function Header({ activeTab, onTabChange }) {
  return (
    <header>
      <nav className="tab-navigation">
        <button
          className={activeTab === "personal" ? "active-tab" : ""}
          onClick={() => onTabChange("personal")}
        >
          Personal
        </button>
        <button
          className={activeTab === "experience" ? "active-tab" : ""}
          onClick={() => onTabChange("experience")}
        >
          Experience
        </button>
        <button
          className={activeTab === "education" ? "active-tab" : ""}
          onClick={() => onTabChange("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "skills" ? "active-tab" : ""}
          onClick={() => onTabChange("skills")}
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

export default Header;
