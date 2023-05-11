import React,{useState} from 'react'
import BusinessNavbar from '../components/BusinessNavbar';
import BusinessBody from '../components/BusinessBody';

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
const email = JSON.parse(localStorage.getItem("user")).user?.email;
const [darkMode,setDarkMode] = useState(true);

  return (
    <>
        <BusinessNavbar name={name} email={email} darkMode={darkMode} setDarkMode={setDarkMode} />
        <BusinessBody darkMode={darkMode} setDarkMode={setDarkMode} /> 
        
    </>
  )
}

export default Home