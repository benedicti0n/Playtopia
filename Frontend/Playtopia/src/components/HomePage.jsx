import React, { useEffect, useState } from 'react'
import Home from './Home'
import Events from './Events'
import Footer from './Footer'
import Countdown from './Countdown'
import Loader from './Loader'

// import '../Styles/Transition.css'

function HomePage() {
 
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])
  
  return (

    <div>
      {
        loading ?
        <Loader/>
        :
        <div className=' transition'>
        <div><Home/></div>
        <div><Countdown/></div>
        <div><Events/></div>
        <div><Footer></Footer></div>
    </div>
      }
    </div>
    
  )
}

export default HomePage