import React from "react";
import "./Footer.css";
import Facebook from "./Facebook.png";
import Twitter from "./Twitter.png";
import Github from "./Github.png";
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
            class={isDark ? "iconDark" : "icon"}
          />
        </a>
        <a href="https://twitter.com">
          <img
            src={Twitter}
            alt="twitter"
            class={isDark ? "iconDark" : "icon"}
            style={{ marginLeft: "1rem" }}
          />
        </a>
        <a href="https://github.com">
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
