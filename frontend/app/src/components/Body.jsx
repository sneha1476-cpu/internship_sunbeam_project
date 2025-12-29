import React, { useEffect } from "react";
import "./Body.css";

// Images
import image2 from "../assets/image2.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";


// Bootstrap
import { Carousel } from "bootstrap";

const Body = () => {
  useEffect(() => {
    const carouselElement = document.querySelector("#mainCarousel");
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="slider-box">
      <div id="mainCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="slider-img d-block w-100" alt="slide1" />
          </div>

          <div className="carousel-item">
            <img src={image6} className="slider-img d-block w-100" alt="slide2" />
          </div>

          <div className="carousel-item">
            <img src={image7} className="slider-img d-block w-100" alt="slide3" />
          </div>

          <div className="carousel-item">
            <img src={image8} className="slider-img d-block w-100" alt="slide4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
