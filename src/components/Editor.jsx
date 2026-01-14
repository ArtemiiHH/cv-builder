import PersonalTab from "./PersonalTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";
import SkillsTab from "./SkillsTab";

export default function Editor({
  activeTab,
  cvData,
  updatePersonalInput,
  updateExperienceInput,
  updateEducationInput,
  updateSkillsInput,
}) {
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
          experienceData={cvData.experience}
          updateExperienceInput={updateExperienceInput}
        ></ExperienceTab>
      </div>
    );
  } else if (activeTab === "education") {
    return (
      <div className="editor-window">
        <EducationTab
          educationData={cvData.education}
          updateEducationInput={updateEducationInput}
        ></EducationTab>
      </div>
    );
  } else if (activeTab === "skills") {
    return (
      <div className="editor-window">
        <SkillsTab
          skillData={cvData.skills}
          updateSkillsInput={updateSkillsInput}
        ></SkillsTab>
      </div>
    );
  }

  return null;
}
