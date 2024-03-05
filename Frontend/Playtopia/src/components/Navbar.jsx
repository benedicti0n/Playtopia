import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownItems from './DropdownItems';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';
import Hamburger from './Hamburger';

import '../Styles/Navbar.css';

const Navbar = () => {

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

  return (

    windowWidth.windowWidth < 550 ?
    <header id="headSection">
      <div>
        <img src="/Playtopia-Logo-PNG-2.svg" alt="" />
      </div>

      <Hamburger/>
      
    </header>
    :
    <header id="headSection">
      <div>
        <img src="/Playtopia-Logo-PNG-2.svg" alt="" />
      </div>

      <div id='linksSection'>
        <a href="">Home</a>
        <a href="">Events</a>
        <a href="">Gallery</a>
        <a href="">Contact Us</a>
      </div>


      <Link to={'/signUp'}>
      <button>
        Sign up
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
      </Link>
      
    </header>
  );
};

export default Navbar;
