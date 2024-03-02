import React from 'react'

import SignUp from './SignUp.jsx'
import Login from './Login.jsx'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='flex justify-center items-center w-[100px] h-[50px] rounded-md text-white bg-slate-500'>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home