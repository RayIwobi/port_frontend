import { useState } from "react";
import './nav.css'

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleScroll = (sectionId) => {
    setActive(sectionId);

    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
    <nav className="navbar">
      <ul >
        <li
          // className={active === "home" ? "active" : ""}
          onClick={() => handleScroll("home")}
        >
          Home
        </li>

        <li
          className={active === "about" ? "active" : ""}
          onClick={() => handleScroll("about")}
        >
          About
        </li>

        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => handleScroll("projects")}
        >
          Projects
        </li>

        <li
          className={active === "experience" ? "active" : ""}
          onClick={() => handleScroll("experience")}
        >
          Experience
        </li>

        {/* <li
          className={active === "tools" ? "active" : ""}
          onClick={() => handleScroll("tools")}
        >
          Tools
        </li> */}

        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
    </div>
  );
}


