import React from "react";
import { HiPencil } from "react-icons/hi";

const Body = ({ darkMode }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div
        className={`h-screen ${
          darkMode ? "bg-neutral-800" : "bg-[#E8E8E8]"
        } flex justify-center`}
      >
        <div
          className={`md:w-2/3 w-[80%] ${
            darkMode ? "bg-black" : "bg-white"
          } flex flex-col cursor-pointer items-center md:mt-[10%] mt-[30%] h-2/5 border-2 border-dashed ${
            darkMode ? "border-white" : "border-gray-900"
          } rounded-xl text-white gap-2 md:gap-0 drop-shadow-2xl`}
          onClick={handleClick}
        >
          {darkMode ? (
            <div>
              <img
                src="/postRequirement.gif"
                alt="img"
                className="md:w-28 md:h-28 w-24 h-24 md:mt-[15%] md:mb-[15%] mt-[50%] ml-4 "
              />
            </div>
          ) : (
            <div>
              <img
                src="/postRequirementLight.gif"
                alt="img"
                className="md:w-28 md:h-28 w-24 h-24 md:mt-[15%] md:mb-[15%] mt-[50%] "
              />
            </div>
          )}

          <button className="md:px-4 px-2 text-white text-sm md:text-base font-black bg-blue-700 hover:bg-blue-800 rounded-md md:h-[20%] h-[15%] md:drop-shadow-xl drop-shadow-lg ">
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
      </div>
    </>
  );
};

export default Body;
