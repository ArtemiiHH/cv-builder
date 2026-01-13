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
              {(cvData.personal.fullName || "").toUpperCase()}
            </h1>
            {/* Profession */}
            <h3 className="cv-profession">
              {(cvData.personal.profession || "").toUpperCase()}
            </h3>
          </div>

          {/* Profile */}
          <div className="profile">
            <h4 className="cv-section-titles">PROFILE</h4>
            <p>{cvData.personal.biography}</p>
          </div>

          {/* Work Experience */}
          <div className="work-experience">
            <h4 className="cv-section-titles">WORK EXPERIENCE</h4>
            {/* Company's Name */}
            {cvData.experience.map((exp, index) => (
              <h4 key={index}>{exp.company}</h4>
            ))}
          </div>
        </div>

        {/* Right Row */}
        <div className="row-two">
          {/* Contact Details */}
          <div className="contact-details">
            <h4 className="cv-section-titles">CONTACT</h4>
            <ul>
              {/* Phone Number */}
              <li>{cvData.personal.phoneNumber}</li>
              {/* Email */}
              <li>{cvData.personal.email}</li>
              <li>{cvData.personal.location}</li>
            </ul>
          </div>

          {/* Education Details */}
          <div className="education-details">
            <h4 className="cv-section-titles">EDUCATION</h4>
          </div>

          {/* Soft Skills */}
          <div className="soft-skills">
            <h4 className="cv-section-titles">SOFT SKILLS</h4>
          </div>

          {/* Hard Skills */}
          <div className="hard-skills">
            <h4 className="cv-section-titles">HARD SKILLS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
