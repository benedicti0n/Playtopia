import React from "react";

const Events2 = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="carousel w-full h-full bg-cover bg-center ">
        <div id="item1" className="carousel-item w-full ">
          <img
            src="/EventBg/Desktop/bgImg1.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg2.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg3.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg4.jpg"
            className="w-full"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg5.jpg"
            className="w-full"
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg6.jpg"
            className="w-full"
          />
          <div id="item7" className="carousel-item w-full">
          <img
            src="/EventBg/Desktop/bgImg7.jpg"
            className="w-full"
          />
        </div>
        </div>
      </div>
      <div className="flex justify-center py-2 absolute bottom-0 left-[50%] border-2 border-red-200">
        <a href="#item1" className="h-[100px] w-[100px] bg-cover bg-center">
          <img src="/EventBg/SliderLogo/valoLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000 " />
        </a>
        <a href="#item2" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/bgmiLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
        <a href="#item3" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/8bpLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
        <a href="#item4" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/carromLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
        <a href="#item5" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/ttLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
        <a href="#item6" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/tresureLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
        <a href="#item7" className="h-[100px] w-[100px]">
        <img src="/EventBg/SliderLogo/openMicLogo.jpg" alt="" className=" hover:scale-150 transition-transform duration-2000" />
        </a>
      </div>
    </div>
  );
};

export default Events2;
