import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

export default function Section({ activeTab }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <section>
      <Editor activeTab={activeTab} inputValue={inputValue} handleChange={handleChange} ></Editor>
      <Preview inputValue={inputValue}></Preview>
    </section>
  );
}
