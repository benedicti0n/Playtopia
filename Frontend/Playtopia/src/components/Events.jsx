import React from "react";
import "../Styles/Events-2.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Carousel from "./Carousel";

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import slide_image_1 from '../assets/images/8bpLogo.jpg';
import slide_image_2 from '../assets/images/bgmiLogo.jpg';
import slide_image_3 from '../assets/images/carromLogo.jpg';
import slide_image_4 from '../assets/images/openMicLogo.jpg';
import slide_image_5 from '../assets/images/tresureLogo.jpg';
import slide_image_6 from '../assets/images/ttLogo.jpg';
import slide_image_7 from '../assets/images/valoLogo.jpg';


const Events = () => {

  return (
    <div id="eventsContainer" >
      {/* <div class="slider-container">
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
      </div> */}

{/* <section id="tranding">
      <div class="container">
        <h3 class="text-center section-subheading">- popular Delivery -</h3>
        <h1 class="text-center section-heading">Tranding food</h1>
      </div>
      <div class="container">
        <div class="swiper tranding-slider">
          <div class="swiper-wrapper">
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Special Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-2.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Meat Ball
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-3.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$40</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Burger
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-4.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$15</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Frish Curry
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-5.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$15</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Pane Cake
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-6.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Vanilla cake
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-7.png" alt="Tranding"/>
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$8</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Straw Cake
                  </h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            
          </div>

          <div class="tranding-slider-control">
            <div class="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div class="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </div>
    </section> */}

    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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

    </div>

   
      // <Carousel/>
  );
};

export default Events;
