export default function EducationTab({ educationData, updateEducationInput }) {
  return (
    <>
      <div className="form-navigation">
        <h1 className="form-title">Education Details</h1>
      </div>
      <form>
        <div className="input-group">
          {/* Soft Skills */}
          <div className="input-group">
            <label>School Name</label>
            <input
              value={educationData.schoolName}
              onChange={(e) =>
                updateEducationInput("schoolName", e.target.value)
              }
              type="text"
              placeholder="Harvard University"
            />
          </div>
          {/* Degree */}
          <div className="input-group">
            <label>Degree</label>
            <input
              value={educationData.degree}
              onChange={(e) => updateEducationInput("degree", e.target.value)}
              type="text"
              placeholder="Bachelor of Computer Science"
            />
          </div>
        </div>

        <div className="input-group">
          {/* Start Year */}
          <div className="input-group">
            <label>Start Year</label>
            <input
              value={educationData.startYear}
              onChange={(e) =>
                updateEducationInput("startYear", e.target.value)
              }
              type="text"
              placeholder="Sep 2021"
            />
          </div>
          {/* End Year */}
          <div className="input-group">
            <label>Graduation Year</label>
            <input
              value={educationData.endYear}
              onChange={(e) => updateEducationInput("endYear", e.target.value)}
              type="text"
              placeholder="July 2025"
            />
          </div>
          {/* Location */}
          <div className="input-group">
            <label>Location</label>
            <input
              value={educationData.location}
              onChange={(e) => updateEducationInput("location", e.target.value)}
              type="text"
              placeholder="Limassol, Cyprus"
            />
          </div>
        </div>
      </form>
    </>
  );
}
