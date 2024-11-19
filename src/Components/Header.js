import React, { useState, useEffect } from "react";
import LightDarkToggle from "./LightDarkToggle";
import { Link, Outlet } from "react-router-dom";

import { TbMail } from "react-icons/tb";
import { motion } from "framer-motion";

import "../header.css";
import "../headerBreakpoints.css";
import "../headerSwitch.css";
import { SquareDivs } from "./SquareDivs";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerBorder = document.querySelector(".headerBorder");
      const header = document.querySelector(".pageHeader");
      const title = document.querySelector(".title");
      if (window.scrollY > 10) {
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

  const revealAnimation = 0.9;

  const desktop = () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: revealAnimation, ease: "easeInOut" }}
        className="headerContainer"
      >
        <header className="pageHeader">
          <div className="title">
            <p>Tom McLaughlin </p>
            <SquareDivs />
          </div>

          <div id="switcher">
            <Link className="switch" id="projects" to="/projects">
              Projects
            </Link>

            <div className="divLine">|</div>

            <Link className="switch" id="projects" to="/about">
              About
            </Link>

            <div className="divLine">|</div>
            <a className="switch" id="toggle" href="mailto:mail@tommcl.co.uk">
              <TbMail />
            </a>
            <div className="divLine">|</div>
            <span id="toggle" title="Click To Switch Mode">
              <LightDarkToggle />
            </span>
          </div>
        </header>
        <div className="headerBorder"></div>
      </motion.div>
      <Outlet />
    </>
  );

  const mobile = () => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: revealAnimation, ease: "easeInOut" }}
        className="headerContainer"
      >
        <header className="pageHeader">
          <div className="title">
            <p>Tom McLaughlin </p>
          </div>

          <div id="switcher">
            <Link className="switch" id="projects" to="/projects">
              Projects
            </Link>

            <div className="divLine">|</div>

            <Link className="switch" id="projects" to="/about">
              About
            </Link>

            <div className="divLine">|</div>
            <a className="switch" id="toggle" href="mailto:mail@tommcl.co.uk">
              <TbMail />
            </a>
            <div className="divLine">|</div>
            <span id="toggle" title="Click To Switch Mode">
              <LightDarkToggle />
            </span>
          </div>
        </header>
        <div className="headerBorder"></div>
      </motion.div>
      <Outlet />
    </>
  );

  return isMobile ? mobile() : desktop();
};

export default Header;
