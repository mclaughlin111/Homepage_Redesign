import React from "react";
import { useEffect } from "react";
import LightDarkToggle from "./LightDarkToggle";
import { Link, Outlet } from "react-router-dom";
import MomentumScroll from "./MomentumScroll";
import "../header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerBorder = document.querySelector(".headerBorder");
      const header = document.querySelector(".pageHeader");
      const title = document.querySelector(".title");
      if (window.scrollY > 2) {
        header.classList.add("pageHeaderScroll");
        headerBorder.classList.add("headerBorderScroll");
        title.classList.add("titleScroll");
      } else {
        header.classList.remove("pageHeaderScroll");
        headerBorder.classList.remove("headerBorderScroll");
        title.classList.remove("titleScroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="headerContainer">
        <header class="pageHeader">
          <div>
            <p className="title">Thomas McLaughlin Online</p>
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
        <div className="headerBorder"></div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
