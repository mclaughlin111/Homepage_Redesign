import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const LightDarkToggle = () => {
  const [dark, setIsDark] = useState(true);

  useEffect(() => {
    const setActiveIconLight = (isLightMode) => {
      // Check if .activeIcon exists before querying
      const activeIcons = document.querySelectorAll('.activeIcon');
      if (activeIcons.length > 0) {
        activeIcons.forEach((activeIcon) => {
          if (isLightMode) {
            activeIcon.classList.add('activeIconLight');
          } else {
            activeIcon.classList.remove('activeIconLight');
          }
        });
      }
    };

    if (dark === false) {
      // Add Light Mode styles
      document.querySelector('body').classList.add('bodylight');
      const switches = document.querySelectorAll('.switch');
      switches.forEach((singleSwitch) => {
        singleSwitch.classList.add('switchlight');
      });
      document.querySelector('.pageHeader').classList.add('pageHeaderLight');
      document.querySelector('.react-toggle-track-x').style.display = "none";
      document.querySelector('.react-toggle-track-check').style.display = "inline-block";
      document.querySelector('.headerBorder').classList.add('headerBorderLight');

      
      // Add Light Mode for .activeIcon
      setActiveIconLight(true);
    } else {
      // Remove Dark Mode styles
      document.querySelector('body').classList.remove('bodylight');
      const switches = document.querySelectorAll('.switch');
      switches.forEach((singleSwitch) => {
        singleSwitch.classList.remove('switchlight');
      });
      document.querySelector('.pageHeader').classList.remove('pageHeaderLight');
      document.querySelector('.react-toggle-track-x').style.display = "inline-block";
      document.querySelector('.react-toggle-track-check').style.display = "none";
      document.querySelector('.headerBorder').classList.remove('headerBorderLight');

      
      // Remove Light Mode for .activeIcon
      setActiveIconLight(false);
    }
  }, [dark]);

  const toggleDark = <MdDarkMode className="switch" id='darkToggle' />;
  const toggleLight = <MdLightMode className="switch" id='lightToggle' />;

  return (
    <Toggle
      id="toggleComponent"
      checked={dark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: toggleDark, unchecked: toggleLight }}
      aria-label="Dark mode toggle"
    />
  );
};

export default LightDarkToggle;
