import React from "react";
import Flickity from "react-flickity-component";
import ContentData from "../Assets/ContentData.json";
import "../flickity.css";

const flickityOptions = {
  pageDots: true,
  selectedAttraction: 0.2,
  friction: 1.5,
  draggable: true,
  autoPlay: 4500,
  wrapAround: true,
};

const ContentCarousel = () => {
  return (
    <div className="carousel">
      <Flickity options={flickityOptions}>
        {ContentData.map((item, index) => (
          <div key={index} className="carouselItemContainer">
            <a href={item.link}>
              <img
                src={process.env.PUBLIC_URL + "/" + item.image}
                alt={item.name}
                className="carousel-image"
              />
            </a>
            <p className="carouselItemDescription">{item.name}</p>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default ContentCarousel;
