import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { HiMoon, HiSun } from "react-icons/hi";
import Loading from "./Loading";
import { motion } from "framer-motion"
// import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const Navigate=useNavigate();

  const handleClick= ()=>{

      Navigate('/login');

  }

  return (
    <>
    <div
        className={`
           bg-black 
         border-gray-300 drop-shadow-lg p-2 md:p-1`}
      >
        <ul className="list-none flex justify-between items-center mx-[5%] md:p-[0.75%] p-[2%]">
          <li
            className={`
               text-gray-300 font-light md:text-xl text-sm`}
          >
            <motion.div  initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }} >
              MatchMyService
            </motion.div>
          </li>
          <li className="flex justify-center md:gap-4 gap-2">
           
           
            <button
              
              className="md:px-6 md:py-4 px-6 py-3 text-sm md:text-base text-white font-extrabold bg-blue-500 hover:bg-blue-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
              onClick={handleClick}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
