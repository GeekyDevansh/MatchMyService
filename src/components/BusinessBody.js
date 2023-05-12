import React, { useState, useEffect } from "react";
import {
  doc,
  serverTimestamp,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import Modal from "react-modal";
import ServiceForm from "./ServiceForm";
import UserBids from "./UserBids";
import BusinessRequests from "./BusinessRequests";
import PostRequirement from "./PostRequirement";

const BusinessBody = ({ darkMode, sendData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [request, setRequest] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let list = [];
        const dataRef = collection(db, "product_data");
        const q = query(dataRef, orderBy("sendData.created", "desc"));
        console.log("q", q);
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [request]);

  console.log("data", data);

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
        <ServiceForm setModalIsOpen={setModalIsOpen} setRequest={setRequest} request={request} />
      </Modal>
      <div
        className={` ${
          darkMode ? "bg-neutral-800" : "bg-[#E8E8E8]"
        } flex flex-col justify-center items-center md:h-auto min-h-screen `}
      >
   <div className="flex flex-wrap md:flex-nowrap md:w-[75%] w-[80%] md:gap-10 gap-2 mb-[5%] ">
          <div className="md:w-[40%] w-full ">
            <UserBids data={data} setModalIsOpen={setModalIsOpen} darkMode={darkMode} request={request} />
          </div>
          <div className="md:w-[60%] w-full">
            <BusinessRequests darkMode={darkMode} request={request} setRequest={setRequest} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessBody;
