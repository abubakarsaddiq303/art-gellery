import React from "react";
import "./Footer.css";
import Facebook from "./Facebook.png";
import Twitter from "./Twitter.png";
import Github from "./Github.png";

function Footer() {
  return (
    <div className="footer-basic">
      {/* <h1 style={{ textAlign: "center" }}>Footer</h1> */}
      <footer className="">
        <p class="copyright">Company Name © 2018</p>

        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>

        <div class="social">
          <a href="#">
            <img src={Facebook} alt="facebook" class="icon" />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter" class="icon" />
          </a>
          <a href="#">
            <img src={Github} alt="github" class="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
