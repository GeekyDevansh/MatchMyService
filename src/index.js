import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Business from './pages/Business';
import Protected from './components/Protected';
import ProtectedBusiness from './components/ProtectedBusiness';
import ProtectedLanding from './components/ProtectedLanding';
import { Toaster } from "react-hot-toast";

const user = JSON.parse(localStorage.getItem("user"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Toaster />
      <Routes>
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<Signup/>} />
    <Route exact path='/home'  element={ <Protected> <Home/> </Protected>}/>
    <Route exact path='/business/home'  element={ <ProtectedBusiness> <Business/> </ProtectedBusiness>}/>
    <Route exact path='/' element={<ProtectedLanding><Landing/></ProtectedLanding>} />
    <Route exact path='/landing' element={<Landing/>} />

      </Routes>
    {/* <App /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
