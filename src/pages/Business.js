import React,{useState} from 'react'
import BusinessNavbar from '../components/BusinessNavbar';
import BusinessBody from '../components/BusinessBody';
import { motion } from 'framer-motion';

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
const email = JSON.parse(localStorage.getItem("user")).user?.email;
const [darkMode,setDarkMode] = useState(true);
const [signoutModalIsOpen,setSignoutModalIsOpen]=useState(false);

  return (
    <>
        <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>

        <BusinessNavbar name={name} email={email} darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} />
        <BusinessBody darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} /> 
        </motion.div>
        
    </>
  )
}

export default Home