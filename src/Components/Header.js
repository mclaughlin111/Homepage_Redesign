import React from "react";
import LightDarkToggle from "./LightDarkToggle";


const Header = () => {
  return (
    <header class="pageHeader">
      <div>
        <p id="title">Thomas McLaughlin Online</p>
      </div>

      <div id="switcher">
        <a className="switch" id="projects" href="/">
          Projects
        </a>
        <div className="switch" id="line">
          |
        </div>
        <a className="switch" id="about" href="/about">
          About
        </a>
        <div className="switch" id="line">
          |
        </div>
        <a className="switch" id="contact" href="mailto:mail@tommcl.co.uk">
          Contact
        </a>
        <div className="switch" id="line">
          |
        </div>
        <span id="toggle">
        <LightDarkToggle  />
        </span>
      </div>
     
    </header>
  );
};

export default Header;
