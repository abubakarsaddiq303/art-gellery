import React from "react";
import "./App.css";
import search2 from "./gallery.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <a href="/">
          <img src={search2} alt="search" class="ArtIcon" />
        </a>
        <h2>
          <a className="Gallery" href="/">
            {" "}
            Art Gallery{" "}
          </a>{" "}
        </h2>

        <div class="navbar">
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
