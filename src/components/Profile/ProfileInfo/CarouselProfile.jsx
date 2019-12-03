import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselImg1 from '../../../assets/carousel1.jpg';
import CarouselImg2 from '../../../assets/carousel2.jpg';
import CarouselImg3 from '../../../assets/carousel3.jpg';

class ProfileCarousel extends Component {
  render() {
    return (
      <Carousel
        a
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
        width={400}
        interval={2000}
        stopOnHover={true}
        showStatus={false}
      >
        <div>
          <img src={CarouselImg1} alt="some" />
          <p className="legend">Technology is optimism</p>
        </div>
        <div>
          <img src={CarouselImg2} alt="connections"/>
          <p className="legend">More Human Touch</p>
        </div>
        <div>
          <img src={CarouselImg3} alt="cityview"/>
          <p className="legend">Fortunate to have You</p>
        </div>
      </Carousel>
    );
  }
}

export default ProfileCarousel;
