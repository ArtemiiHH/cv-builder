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
  });

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
      <Preview cvData={cvData}></Preview>
    </section>
  );
}
