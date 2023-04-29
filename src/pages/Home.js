import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Body from '../components/Body';

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
const email = JSON.parse(localStorage.getItem("user")).user?.email;
const [darkMode,setDarkMode] = useState(true);

  return (
    <>
        <Navbar name={name} email={email} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body darkMode={darkMode} setDarkMode={setDarkMode} /> 
        
    </>
  )
}

export default Home