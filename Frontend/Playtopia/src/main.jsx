import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

import App from './App';
import Events from './components/Events';
import Footer from './components/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App/>
      <Events/>
      <Footer/>
    </div>
  </React.StrictMode>
);
