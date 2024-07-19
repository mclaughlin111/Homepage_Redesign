import React from "react";
import { useEffect } from "react";
import LightDarkToggle from "./LightDarkToggle";
import { Link, Outlet } from "react-router-dom";
import "../header.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [0, 5], { clamp: false });

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
      <motion.div
        style={{
          y,
          position: "sticky",
          top: 0,
          zIndex: 99,
        }}
      >
        <header class="pageHeader">
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
        <div className="headerBorder"></div>
      </motion.div>

      <Outlet />
    </div>
  );
};

export default Header;
