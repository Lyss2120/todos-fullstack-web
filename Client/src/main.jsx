import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core';
import './index.css'
import Layout from './layout.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
  
)
