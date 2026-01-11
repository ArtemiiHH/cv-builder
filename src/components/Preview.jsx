export default function Preview({ cvData }) {
  return (
    <div className="preview-window">
      <div className="cv-preview">
        {/* Left Row */}
        <div className="row-one">
          {/* Name and Profession */}
          <div className="name-profession">
            {/* Full name */}
            <h1 className="cv-name">
              {cvData.personal.fullName.toUpperCase()}
            </h1>
            {/* Profession */}
            <h3 className="cv-profession">
              {cvData.personal.profession.toUpperCase()}
            </h3>
          </div>

          {/* Profile */}
          <div className="profile"></div>

          {/* Work Experience */}
          <div className="work-experience"></div>
        </div>

        {/* Right Row */}
        <div className="row-two">
          {/* Contact Details */}
          <div className="contact-details"></div>

          {/* Education Details */}
          <div className="education-details"></div>

          {/* Soft Skills */}
          <div className="soft-skills"></div>

          {/* Hard Skills */}
          <div className="hard-skills"></div>
        </div>
      </div>
    </div>
  );
}
