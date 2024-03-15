import React from "react";

import Flickity from "react-flickity-component";
import pentaxImage from "../Assets/pentaxcamera.jpeg";
import youtubeImage from "../Assets/youtubelink.jpeg";
import gameImage from "../Assets/gamelink.png";
import pitchKick from "../Assets/pitchkick.jpeg";

import "../flickity.css"

const flickityOptions = {

  pageDots: true,
  selectedAttraction: 0.05,
friction: 1,
draggable: true,
autoPlay: true,
wrapAround: true
};

const ContentCarousel = () => {
  return (
    <div className="carousel">

    <Flickity options={flickityOptions}>
  

<div className="carouselItemContainer"><a href="http://photos.tommcl.co.uk/"><img  src={pentaxImage} alt="pentaxImage" className="carousel-image"/></a><p className="carouselItemDescription">Photography Gallery</p></div>

<div className="carouselItemContainer"><a href="/pitchkick"><img src={pitchKick} alt="pitchKickLogo" className="carousel-image"/></a><p className="carouselItemDescription">PitchKick</p></div>

<div className="carouselItemContainer"><a href="/game"><img src={gameImage} alt="gameImage" className="carousel-image" id="gameImage"/></a><p className="carouselItemDescription">Memory Training Game</p></div>

<div className="carouselItemContainer"><a href="https://www.youtube.com/@ThomasMYoutube"><img src={youtubeImage} alt="youtubeImage" className="carousel-image"/></a><p className="carouselItemDescription">Video Portfolio</p></div>

  </Flickity>

  </div>


  );
};

export default ContentCarousel;
