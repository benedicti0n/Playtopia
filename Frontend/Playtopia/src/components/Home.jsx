import React, { useState,useEffect,useRef,useLayoutEffect } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);



import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import Events from "./Events.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

import "../Styles/Home.css";
import '../Styles/Navbar.css';



// TODO: implement a full page smooth scroll. Reference help links given below:
// https://www.youtube.com/watch?v=hnbOIVBREUM
// https://github.com/oelbaga/snapscroll-react

const Home = () => {
  
  const comp = useRef(null)

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline()
  //     tl.from("#text-1", {
  //       xPercent: "-100",
  //       opacity: 0,
  //       duration: 0.8,
  //       delay: 0.3,
  //     })
  //   }, comp)

  //   return () => ctx.revert()
  // }, [])

  return (
    <div id="homeContainer" >
      
      <Navbar/>
      

      <div id="aboutUs">
        <div id="aboutUsText">
          <h1 id="text-1">
            ABOUT
            <br />
            US
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ab amet maiores ullam fugiat quas at nulla nemo cumque nihil! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. A dolores eum
            optio quas quam beatae earum molestias sed Lorem ipsum dolor sit{" "}
          </p>
        </div>
        <div id="swipeDown">
          <div class="lines">
            <div class="line"></div>
            <div id="swipeDownTxt">Swipe Down</div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default Home;
