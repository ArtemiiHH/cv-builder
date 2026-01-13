import { useState } from "react";

export default function ExperienceTab({
  isFormOpen,
  displayForm,
  closeForm,
  saveExperience,
  cancelForm,
  experiences,
}) {
  // Company's name as state
  const [company, setCompany] = useState("");

  // Handle Save Button
  function handleSave(e) {
    e.preventDefault();
    saveExperience(company);
    setCompany("");
    closeForm();
  }

  return (
    <>
      {/* Header Always Visible */}
      <div className="form-navigation">
        <h1 className="form-title">Work Experience</h1>
        <button className="add-button" onClick={displayForm}>
          + Add
        </button>
      </div>

      {/* Empty List */}
      {!isFormOpen && experiences.length === 0 && (
        <p className="empty-text">No experience added yet.</p>
      )}

      {/* Experience List & Card */}
      {!isFormOpen && experiences.length > 0 && (
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              {exp.company}
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      {isFormOpen && (
        <form className="experience-form" onSubmit={(e) => handleSave(e)}>
          <div className="input-group">
            {/* Company */}
            <div className="input-group">
              <label>Company</label>
              <input
                type="text"
                placeholder="Exness"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
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
              <input type="number" placeholder="Sep 2024" />
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
      )}
    </>
  );
}
