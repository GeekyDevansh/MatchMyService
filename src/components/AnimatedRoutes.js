import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Business from '../pages/Business';
import Protected from './Protected';
import ProtectedBusiness from './ProtectedBusiness';
import ProtectedLanding from './ProtectedLanding';
import NotFound from './NotFound';

const AnimatedRoutes = () => {

    const location= useLocation();

  return (
    <Routes key={location.pathname} location={location} >
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<Signup/>} />
    <Route exact path='/home'  element={ <Protected> <Home/> </Protected>}/>
    <Route exact path='/business/home'  element={ <ProtectedBusiness> <Business/> </ProtectedBusiness>}/>
    <Route exact path='/' element={<ProtectedLanding><Landing/></ProtectedLanding>} />
    <Route exact path='/landing' element={<Landing/>} />
    <Route exact path='*' element={<NotFound/>} />

      </Routes>
  )
}

export default AnimatedRoutes