import React, { useState } from "react";
import ContentList from "./ContentList";
import FlickityCarousel from "../Components/FlickityCarousel";
import { TbCarouselHorizontal } from "react-icons/tb";
import { PiListFill } from "react-icons/pi";
import "../projects.css" 

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("contentGrid");

  const handleToggleComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <PiListFill onClick={() => handleToggleComponent("contentGrid")} />
          </li>
          <li>
            <TbCarouselHorizontal
              onClick={() => handleToggleComponent("flickityCarousel")}
            />
          </li>
        </ul>
      </nav>

      {activeComponent === "contentGrid" && <ContentList />}
      {activeComponent === "flickityCarousel" && <FlickityCarousel />}
    </div>
  );
};

export default Projects;
