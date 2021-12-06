import React from "react";
import "./About.css";
import search2 from "./images.png";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

function About() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={isDark ? "AboutDark" : "About"}>
      <h1 className={isDark ? "headDark" : "head"}>About Me</h1>
      <p className={isDark ? "paragraphDark" : "paragraph"}>
        Some text about who we are and what we do.
      </p>
      <p className={isDark ? "paragraphDark" : "paragraph"}>
        Resize the browser window to see that this page is responsive by the
        way.
      </p>

      <div className="Aboutcolumn">
        <div className={isDark ? "AboutCardDark" : "AboutCard"}>
          <img
            src={search2}
            alt="saddiq"
            style={{
              borderRadius: "91px",
              width: "20rem",
            }}
          />
          <div className={isDark ? "containerDark" : "container"}>
            <h2 className={isDark ? "CeoDark" : "Ceo"}>ABUBAKAR SADDIQ</h2>

            <p>MERN Stack Developer</p>
            <p>abubakar.saddiq303@gmail.com</p>
            <p>
              <button className="button" style={{ background: "skyblue" }}>
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
