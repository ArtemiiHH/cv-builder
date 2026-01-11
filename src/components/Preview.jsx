export default function Preview({ cvData }) {
  return (
    <div className="preview-window">
      <div className="cv-preview">
        <h1 className="cv-name">{cvData.personal.fullName.toUpperCase()}</h1>
        <h3 className="cv-profession">
          {cvData.personal.profession.toUpperCase()}
        </h3>
      </div>
    </div>
  );
}
