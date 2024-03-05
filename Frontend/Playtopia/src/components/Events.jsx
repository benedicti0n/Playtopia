import React, { useState } from "react";
import img1 from "../assets/images/bgImg1.jpg";
import img2 from "../assets/images/bgImg2.jpg";
import img3 from "../assets/images/bgImg3.jpg";
import img4 from "../assets/images/bgImg2.jpg";
import img5 from "../assets/images/bgImg2.jpg";
import img6 from "../assets/images/bgImg2.jpg";
import img7 from "../assets/images/bgImg2.jpg";



import "../Styles/Events.css";
// import Carousel from "./Carousel";

const Events = () => {

  const [mainImg, setMainImg] = useState(img1);
  
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
            {[img1,img2,img3,img4,img5,img6,img7].map((image, index)=>(
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
