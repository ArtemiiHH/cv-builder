export default function SkillsTab() {
  return (
    <>
      <div className="form-navigation">
        <h1 className="form-title">Skills</h1>
      </div>
      <form>
        <div className="input-group">
          {/* Soft Skills */}
          <div className="input-group">
            <label>Skills</label>
            <input type="text" placeholder="Type skill and press Enter" />
          </div>
        </div>
      </form>
    </>
  );
}
