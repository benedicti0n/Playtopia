import React, { useEffect } from "react";
import { useState } from "react";

import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import Events from "./Events.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

import "../Styles/Home.css";
import '../Styles/Navbar.css'


// TODO: implement a full page smooth scroll. Reference help links given below:
// https://www.youtube.com/watch?v=hnbOIVBREUM
// https://github.com/oelbaga/snapscroll-react

const Home = () => {
  

  return (
    <div id="homeContainer">
      
      <Navbar/>
      

      <div id="aboutUs">
        <div id="aboutUsText">
          <h1>
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
