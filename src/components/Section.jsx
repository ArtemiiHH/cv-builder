import Editor from "./Editor";
import Preview from "./Preview";

export default function Section() {
  return (
    <section>
      <Editor className="editor-window"></Editor>
      <Preview className="preview-window"></Preview>
    </section>
  );
}
