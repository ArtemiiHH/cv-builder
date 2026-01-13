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

    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
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

  return (
    <section>
      <Editor
        activeTab={activeTab}
        cvData={cvData}
        updatePersonalInput={updatePersonalInput}
      ></Editor>
      <Preview cvData={cvData} experience={cvData.experience}></Preview>
    </section>
  );
}
