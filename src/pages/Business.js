import React,{useState} from 'react'
import BusinessNavbar from '../components/BusinessNavbar';
import BusinessBody from '../components/BusinessBody';

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
const email = JSON.parse(localStorage.getItem("user")).user?.email;
const [darkMode,setDarkMode] = useState(true);
const [signoutModalIsOpen,setSignoutModalIsOpen]=useState(false);

  return (
    <>
        <BusinessNavbar name={name} email={email} darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} />
        <BusinessBody darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} /> 
        
    </>
  )
}

export default Home