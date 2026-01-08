import { useState } from "react";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <button onClick={changeButtonColor}>Personal</button>
        <button>Experience</button>
        <button>Education</button>
        <button>Skills</button>
      </div>
      <div className="header-right">
        <button>Download</button>
      </div>
    </header>
  );
}
