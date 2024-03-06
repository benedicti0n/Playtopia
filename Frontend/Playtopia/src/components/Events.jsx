import React, { useState, useRef, useEffect } from "react";
import "../Styles/Swiper.css";
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

import slide_image_1 from "../assets/images/valoLogo.jpg";
import slide_image_2 from "../assets/images/bgmiLogo.jpg";
import slide_image_3 from "../assets/images/carromLogo.jpg";
import slide_image_4 from "../assets/images/openMicLogo.jpg";
import slide_image_5 from "../assets/images/tresureLogo.jpg";
import slide_image_6 from "../assets/images/ttLogo.jpg";
import slide_image_7 from "../assets/images/8bpLogo.jpg";

const Events = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mainImg, setMainImg] = useState(img1);

  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, []);


  const handleScrollToEnd = () => {
    const newImages = [...images];
    const topImage = newImages.shift();
    newImages.push(topImage);
    setMainImg(newImages[0]);
  };


  const images = [img1, img2, img3, img4, img5, img6, img7];
  const slideImages = [slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7];

  const handleChangeBackground = (index) => {
    setMainImg(images[index]);
  };

  return (
    <div className="w-full h-screen relative">
      {windowWidth < 550 ? (
        <div className="absolute bottom-0 left-0 w-full">
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`slide_image_${index}`} />
            </SwiperSlide>
          ))}
          {/* <div className="slider-main">
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div> */}
        </Swiper>
        </div>
        
      ) : (
        <div id="eventsContainer" style={{ backgroundImage: `url(${mainImg})` }}>
          <div className="slider-container" onScroll={handleScrollToEnd}>
            <div className="slider">
              {images.map((image, index) => (
                <div
                  className="imgContainer"
                  key={index}
                  onClick={() => handleChangeBackground(index)}
                >
                  <div id="gradientShade"></div>
                  <img src={slideImages[index]} alt={`slide_image_${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
  );
};


export default Events;
