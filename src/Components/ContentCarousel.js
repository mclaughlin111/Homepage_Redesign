import React from "react";
import Flickity from "react-flickity-component";
import ContentData from "../Assets/ContentData.json";
import Tilt from "react-parallax-tilt";
import "../flickity.css";

const flickityOptions = {
  pageDots: true,
  selectedAttraction: 0.2,
  friction: 1.5,
  draggable: true,
  autoPlay: true,
  wrapAround: true,
};

const ContentCarousel = () => {
  return (
    <div className="carouselContainer">
      <div className="carousel">
        <Flickity options={flickityOptions}>
          {ContentData.map((item, index) => (
            <div key={index} className="carouselItemContainer">
              <Tilt
                tiltEnable
                tiltReverse={false}
                scale={0.9}
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
