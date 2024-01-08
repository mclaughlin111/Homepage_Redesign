import React from "react";

import Flickity from "react-flickity-component";
import pentaxImage from "../Assets/pentaxcamera.jpeg";
import youtubeImage from "../Assets/youtubelink.jpeg";
import gameImage from "../Assets/gamelink.jpeg";
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
  

<a href="/photosfilm"><img  src={pentaxImage} alt="pentaxImage" className="carousel-image"/></a>
<a href="https://www.youtube.com/@ThomasMYoutube"><img src={youtubeImage} alt="youtubeImage" className="carousel-image"/></a>
<a href="/game"><img src={gameImage} alt="gameImage" className="carousel-image" id="gameImage"/></a>
  </Flickity>

  </div>


  );
};

export default FlickityCarousel;
