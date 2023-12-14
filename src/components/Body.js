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
import UserRequests from "./UserRequests";
import AllRequests from "./AllRequests";
import PostRequirement from "./PostRequirement";
import Loading from "./Loading";

const Body = ({ darkMode, sendData, signoutModalIsOpen, setSignoutModalIsOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [request, setRequest] = useState(false);
  const [data, setData] = useState();
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let list = [];
        const dataRef = collection(db, "product_data");
        const q = query(dataRef, orderBy("sendData.created", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, [request]);

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
        closeTimeoutMS={200}
        style={window.screen.width > "768" ? customStyles : customStylesSm}
        contentLabel="Example Modal"
      >
        <ServiceForm setModalIsOpen={setModalIsOpen} setRequest={setRequest} request={request} />
      </Modal>
      <div
        className={` 
        ${
          darkMode ? "bg-stone-800" : "bg-gray-200"
        } 
        flex flex-col justify-center items-center md:h-auto min-h-screen`}
      >        
        <PostRequirement
          setModalIsOpen={setModalIsOpen}
          darkMode={darkMode}
        />
   <div className="flex flex-wrap md:flex-nowrap md:w-[75%] w-[80%] md:gap-10 gap-2 mb-[5%] ">
          <div className='md:w-[40%] w-full'>
           <UserRequests data={data} signoutModalIsOpen={signoutModalIsOpen} darkMode={darkMode} request={request} setRequest={setRequest} loading={loading} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
          </div>
          <div className='md:w-[60%] w-full'>
           <AllRequests data={data} darkMode={darkMode} loading={loading} signoutModalIsOpen={signoutModalIsOpen} modalIsOpen={modalIsOpen} />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Body;
