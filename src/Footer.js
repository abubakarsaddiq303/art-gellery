import React from "react";
import "./Footer.css";
import Facebook from "./Facebook.png";
import linkedin from "./linkedin.png";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

function Footer() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={isDark ? "footer-basicDark" : "footer-basic"}>
      {/* <h1 style={{ textAlign: "center" }}>Footer</h1> */}
      <div className="footerLeft">
        <p class="copyright">Saddique © 2021</p>
      </div>
      <div className="footerCenter">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a className={isDark ? "termsDark" : "terms"}>Terms</a>
          </li>
          <li class="list-inline-item">
            <a className={isDark ? "privacyDark" : "privacy"}>Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <a href="http://facebook.com">
          <img
            src={Facebook}
            alt="facebook"
            className={isDark ? "iconDark" : "icon"}
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/abubakar-saddiq-303/">
          <img
            src={linkedin}
            alt="linkedin"
            className={isDark ? "iconDark" : "icon"}
            style={{ marginLeft: "1rem", width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://github.com/abubakarsaddiq303">
          <img
            src={Logo}
            alt="github"
            className={isDark ? "iconDark" : "icon"}
            style={{ marginLeft: "1rem", width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
