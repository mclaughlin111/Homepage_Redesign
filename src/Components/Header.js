import React from "react";
import { useEffect } from "react";
import LightDarkToggle from "./LightDarkToggle";
import { Link, Outlet } from "react-router-dom";
import "../header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerBorder = document.querySelector(".headerBorder");
      const header = document.querySelector(".pageHeader");
      if (window.scrollY > 10) {
        header.classList.add("pageHeaderScroll");
        headerBorder.classList.add("headerBorderScroll");
      } else {
        header.classList.remove("pageHeaderScroll");
        headerBorder.classList.remove("headerBorderScroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className="divLine">|</div>

          <Link className="switch" id="projects" to="/about">
            About
          </Link>

          <div className="divLine">|</div>
          <a className="switch" id="contact" href="mailto:mail@tommcl.co.uk">
            Contact
          </a>
          <div className="divLine">|</div>
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
