export default function EducationTab() {
  return (
    <>
      <h1>Education Details</h1>
      <form>
        <div className="input-group">
          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          {/* Profession */}
          <div className="input-group">
            <label>Profession</label>
            <input type="text" placeholder="ex. Full Stack Developer" />
          </div>
        </div>

        <div className="input-group">
          {/* Profession */}
          <div className="input-group">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone" />
          </div>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          {/* Location */}
          <div className="input-group">
            <label>Location</label>
            <input type="text" placeholder="Limassol, Cyprus" />
          </div>
        </div>

        <div className="input-group">
          {/* Biography */}
          <div className="input-group">
            <label>Biography</label>
            <textarea placeholder="Tell us more about yourself..."></textarea>
          </div>
        </div>
      </form>
    </>
  );
}
