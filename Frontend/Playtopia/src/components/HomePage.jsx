import React, { useEffect } from 'react'
import Home from './Home'
import Events from './Events'
import Footer from './Footer'
import Countdown from './Countdown'

function HomePage() {
 
  
  return (
    <div>
        <div><Home/></div>
        <div><Countdown/></div>
        <div><Events/></div>
        <div><Footer></Footer></div>
    </div>
  )
}

export default HomePage