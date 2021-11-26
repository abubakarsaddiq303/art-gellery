import React from "react";
import "./About.css";
import search2 from "./images.png";

function About() {
  return (
    <div className="About">
      <h1>About US</h1>
      <p>Some text about who we are and what we do.</p>
      <p>
        Resize the browser window to see that this page is responsive by the
        way.
      </p>
      <h2 style={{ display: "contents" }}>Our Team</h2>

      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src={search2}
              alt="Jane"
              style={{ width: "275px", borderRadius: "150px" }}
            />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src={search2}
              alt="Jane"
              style={{ width: "275px", borderRadius: "150px" }}
            />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src={search2}
              alt="Jane"
              style={{ width: "275px", borderRadius: "150px" }}
            />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
