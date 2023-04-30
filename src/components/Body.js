import React,{useState} from "react";
import { HiPencil } from "react-icons/hi";
import Modal from "react-modal";
import ServiceForm from "./ServiceForm";

const Body = ({ darkMode }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const handleClick = () => {
    setModalIsOpen(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxHeight:"98%",
      overflowY:"auto",
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
      maxWidth:"90%",
      borderWidth:"1px",
      borderColor:"gray",
      borderRadius: "15px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        style={window.screen.width > "768" ? customStyles : customStylesSm}
        contentLabel="Example Modal"
      >
      <ServiceForm setModalIsOpen={setModalIsOpen} />
      
        
      </Modal>
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
