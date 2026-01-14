import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function Section({ activeTab }) {
  const [cvData, setCvData] = useState({
    personal: {
      fullName: "",
      profession: "",
      phoneNumber: "",
      email: "",
      location: "",
      biography: "",
    },

    experience: {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  });

  // Update Personal Form Inputs Live
  function updatePersonalInput(input, value) {
    setCvData((previous) => ({
      ...previous,
      personal: {
        ...previous.personal,
        [input]: value,
      },
    }));
  }

  // Update Experience Form Inputs Live
  function updateExperienceInput(input, value) {
    setCvData((previous) => ({
      ...previous,
      experience: {
        ...previous.experience,
        [input]: value,
      },
    }));
  }

  const { personal, experience } = cvData;

  return (
    <section>
      <Editor
        activeTab={activeTab}
        cvData={cvData}
        updatePersonalInput={updatePersonalInput}
        updateExperienceInput={updateExperienceInput}
      ></Editor>
      <Preview cvData={cvData}></Preview>
    </section>
  );
}
