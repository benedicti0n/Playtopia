import React, { useState } from "react";
import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import img5 from "../assets/images/img_5.jpg";
import img6 from "../assets/images/img_6.jpg";
import img7 from "../assets/images/img_7.jpg";
import bgImg from "../../public/bg.jpg"

import "../Styles/Events.css";
// import Carousel from "./Carousel";

const Events = () => {

  const [mainImg, setMainImg] = useState(bgImg);
  
  const handleChangeBackground = (image) =>{
    setMainImg(image);
  }


  return (
    <div id="eventsContainer" style={{backgroundImage: `url(${mainImg})`}}>
      <div class="slider-container">
        <div class="slider">
          <div class="imgContainer">
            <div id="gradientShade"></div>
            <img
              src="/logos/valoLogo.jpg"
              alt=""
            />
          </div>
            {[img1,img2,img3,img4,img6,img7].map((image, index)=>(
                <div class="imgContainer" onClick={()=>handleChangeBackground(image)}>
                  <img
                    key={index}
                    src={image}
                    alt=""
                  />
                </div> 
            ))}
          
        </div>
      </div>
    </div>

   
      // <Carousel/>
  );
};

export default Events;
