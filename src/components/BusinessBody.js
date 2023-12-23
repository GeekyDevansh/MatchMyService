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

const BusinessBody = ({ darkMode, sendData, signoutModalIsOpen, setSignoutModalIsOpen }) => {
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
        setLoading(false)
      }
    };
    fetchData();
  }, [request]);

  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-[#242529]" : "bg-white"
        }  flex flex-col justify-center items-center md:h-auto min-h-screen `}
      >
   <div className="flex flex-wrap md:flex-nowrap md:w-[75%] w-[80%] md:gap-10 gap-2 mb-[5%] ">
          <div className={`md:w-[40%] w-full ${signoutModalIsOpen?"z-0":"z-10"}`}>
            <UserBids data={data} darkMode={darkMode} request={request} loading={loading} setLoading={setLoading} signoutModalIsOpen={signoutModalIsOpen} />
          </div>
          <div className={`md:w-[60%] w-full ${signoutModalIsOpen?"z-0":"z-10"}`}>
            <BusinessRequests darkMode={darkMode} request={request} setRequest={setRequest} loading={loading} setLoading={setLoading} signoutModalIsOpen={signoutModalIsOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessBody;
