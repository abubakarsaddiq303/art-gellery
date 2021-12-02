import React from "react";
import "./App.css";
import search2 from "./gallery.png";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

function Header() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <div className={isDark ? "headerDark" : "header"}>
        <a href="/">
          <img
            src={search2}
            alt="search"
            class={isDark ? "ArtIconDark" : "ArtIcon"}
          />
        </a>
        <h2>
          <a className={isDark ? "GalleryDark" : "Gallery"} href="/">
            {" "}
            Art Gallery{" "}
          </a>{" "}
        </h2>

        <div class={isDark ? "navbarDark" : "navbar"}>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>

          <button
            className={isDark ? "btnDark" : "btnLight"}
            type="button"
            onClick={toggleTheme}
          >
            {isDark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
