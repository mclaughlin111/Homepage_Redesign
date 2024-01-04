import React from 'react';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import PentaxImage from '/Users/thomasmclaughlin/Documents/🗂️Files/Web Development/homepage/src/Assets/pentaxcamera.jpg';
import YoutubeImage from '/Users/thomasmclaughlin/Documents/🗂️Files/Web Development/homepage/src/Assets/youtubelink.jpg';



const Carousel = () => {
  return (
    <CCarousel dark controls indicators wrap transition='crossfade'>
    <CCarouselItem >
      <CImage className="d-block w-100"  src={PentaxImage} alt="PhotosLink" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Film Photos</h5>

      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src={YoutubeImage} alt="YoutubeLink" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Youtube Channel</h5>
      </CCarouselCaption>
    </CCarouselItem>
    
  </CCarousel>
  );
}

export default Carousel;
