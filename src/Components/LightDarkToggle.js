import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import useSound from "use-sound";
import switchFX from "../Assets/switch.wav";
import { sassFalse } from "sass";

const LightDarkToggle = () => {
  const [dark, setIsDark] = useState(true);
  const [playFX] = useSound(switchFX);

  useEffect(() => {
    const setActiveIconLight = (isLightMode) => {
      // Check if .activeIcon exists before querying
      const activeIcons = document.querySelectorAll(".activeIcon");
      if (activeIcons.length > 0) {
        activeIcons.forEach((activeIcon) => {
          if (isLightMode) {
            activeIcon.classList.add("activeIconLight");
          } else {
            activeIcon.classList.remove("activeIconLight");
          }
        });
      }
    };

    if (dark === false) {
      // Add Light Mode styles
      document.querySelector("body").classList.add("bodylight");
      const switches = document.querySelectorAll(".switch");
      switches.forEach((singleSwitch) => {
        singleSwitch.classList.add("switchlight");
      });
      document.querySelector(".pageHeader").classList.add("pageHeaderLight");
      document.querySelector(".react-toggle-track-x").style.display = "none";
      document.querySelector(".react-toggle-track-check").style.display =
        "inline-block";
      document
        .querySelector(".headerBorder")
        .classList.add("headerBorderLight");
      // Add Light Mode for aboutText
      const aboutText = document.querySelector(".about-text");
      if (aboutText) {
        aboutText.classList.add("about-text-light");
      }

      // Add Light Mode for .activeIcon
      setActiveIconLight(true);
    } else {
      // Remove Dark Mode styles
      document.querySelector("body").classList.remove("bodylight");
      const switches = document.querySelectorAll(".switch");
      switches.forEach((singleSwitch) => {
        singleSwitch.classList.remove("switchlight");
      });
      document.querySelector(".pageHeader").classList.remove("pageHeaderLight");
      document.querySelector(".react-toggle-track-x").style.display =
        "inline-block";
      document.querySelector(".react-toggle-track-check").style.display =
        "none";
      document
        .querySelector(".headerBorder")
        .classList.remove("headerBorderLight");

      // Remove Light Mode for .activeIcon
      setActiveIconLight(false);
    }

    // Remove Light Mode for aboutText
    const aboutText = document.querySelector(".about-text");
    if (aboutText) {
      aboutText.classList.remove("about-text-light");
    }
  }, [dark]);

  const toggleDark = (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 300, damping: 2 }}
    >
      <MdDarkMode className="switch" id="darkToggle" />
    </motion.div>
  );

  const toggleLight = (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      // animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <MdLightMode className="switch" id="lightToggle" />{" "}
    </motion.div>
  );

  return (
    <Toggle
      id="toggleComponent"
      checked={dark}
      onClick={playFX}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: toggleDark, unchecked: toggleLight }}
      aria-label="Dark mode toggle"
    />
  );
};

export default LightDarkToggle;
