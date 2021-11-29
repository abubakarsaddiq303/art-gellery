import React from "react";
import "./Footer.css";
import Facebook from "./Facebook.png";
import Twitter from "./Twitter.png";
import Github from "./Github.png";

function Footer() {
  return (
    <div className="footer-basic">
      {/* <h1 style={{ textAlign: "center" }}>Footer</h1> */}
      <div className="footerLeft">
        <p class="copyright">Saddique © 2021</p>
      </div>
      <div className="footerCenter">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <a href="#">
          <img src={Facebook} alt="facebook" class="icon" />
        </a>
        <a href="#">
          <img
            src={Twitter}
            alt="twitter"
            class="icon"
            style={{ marginLeft: "1rem" }}
          />
        </a>
        <a href="https://github.com/abubakarsaddiq303/art-gellery">
          <img
            src={Github}
            alt="github"
            class="icon"
            style={{ marginLeft: "1rem" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
