import React, { useState } from "react";
import ContentList from "./ContentList";
import FlickityCarousel from "../Components/FlickityCarousel";
import { TbCarouselHorizontal } from "react-icons/tb";
import { PiListFill } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import "../projects.css";
import ContentGrid from "./ContentGrid";

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("flickityCarousel");

  const handleToggleComponent = (component) => {
    setActiveComponent(component);
  };


  return (
    
    <div>

      <nav>
      <ul>
  <div className={activeComponent === "contentList" ? "active" : ""}>
    <li
      className={activeComponent === "contentList" ? "active" : ""}
      onClick={() => handleToggleComponent("contentList")}
    >
      <PiListFill />
    </li>
  </div>

  <div className={activeComponent === "flickityCarousel" ? "active" : ""}>
    <li
      className={activeComponent === "flickityCarousel" ? "active" : ""}
      onClick={() => handleToggleComponent("flickityCarousel")}
    >
      <TbCarouselHorizontal />
    </li>
  </div>

  <div className={activeComponent === "contentGrid" ? "active" : ""}>
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
            activeComponent === "flickityCarousel" ? "right" : ""
          }`}
        />
   
      </nav>

      {activeComponent === "contentList" && <ContentList />}
      {activeComponent === "flickityCarousel" && <FlickityCarousel />}
      {activeComponent === "contentGrid" && <ContentGrid />}
    </div>
  );
};

export default Projects;
