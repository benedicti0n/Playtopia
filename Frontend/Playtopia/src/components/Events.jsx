import React, { useState, useRef } from "react";
import img1 from "../assets/images/bgImg1.jpg";
import img2 from "../assets/images/bgImg2.jpg";
import img3 from "../assets/images/bgImg3.jpg";
import img4 from "../assets/images/bgImg2.jpg";
import img5 from "../assets/images/bgImg2.jpg";
import img6 from "../assets/images/bgImg2.jpg";
import img7 from "../assets/images/bgImg2.jpg";
import "../Styles/Events.css";

const Events = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [mainImg, setMainImg] = useState(img1);
  const sliderRef = useRef(null);

  const handleChangeBackground = (image) => {
    setMainImg(image);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider.scrollTop === slider.scrollHeight - slider.clientHeight) {
      // If scroll reaches the end, loop to the beginning
      slider.scrollTop = 0;
    }
  };

  return (
    <div
      id="eventsContainer"
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      <div id="mainContainer">
        <div className="slider-container" ref={sliderRef} onScroll={handleScroll}>
          <div className="slider">
            <div className="imgContainer">
              <div id="gradientShade"></div>
              <img src="/logos/valoLogo.jpg" alt="" />
            </div>
            {images.map((image, index) => (
              <div
                className="imgContainer"
                key={index}
                onClick={() => handleChangeBackground(image)}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
