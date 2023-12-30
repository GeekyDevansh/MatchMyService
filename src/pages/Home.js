import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import { motion } from 'framer-motion';

const Home = () => {

const name = JSON.parse(localStorage.getItem("user")).user?.displayName;
const email = JSON.parse(localStorage.getItem("user")).user?.email;
const [darkMode,setDarkMode] = useState(true);
const [modalIsOpen,setModalIsOpen]=useState(false);
const [signoutModalIsOpen,setSignoutModalIsOpen]=useState(false);

  return (
    <>
        <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[url('/public/grid.svg')]"      >

        <Navbar name={name} email={email} darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} />
        <Body darkMode={darkMode} setDarkMode={setDarkMode} signoutModalIsOpen={signoutModalIsOpen} setSignoutModalIsOpen={setSignoutModalIsOpen} /> 
        </motion.div>
        
    </>
  )
}

export default Home