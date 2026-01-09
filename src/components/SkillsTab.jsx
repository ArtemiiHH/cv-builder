export default function SkillsTab() {
  return (
    <>
      <h1>Skills</h1>
      <form>
        <div className="input-group">
          {/* Soft Skills */}
          <div className="input-group">
            <label>Soft Skills</label>
            <input type="text" placeholder="Communication" />
          </div>
        </div>

        <div className="input-group">
          {/* Technical Skills */}
          <div className="input-group">
            <label>Technical Skills</label>
            <input type="text" placeholder="Javascript" />
          </div>
        </div>
      </form>
    </>
  );
}
