import React, { useState, useRef, useEffect } from "react";
import "../Styles/Events-2.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../assets/images/bgImg1.jpg";
import img2 from "../assets/images/bgImg2.jpg";
import img3 from "../assets/images/bgImg3.jpg";
import img4 from "../assets/images/bgImg2.jpg";
import img5 from "../assets/images/bgImg2.jpg";
import img6 from "../assets/images/bgImg2.jpg";
import img7 from "../assets/images/bgImg2.jpg";
import "../Styles/Events.css";

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import slide_image_1 from "../assets/images/8bpLogo.jpg";
import slide_image_2 from "../assets/images/bgmiLogo.jpg";
import slide_image_3 from "../assets/images/carromLogo.jpg";
import slide_image_4 from "../assets/images/openMicLogo.jpg";
import slide_image_5 from "../assets/images/tresureLogo.jpg";
import slide_image_6 from "../assets/images/ttLogo.jpg";
import slide_image_7 from "../assets/images/valoLogo.jpg";

const Events = () => {

  const [windowWidth, setWindowWidth] = useState ({windowWidth: window.innerWidth})

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return() => {
      window.removeEventListener('resize', detectSize);
    }
  }), [windowWidth]



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
    <div className="w-full h-screen">
      {windowWidth.windowWidth < 550 ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-main">
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </Swiper>
      ) : (
        <div
          id="eventsContainer"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <div class="slider-container">
            <div class="slider">
              <div class="imgContainer">
                <div id="gradientShade"></div>
                <img src="/logos/valoLogo.jpg" alt="" />
              </div>
              {[img1, img2, img3, img4, img5, img6, img7].map(
                (image, index) => (
                  <div
                    class="imgContainer"
                    onClick={() => handleChangeBackground(image)}
                  >
                    <img key={index} src={image} alt="" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  // <div
  //   id="eventsContainer"
  //   style={{ backgroundImage: `url(${mainImg})` }}
  // >
  //   <div id="mainContainer">
  //     <div className="slider-container" ref={sliderRef} onScroll={handleScroll}>
  //       <div className="slider">
  //         <div className="imgContainer">
  //           <div id="gradientShade"></div>
  //           <img src="/logos/valoLogo.jpg" alt="" />
  //         </div>
  //         {images.map((image, index) => (
  //           <div
  //             className="imgContainer"
  //             key={index}
  //             onClick={() => handleChangeBackground(image)}
  //           >
  //             <img src={image} alt="" />
  //           </div>

  // <div id="eventsContainer" >
  //   <div class="slider-container">
};

export default Events;
