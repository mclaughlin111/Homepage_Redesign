import React from "react";
import contentData from "../Assets/ContentData.json";
import '../contentgrid.css';

const ContentGrid = () => {
  return (
    <div className="grid-container">
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
  );
};

export default ContentGrid;
