import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';

import App from './App';
import Events from './components/Events';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App/>
      <Events/>
    </div>
  </React.StrictMode>
);
