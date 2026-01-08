export default function PersonalForm() {
  return (
    <form className="form">
      <div className="input-full-name">
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div className="input-profession">
        <label>Professional title</label>
        <input type="text" placeholder="ex. Full Stack Developer" />
      </div>
    </form>
  );
}
