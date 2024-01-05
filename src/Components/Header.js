import React from "react";
import LightDarkToggle from "./LightDarkToggle";
import FlickityCarousel from "../Components/FlickityCarousel";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header class="pageHeader">
        <div>
          <p id="title">Thomas McLaughlin Online</p>
        </div>

        <div id="switcher">
          <a className="switch" id="projects" href="/">
            <Link className="switch" id="projects" to="/">
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
          <span id="toggle">
            <LightDarkToggle />
          </span>
        </div>
      </header>
      <div className="headerBorder"></div>
      <Outlet />
<FlickityCarousel />
    </>
  );
};

export default Header;
