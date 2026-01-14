export default function ExperienceTab({
  experienceData,
  updateExperienceInput,
}) {
  return (
    <>
      <h1 className="personal-form-title">Personal Information</h1>
      <form className="experience-form">
        <div className="input-group">
          {/* Company */}
          <div className="input-group">
            <label>Company</label>
            <input
              value={experienceData.company}
              onChange={(e) => updateExperienceInput("company", e.target.value)}
              type="text"
              placeholder="Exness"
            />
          </div>
          {/* Position */}
          <div className="input-group">
            <label>Position</label>
            <input type="text" placeholder="e.g. Full Stack Developer" />
          </div>
        </div>

        <div className="input-group">
          {/* Start Date */}
          <div className="input-group">
            <label>Start Date</label>
            <input
              value={experienceData.startDate}
              onChange={(e) =>
                updateExperienceInput("startDate", e.target.value)
              }
              type="text"
              placeholder="Sep 2024"
            />
          </div>
          {/* End Date */}
          <div className="input-group">
            <label>End Date</label>
            <input type="number" placeholder="Dec 2025" />
          </div>
          {/* Location */}
          <div className="input-group">
            <label>Location</label>
            <input type="text" placeholder="Limassol, Cyprus" />
          </div>
        </div>

        <div className="input-group">
          {/* Description */}
          <div className="input-group">
            <label>Description</label>
            <textarea placeholder="e.g. Create responsive web applications, Build API routes, Run unit tests etc..."></textarea>
          </div>

          {/* Form Buttons */}
          <div className="save-cancel-button-box">
            <button className="save-button" type="submit">
              Save
            </button>
            <button className="cancel-button" onClick={(e) => cancelForm(e)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
