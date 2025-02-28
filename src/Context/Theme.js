import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const setActiveIconLight = (isLightMode) => {
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

    // Set the `data-theme` attribute to toggle themes globally
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );

    const applyTheme = () => {
      if (isDarkMode) {
        // Remove Light Mode styles
        document.querySelector("body").classList.remove("bodylight");
        const switches = document.querySelectorAll(".switch");
        switches.forEach((singleSwitch) => {
          singleSwitch.classList.remove("switchlight");
        });
        document
          .querySelector(".pageHeader")
          ?.classList.remove("pageHeaderLight");
        document.querySelector(".react-toggle-track-x").style.display =
          "inline-block";
        document.querySelector(".react-toggle-track-check").style.display =
          "none";
        document
          .querySelector(".headerBorder")
          ?.classList.remove("headerBorderLight");
        const aboutText = document.querySelector(".about-text");
        if (aboutText) {
          aboutText.classList.remove("about-text-light");
        }

        // Remove Light Mode for .activeIcon
        setActiveIconLight(false);
      } else {
        // Add Light Mode styles
        document.querySelector("body").classList.add("bodylight");
        const switches = document.querySelectorAll(".switch");
        switches.forEach((singleSwitch) => {
          singleSwitch.classList.add("switchlight");
        });
        document.querySelector(".pageHeader")?.classList.add("pageHeaderLight");
        document.querySelector(".react-toggle-track-x").style.display = "none";
        document.querySelector(".react-toggle-track-check").style.display =
          "inline-block";
        document
          .querySelector(".headerBorder")
          ?.classList.add("headerBorderLight");
        const aboutText = document.querySelector(".about-text");
        if (aboutText) {
          aboutText.classList.add("about-text-light");
        }

        // Add Light Mode for .activeIcon
        setActiveIconLight(true);
      }
    };

    applyTheme();
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
