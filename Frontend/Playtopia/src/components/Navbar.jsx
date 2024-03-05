import React, { useState, useRef, useEffect } from 'react';
import DropdownItems from './DropdownItems';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';

import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // TODO: bug: when i click on the hamburger menu the menu opens but the if i click outside somewhere in webpage then it closes as it should but the hamburger icon is set to 'X' and only changes its state upon click. fix it as when the menu closes it should change its state to the inital drop down as it should

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <header id="headSection">
      <div>
        <img src="/Playtopia-Logo-PNG-2.svg" alt="" />
      </div>

      <div className="App">
        <div className="menu-container" ref={menuRef}>
          <AnimatedHamburgerButton onClick={() => setOpen(!open) } />

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <ul>
              {/* TODO: Pass the Sign Up prop only when the user is not Logged in  or else it should show "My Profile"*/}
              <DropdownItems text={'Sign Up'}><Link to={'signUp'}/>hi</DropdownItems>
              <DropdownItems text={'Home'} />
              <DropdownItems text={'Events'} />
              <DropdownItems text={'Gallery'} />
              <DropdownItems text={'Contact Us'} />
              {/* TODO: Show the Logout div below only when the user is logged in */}
              {/* <DropdownItems text={'Logout'} /> */}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
