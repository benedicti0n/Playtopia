import React from "react";

import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import { Link } from "react-router-dom";

import "../Styles/Home.css";

const Home = () => {
  return (
    <div id="mainContainer">
      <video
        src="../assets/reyna-valorant-moewalls-com.mp4"
        autoplay
        muted
        loop
      ></video>
      <header id="headSection">
        <div>
          <img src="../assets/Playtopia Logo PNG 2.svg" alt="" />
        </div>

        <div class="cd-header">
          <div class="header-wrapper">
            <div class="nav-but-wrap">
              <div class="menu-icon hover-target">
                <span class="menu-icon__line menu-icon__line-left"></span>
                <span class="menu-icon__line"></span>
                <span class="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="nav">
          <div class="nav__content">
            <ul class="nav__list">
              <li class="nav__list-item active-nav">
                <a href="#" class="hover-target">
                  Login
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Home
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Events
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Galery
                </a>
              </li>
              <li class="nav__list-item">
                <a href="#" class="hover-target">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

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
