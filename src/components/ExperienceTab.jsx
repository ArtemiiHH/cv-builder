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
            <input
              value={experienceData.position}
              onChange={(e) =>
                updateExperienceInput("position", e.target.value)
              }
              type="text"
              placeholder="e.g. Full Stack Developer"
            />
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
            <input
              value={experienceData.endDate}
              onChange={(e) => updateExperienceInput("endDate", e.target.value)}
              type="text"
              placeholder="Dec 2025"
            />
          </div>
          {/* Location */}
          <div className="input-group">
            <label>Location</label>
            <input
              value={experienceData.location}
              onChange={(e) =>
                updateExperienceInput("location", e.target.value)
              }
              type="text"
              placeholder="Limassol, Cyprus"
            />
          </div>
        </div>

        <div className="input-group">
          {/* Description */}
          <div className="input-group">
            <label>Description</label>
            <textarea
              value={experienceData.description}
              onChange={(e) =>
                updateExperienceInput("description", e.target.value)
              }
              placeholder="e.g. Create responsive web applications, Build API routes, Run unit tests etc..."
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}
