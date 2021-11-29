import React from "react";
import "./About.css";
import search2 from "./images.png";

function About() {
  return (
    <div className="About">
      <h1>About Me</h1>
      <p>Some text about who we are and what we do.</p>
      <p>
        Resize the browser window to see that this page is responsive by the
        way.
      </p>

      <div class="Aboutcolumn">
        <div class="AboutCard">
          <img src={search2} alt="Jane" style={{ borderRadius: "150px" }} />
          <div class="container">
            <h2>ABUBAKAR SADDIQ</h2>
            <p class="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>abubakar.saddiq303@gmail.com</p>
            <p>
              <button class="button" style={{ background: "skyblue" }}>
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
