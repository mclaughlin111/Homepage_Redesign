import React, { lazy, useState } from "react";
import Flickity from "react-flickity-component";
import ContentData from "../Assets/ContentData.json";
import Tilt from "react-parallax-tilt";
import "../flickity.css";

const flickityOptions = {
  pageDots: true,
  draggable: true,
  autoPlay: 4500,
  wrapAround: true,
  lazyLoad: 2,
};

const ContentCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="carouselContainer">
      <div className="carousel">
        <Flickity options={flickityOptions}>
          {ContentData.map((item, index) => (
            <div
              key={index}
              className="carouselItemContainer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Tilt
                glare
                tiltEnable
                tiltReverse={false}
                scale={hoveredIndex === index ? 0.9 : 1} // Scale down only when hovered
                tiltMaxAngleX={25}
                transitionSpeed={2000}
                gyroscope
              >
                <p className="carouselItemDescription">{item.name}</p>
                <a href={item.link}>
                  <img
                    src={process.env.PUBLIC_URL + "/" + item.image}
                    alt={item.name}
                    className="carousel-image"
                  />
                </a>
              </Tilt>
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default ContentCarousel;
