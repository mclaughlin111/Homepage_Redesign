import React, { useState } from "react";
import ContentList from "./ContentList";
import FlickityCarousel from "../Components/FlickityCarousel";
import { TbCarouselHorizontal } from "react-icons/tb";
import { PiListFill } from "react-icons/pi";
import { IoGrid } from "react-icons/io5";
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
          <li
            className={activeComponent === "contentList" ? "active" : ""}
            onClick={() => handleToggleComponent("contentList")}
          >
            <PiListFill />
          </li>
          <li
            className={activeComponent === "flickityCarousel" ? "active" : ""}
            onClick={() => handleToggleComponent("flickityCarousel")}
          >
            <TbCarouselHorizontal />
          </li>
          <li
            className={activeComponent === "contentGrid" ? "active" : ""}
            onClick={() => handleToggleComponent("contentGrid")}
          >
            <IoGrid />
          </li>
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
