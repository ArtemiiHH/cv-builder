import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

export default function Editor() {
  return (
    <div className="editor-window">
      <h2>Personal Information</h2>
      <PersonalForm></PersonalForm>
    </div>
  );
}
