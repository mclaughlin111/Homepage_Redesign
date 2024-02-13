import React from "react";
import LightDarkToggle from "./LightDarkToggle";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">

      <header class="pageHeader">
      <div className="headerBorder"></div>
        <div>
          <p id="title">Thomas McLaughlin Online</p>
        </div>

        <div id="switcher">
          <a className="switch" id="projects" href="/">
            <Link className="switch" id="projects" to="/projects">
              Projects
            </Link>
          </a>
          <div className="switch" id="line">
            |
          </div>

          <Link className="switch" id="projects" to="/about">
            About
          </Link>

          <div className="switch" id="line">
            |
          </div>
          <a className="switch" id="contact" href="mailto:mail@tommcl.co.uk">
            Contact
          </a>
          <div className="switch" id="line">
            |
          </div>
          <span id="toggle" title="Click To Switch Mode">
            <LightDarkToggle />
          </span>
        </div>
      </header>
      
      <Outlet />
    </div>
  );
};

export default Header;
