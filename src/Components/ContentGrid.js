import React from "react";
import contentData from "../Assets/ContentData.json";
import '../contentgrid.css';

import pentaxImage from "../Assets/pentaxcamera.jpeg";
import youtubeImage from "../Assets/youtubelink.jpeg";
import gameImage from "../Assets/gamelink.png";
import pitchKick from "../Assets/pitchkick.jpeg";

const imageMap = {
  Photos: pentaxImage,
  "Pitch Kick": pitchKick,
  "Memory Game": gameImage,
  Youtube: youtubeImage,
};

const ContentGrid = () => {
  return (
    <div className="grid-container">
      {contentData.map((item) => (
        <div key={item.name} className="grid-item">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={imageMap[item.name]}
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
