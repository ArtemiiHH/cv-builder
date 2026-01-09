import Editor from "./Editor";
import Preview from "./Preview";

export default function Section({ activeTab }) {
  return (
    <section>
      <Editor activeTab={activeTab}></Editor>
      <Preview></Preview>
    </section>
  );
}
