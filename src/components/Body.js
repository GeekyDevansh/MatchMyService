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
      finally{
        setLoading(false);
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
        closeTimeoutMS={200}
        style={window.screen.width > "768" ? customStyles : customStylesSm}
        contentLabel="Example Modal"
      >
        <ServiceForm setModalIsOpen={setModalIsOpen} setRequest={setRequest} request={request} />
      </Modal>
      <div
        className={` 
        ${
          darkMode ? "bg-neutral-800" : "bg-[#E8E8E8]"
        } 
        flex flex-col justify-center items-center md:h-auto min-h-screen`}
      >

        {!darkMode && <div className=" absolute md:top-[10%] top-[50%] " >
          <img src="/bg-1.png" alt="" className="rotate-[0deg]"  />
        </div>}
         {!darkMode && <div className=" absolute md:top-[10%] top-[160%] md:hidden " >
          <img src="/bg-1.png" alt="" className="rotate-[0deg]"  />
        </div>}
        {darkMode && <div className="absolute md:h-[20%] md:w-[40%] h-[20%] w-[40%] bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d] top-[10%] md:rounded-full rounded-r-full -left-28 overflow-x-hidden z-0" >
        </div>}
        {darkMode && <div className="absolute md:h-[20%] md:w-[40%] h-[20%] w-[20%] bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] top-[55%] md:rounded-full rounded-l-full md:-right-20 -right-0 overflow-x-hidden z-0" >
        </div>}
        {darkMode && <div className="absolute md:h-[20%] md:w-[40%] h-[20%] w-[20%] bg-gradient-to-r from-[#fcb045] to-[#833ab4] md:top-[105%] top-[145%] md:rounded-full rounded-l-full md:-right-20 -right-0 overflow-x-hidden z-0" >
        </div>}
        {darkMode && <div className="absolute md:h-[20%] md:w-[40%] h-[20%] w-[40%] bg-gradient-to-r from-[#c6ffdd] to-[#f7797d] md:top-[155%] bottom-[0%] md:rounded-full rounded-r-full -left-28 overflow-x-hidden z-0 " >
        </div>}
        
        
        <PostRequirement
          setModalIsOpen={setModalIsOpen}
          darkMode={darkMode}
        />
   <div className="flex flex-wrap md:flex-nowrap md:w-[75%] w-[80%] md:gap-10 gap-2 mb-[5%] ">
          <div className="md:w-[40%] w-full">
           <UserRequests data={data} signoutModalIsOpen={signoutModalIsOpen} darkMode={darkMode} request={request} setRequest={setRequest} loading={loading} modalIsOpen={modalIsOpen} />
          </div>
          <div className="md:w-[60%] w-full">
           <AllRequests data={data} darkMode={darkMode} loading={loading} signoutModalIsOpen={signoutModalIsOpen} modalIsOpen={modalIsOpen} />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Body;
