import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

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
               text-white font-light md:text-xl text-sm`}
          >
            <motion.div  initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }} 
          className="font-medium md:text-xl text-base">
            <img src="/logo_icon.png" alt="" className="inline-block md:h-7 md:w-7 h-6 w-6 mr-1" />
              MatchMyService
            </motion.div>
          </li>
          <li className="flex justify-center md:gap-4 gap-2">
           
           
            <button
              
              className="md:px-6 md:py-4 px-4 py-3 text-sm md:text-base text-white font-extrabold bg-blue-500 hover:bg-blue-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
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
