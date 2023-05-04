import React from 'react'
import { HiPencil } from "react-icons/hi";

const PostRequirement = ({setModalIsOpen,darkMode}) => {

    const handleClick = () => {
        setModalIsOpen(true);
      };

  return (
    <>
    <div
          className={` md:w-[75%] w-[80%] ${
            darkMode ? "bg-black" : "bg-white"
          } flex flex-col cursor-pointer items-center my-[5%] pb-10 border-2 border-dashed ${
            darkMode ? "border-white" : "border-gray-900"
          } rounded-xl text-white gap-2 md:gap-0 drop-shadow-2xl`}
          onClick={handleClick}
        >
          {darkMode ? (
            <div>
              <img
                src="/postRequirement.gif"
                alt="img"
                className="md:w-32 md:h-32 w-24 h-24 md:mt-[15%] mt-[50%] "
              />
            </div>
          ) : (
            <div>
              <img
                src="/postRequirementLight.gif"
                alt="img"
                className="md:w-32 md:h-32 w-24 h-24 md:mt-[15%] mt-[50%] "
              />
            </div>
          )}

          <button className="md:px-4 px-2 text-white text-sm md:text-base font-black bg-blue-700 hover:bg-blue-800 rounded-md md:h-14 h-12 md:drop-shadow-xl drop-shadow-lg ">
            <span className="pr-2"> POST REQUIREMENT </span>{" "}
            <span className=" hidden float-right md:flex justify-center items-center border-l-2 pl-2 border-slate-400 ">
              {" "}
              <HiPencil size={24} />{" "}
            </span>
            <span className="float-right md:hidden flex justify-center items-center border-l-2 pl-2 border-slate-400 ">
              {" "}
              <HiPencil size={20} />{" "}
            </span>
          </button>
          <div
            className={`md:text-sm text-medium font-bold ${
              darkMode ? "text-gray-300" : "text-gray-900"
            } mt-[2%] text-center px-[10%] md:px-0 `}
          >
            Get the best skilled professionals compete for you.
          </div>
        </div>
    </>
  )
}

export default PostRequirement