export default function PersonalTab({ personalData, updatePersonalInput }) {
  return (
    <>
      <h1 className="personal-form-title">Personal Information</h1>
      <form>
        <div className="input-group">
          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input
              value={personalData.fullName}
              onChange={(e) => updatePersonalInput("fullName", e.target.value)}
              type="text"
              placeholder="John Doe"
            />
          </div>
          {/* Profession */}
          <div className="input-group">
            <label>Profession</label>
            <input
              value={personalData.profession}
              onChange={(e) =>
                updatePersonalInput("profession", e.target.value)
              }
              type="text"
              placeholder="e.g. Full Stack Developer"
            />
          </div>
        </div>

        <div className="input-group">
          {/* Profession */}
          <div className="input-group">
            <label>Phone Number</label>
            <input
              value={personalData.phoneNumber}
              onChange={(e) =>
                updatePersonalInput("phoneNumber", e.target.value)
              }
              type="text"
              placeholder="Enter phone"
            />
          </div>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              value={personalData.email}
              onChange={(e) => updatePersonalInput("email", e.target.value)}
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          {/* Location */}
          <div className="input-group">
            <label>Location</label>
            <input
              value={personalData.location}
              onChange={(e) => updatePersonalInput("location", e.target.value)}
              type="text"
              placeholder="Limassol, Cyprus"
            />
          </div>
        </div>

        <div className="input-group">
          {/* Biography */}
          <div className="input-group">
            <label>Biography</label>
            <textarea
              value={personalData.biography}
              onChange={(e) => updatePersonalInput("biography", e.target.value)}
              placeholder="Tell us more about yourself..."
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}
