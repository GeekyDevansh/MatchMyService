import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes";

const user = JSON.parse(localStorage.getItem("user"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Toaster />
    <AnimatedRoutes/>
    <AnimatePresence mode='wait'>
     
      </AnimatePresence>
    {/* <App /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
