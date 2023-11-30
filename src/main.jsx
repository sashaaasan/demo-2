import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPanel from './components/left side/main/mainPanel.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />


  </React.StrictMode>,
)
