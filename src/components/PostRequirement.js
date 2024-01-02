import React from 'react'
import { HiPencil } from "react-icons/hi";
import {motion} from "framer-motion";

const PostRequirement = ({setModalIsOpen,darkMode}) => {

    const handleClick = () => {
        setModalIsOpen(true);
      };

  return (
    <>
    <div
          className={` md:w-[75%] w-[80%] ${
            darkMode ? "bg-[#272D35]" : "bg-[#f8f9fb]"
          } flex flex-col cursor-pointer items-center pb-10 border-2 border-dashed ${
            darkMode ? "border-white" : "border-gray-900"
          } rounded-2xl text-white gap-2 md:gap-0 drop-shadow-2xl md:mt-[5%] mt-[10%] `}
          onClick={handleClick}
        >
          {darkMode ? (
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
              <img
                src="/post_requirement.png"
                alt="img"
                className="md:w-32 md:h-32 w-24 h-24 md:mt-[15%] mt-[20%] "
              />
            </motion.div>
          ) : (
            <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
              <img
                src="/post_requirement.png"
                alt="img"
                className="md:w-32 md:h-32 w-24 h-24 md:mt-[15%] mt-[20%] "
              />
            </motion.div>
          )}

          <motion.button initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5,delay: 0.5 }} className="md:px-4 px-2 text-white text-sm md:text-base font-black bg-blue-700 hover:bg-blue-800 rounded-md md:h-14 h-12 md:drop-shadow-xl drop-shadow-lg ">
            <span className="pr-2"> POST REQUIREMENT </span>{" "}
            <span className=" hidden float-right md:flex justify-center items-center border-l-2 pl-2 border-slate-400 ">
              {" "}
              <HiPencil size={24} />{" "}
            </span>
            <span className="float-right md:hidden flex justify-center items-center border-l-2 pl-2 border-slate-400 ">
              {" "}
              <HiPencil size={20} />{" "}
            </span>
          </motion.button>
          <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay:0.75 }}
            className={`md:text-sm text-medium font-bold ${
              darkMode ? "text-gray-300" : "text-gray-900"
            } mt-[2%] text-center px-[10%] md:px-0 `}
          >
            Get the best skilled professionals compete for you.
          </motion.div>
        </div>
    </>
  )
}

export default PostRequirement