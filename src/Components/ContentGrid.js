import React, { useState } from "react";
import contentData from "../Assets/ContentData.json";
import "../contentgrid.css";
import { GridToggle } from "./GridToggle";

const ContentGrid = () => {
  const [gridSize, setGridSize] = useState(30);
  const increase = () => {
    setGridSize((prevSize) => Math.min(prevSize + 10, 100));
  };

  const decrease = () => {
    setGridSize((prevSize) => Math.max(prevSize - 10, 10));
  };

  return (
    <>
      <GridToggle increase={increase} decrease={decrease} />
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${gridSize}vw, 1fr))`,
        }}
      >
        {contentData.map((item) => (
          <div key={item.name} className="grid-item">
            <div className="overlay-container">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/" + item.image}
                  alt={item.name}
                  className="gridImage"
                />
              </a>
              <div className="overlay">
                <p className="overlay-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentGrid;
