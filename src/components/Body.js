import React, { useState } from "react";
import Modal from "react-modal";
import ServiceForm from "./ServiceForm";
import UserRequests from "./UserRequests";
import AllRequests from "./AllRequests";
import PostRequirement from "./PostRequirement";

const Body = ({ darkMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxHeight: "98%",
      overflowY: "auto",
      borderWidth: "1px",
      borderColor: "gray",
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
      maxWidth: "90%",
      borderWidth: "1px",
      borderColor: "gray",
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
        className={` ${
          darkMode ? "bg-neutral-800" : "bg-[#E8E8E8]"
        } flex flex-col justify-center items-center`}
      >
        <div className="flex flex-wrap md:flex-nowrap md:w-[75%] w-[80%] gap-10 ">
          <div className="md:w-[40%]">
            <UserRequests />
          </div>
          <div className="md:w-[60%]">
            <AllRequests />
          </div>
        </div>
        

        <PostRequirement setModalIsOpen={setModalIsOpen} darkMode={darkMode} />
        
        
      </div>
    </>
  );
};

export default Body;
