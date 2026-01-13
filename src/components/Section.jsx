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

    experience: [],
  });

  function saveExperience(company) {
    setCvData((previous) => ({
      ...previous,
      experience: [
        ...previous.experience,
        {
          company,
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    }));
  }

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

  const { personal, experience } = cvData;

  return (
    <section>
      <Editor
        activeTab={activeTab}
        cvData={cvData}
        updatePersonalInput={updatePersonalInput}
        saveExperience={saveExperience}
      ></Editor>
      <Preview cvData={cvData}></Preview>
    </section>
  );
}
