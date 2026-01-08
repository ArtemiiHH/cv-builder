import PersonalForm from "./PersonalForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

export default function Editor() {
  return (
    <div className="editor-window">
      <h1>Personal Information</h1>
      <PersonalForm></PersonalForm>
    </div>
  );
}
