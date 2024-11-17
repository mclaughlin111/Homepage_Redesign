import React, { useState } from "react";
import contentData from "../Assets/ContentData.json";
import "../contentgrid.css";
import { GridToggle } from "./GridToggle";

const ContentGrid = () => {
  // const gridVW = [30, 35, 42, 55];
  const [gridSize, setGridSize] = useState(30);
  const increase = () => {
    // Ensure the gridSize does not exceed 100vw
    setGridSize((prevSize) => Math.min(prevSize + 10, 100));
  };

  const decrease = () => {
    // Ensure the gridSize does not go below 10vw
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + "/" + item.image}
                alt={item.name}
                className="gridImage"
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentGrid;
