import React from 'react'
import DropdownItems from './DropdownItems'
import { Link } from 'react-router-dom'
import { useState  } from 'react'
import '../Styles/Hamburger.css'
import '../Styles/DropdownItems.css'


const Hamburger = () => {
    const [open, setOpen] = useState(false);


    // TODO: bug: when i click on the hamburger menu the menu opens but the if i click outside somewhere in webpage then it closes as it should but the hamburger icon is set to 'X' and only changes its state upon click. fix it as when the menu closes it should change its state to the inital drop down as it should

    


  return (
    <div id="menuToggle"  >
    
    
    
    <div id='hamburger'>
    <input type="checkbox" onClick={() => setOpen(!open) } />
    <span></span>
    <span></span>
    <span></span>
    </div>
    

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
  )
}

export default Hamburger