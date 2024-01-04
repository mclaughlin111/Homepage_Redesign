import React from "react";

import Flickity from "react-flickity-component";
import pentaxImage from "../Assets/pentaxcamera.jpg";
import youtubeImage from "../Assets/youtubelink.jpg";
import "../flickity.css"

const flickityOptions = {
  initialIndex: 0,
  pageDots: true,
  selectedAttraction: 0.1,
friction: 1
};

const FlickityCarousel = () => {
  return (
    <div className="carousel">

    <Flickity options={flickityOptions}>
  

<img src={pentaxImage} alt="pentaxImage" className="carousel-image"/>
<img src={youtubeImage} alt="youtubeImage" className="carousel-image"/>
  </Flickity>

  </div>


  );
};

export default FlickityCarousel;
