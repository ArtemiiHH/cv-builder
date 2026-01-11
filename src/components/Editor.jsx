import PersonalTab from "./PersonalTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import SkillsTab from "./SkillsTab";
import { useState } from "react";

export default function Editor({ activeTab, cvData, updatePersonalInput }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function displayForm() {
    setIsFormOpen(true);
  }

  if (activeTab === "personal") {
    return (
      <div className="editor-window">
        <PersonalTab
          personalData={cvData.personal}
          updatePersonalInput={updatePersonalInput}
        ></PersonalTab>
      </div>
    );
  } else if (activeTab === "experience") {
    return (
      <div className="editor-window">
        <ExperienceTab
          isFormOpen={isFormOpen}
          displayForm={displayForm}
        ></ExperienceTab>
      </div>
    );
  } else if (activeTab === "education") {
    return (
      <div className="editor-window">
        <EducationTab></EducationTab>
      </div>
    );
  } else if (activeTab === "skills") {
    return (
      <div className="editor-window">
        <SkillsTab></SkillsTab>
      </div>
    );
  }
}
