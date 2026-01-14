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
            <div className="date-group">
              {/* Start Date */}
              <h4>{cvData.experience.startDate}-</h4>
              {/* End Date */}
              <h4>{" " + cvData.experience.endDate}</h4>
            </div>
            <div className="company-location-group">
              {/* Company's Name */}
              <p>{cvData.experience.company}</p>
              {/* Location */}
              <p>-{cvData.experience.location}</p>
            </div>
            <ul>
              <li>{cvData.experience.description}</li>
            </ul>
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
            <div className="date-group">
              {/* Start Year */}
              <h4>{cvData.education.startYear}-</h4>
              {/* End Year */}
              <h4>{" " + cvData.education.endYear}</h4>
            </div>
            <div className="company-location-group">
              {/* School Name */}
              <p>{cvData.education.schoolName}</p>
              {/* Location */}
              <p>-{cvData.education.location}</p>
            </div>
            <ul>
              <li>{cvData.education.degree}</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="soft-skills">
            <h4 className="cv-section-titles">SOFT SKILLS</h4>
            <ul>
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
