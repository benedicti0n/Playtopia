import React, {useState, useEffect, useRef} from 'react';
import DropdownItems from './DropdownItems'

import "../Styles/Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <header id="headSection">
      <div>
        <img src="/Playtopia-Logo-PNG-2.svg" alt="" />
      </div>

     <div className='App'>
     <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="cd-header" >
            <div className="header-wrapper">
              <div className="nav-but-wrap">
                <div className="menu-icon hover-target">
                  <span className="menu-icon__line menu-icon__line-left"></span>
                  <span className="menu-icon__line"></span>
                  <span className="menu-icon__line menu-icon__line-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItems text={"My Profile"} />
            <DropdownItems text={"Edit Profile"} />
            <DropdownItems text={"Inbox"} />
            <DropdownItems text={"Settings"} />
            <DropdownItems text={"Helps"} />
            <DropdownItems text={"Logout"} />
          </ul>
        </div>
      </div>
     </div>
    </header>
  );
};

export default Navbar;
