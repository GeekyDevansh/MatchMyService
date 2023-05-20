import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { HiMoon, HiSun } from "react-icons/hi";
import Loading from './Loading';
import {motion} from "framer-motion";

const Navbar = ({ name, email, darkMode, setDarkMode, signoutModalIsOpen, setSignoutModalIsOpen }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setSignoutModalIsOpen(true);
  };
  const closeModal = () => {
    setSignoutModalIsOpen(false);
  };

  const handleSignOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user");
    navigate("/");
    setLoading(false);
    }, 1500);
    
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "40%",
      width: "50%",
      borderWidth:"1px",
      borderColor:"gray",
      borderRadius: "15px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const customStylesSm = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "25%",
      width: "90%",
      borderWidth:"1px",
      borderColor:"gray",
      borderRadius: "15px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display:"flex",
      paddingRight:"15px",
      paddingLeft:"5px",
    },
  };

  console.log(window.screen);

  return (
    <>
      <Modal
        isOpen={signoutModalIsOpen}
        closeTimeoutMS={200}
        style={window.screen.width > "768" ? customStyles : customStylesSm}
        contentLabel="Example Modal"
      >
       {loading? <div className="flex justify-center items-center overflow-y-hidden h-full w-full md:w-[60%] md:ml-[20%] " > <Loading/> </div> : 
       <div className="flex md:border md:border-gray-800 md:justify-center items-center rounded-xl md:p-2 m-1 " >
        <div className="flex justify-center items-center w-[40%]  " >
          <img src="/signout.png" alt="" />
        </div>
        <div className="w-[60%] flex justify-center items-center " >
        <div className="flex flex-col gap-10">
          <div className="md:text-xl text-base font-medium text-center ">
            Are you sure you want to <span className="font-semibold" >Sign Out</span> ?
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="md:px-6 md:py-2 px-3 py-2 text-xs md:text-base text-white font-extrabold bg-gray-500 hover:bg-gray-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="md:px-6 md:py-2 px-3 py-2 text-xs md:text-base text-white font-extrabold bg-red-500 hover:bg-red-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
        </div>

       
      
        </div>}
      </Modal>

      <div
        className={`${
          darkMode ? "bg-black" : "bg-white"
        } border-gray-300 drop-shadow-lg md:p-0 p-2 `}
      >
        <ul className="list-none flex  justify-between mx-[5%] md:p-[0.75%] p-[2%]">
          <li
            className={`${
              darkMode ? "text-gray-300" : "text-gray-900"
            } flex flex-col font-light md:text-xl text-sm`}
          >
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              Welcome<span className="font-medium capitalize"> {name} <span className="gradient-background text-xs" >Business</span> </span>
            </motion.div>

            <motion.div initial={{ y: 10, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             exit={{ y: -10, opacity: 0 }}
             transition={{ duration: 0.5, delay:0.5 }} className=" text-xs md:text-sm font-thin"> {email} </motion.div>
          </li>
          <li className="flex justify-center md:gap-4 gap-2">
            <button
            
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } rounded-full hidden md:block`}
              onClick={toggleMode}
            >
              {darkMode ? <HiSun size={28} /> : <HiMoon size={28} />}
            </button>
            <button
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } rounded-full md:hidden`}
              onClick={toggleMode}
            >
              {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
            </button>
            <button
              onClick={handleClick}
              className="md:px-6 md:py-2 px-3 text-xs md:text-sm text-white font-extrabold bg-red-500 hover:bg-red-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
            >
              SIGN OUT
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
