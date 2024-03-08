import React, { useState } from "react";
import ContentList from "./ContentList";
import FlickityCarousel from "./ContentCarousel";
import { TbCarouselHorizontal } from "react-icons/tb";
import { PiListFill } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import "../projects.css";
import ContentGrid from "./ContentGrid";
import MyNavBar from "./MyNavBar";
import Tabs from "./Tabs";
import ContentCarousel from "./ContentCarousel";

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("ContentCarousel");
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleComponent = (component) => {
    setActiveComponent(component);
    // Check the current mode and apply the appropriate class
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

  return (
    <div>
      <nav>
        <ul>
          <div className={activeComponent === "contentList" ? "activeIcon" : ""}>
            <li
              className={activeComponent === "contentList" ? "active" : ""}
              onClick={() => handleToggleComponent("contentList")}
            >
              <PiListFill />
            </li>
          </div>

          <div className={activeComponent === "ContentCarousel" ? "activeIcon" : ""}>
            <li
              className={activeComponent === "ContentCarousel" ? "active" : ""}
              onClick={() => handleToggleComponent("ContentCarousel")}
            >
              <TbCarouselHorizontal />
            </li>
          </div>

          <div className={activeComponent === "contentGrid" ? "activeIcon" : ""}>
            <li
              className={activeComponent === "contentGrid" ? "active" : ""}
              onClick={() => handleToggleComponent("contentGrid")}
            >
              <BsFillGridFill />
            </li>
          </div>
        </ul>

        <div
          className={`selector ${
            activeComponent === "ContentCarousel" ? "right" : ""
          }`}
        />
      </nav>

      {activeComponent === "contentList" && <ContentList />}
      {activeComponent === "ContentCarousel" && <ContentCarousel />}
      {activeComponent === "contentGrid" && <ContentGrid />}
    </div>
  );
};

export default Projects;
