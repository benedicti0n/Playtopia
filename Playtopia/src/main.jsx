import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<Home/>}/>
      <Route path='register' element= {<Register/>}/>
      <Route path='login' element= {<Login/>}/>
      {/* <Route path='forgot-password' element= {<ForgotPassword/>}/> */}
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-screen w-screen flex justify-center items-center'>
    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
