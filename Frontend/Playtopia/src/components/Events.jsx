import React from "react";

import "../Styles/Events.css";
// import Carousel from "./Carousel";

const Events = () => {

  return (
    <div id="eventsContainer" >
      <div class="slider-container">
        <div class="slider">
          <div class="imgContainer">
            <div id="gradientShade"></div>
            <img
              src="/logos/valoLogo.jpg"
              alt=""
            />
          </div>

          <div class="imgContainer">
            <img
              src="/logos/bgmiLogo.jpg"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <img
              src="/logos/8bpLogo.jpg"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <img
              src="/logos/carromLogo.jpg"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <img
              src="/logos/ttLogo.jpg"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <img
              src="/logos/openMicLogo.jpg"
              alt=""
            />
          </div>
          <div class="imgContainer">
            <img
              src="/logos/tresureLogo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

   
      // <Carousel/>
  );
};

export default Events;
