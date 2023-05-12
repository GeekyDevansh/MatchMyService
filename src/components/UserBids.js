import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
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

const UserRequests = ({ setModalIsOpen, darkMode, request }) => {
  const [data, setData] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const openModal=()=>{
    setModalIsOpen(true);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let list = [];
        const dataRef = collection(db, "product_data");
        const q = query(dataRef, orderBy("bidding_time", "desc"));
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

  return (
    <div className={`flex flex-col ${darkMode?"text-white":"text-gray-900"} border-2 ${darkMode?"border-white":"border-gray-900"} rounded-lg text-center gap-4 mt-10 md:p-10 p-4 h-auto max-h-screen overflow-scroll scrollbar-hide`}>
      <div className="font-semibold text-2xl">Your Bids</div>
      {data
        ?.filter((e) => {
          return e.bidder_id === user;
        })
        ?.map((e, i) => {
          return (
            <div
              className={` ${darkMode?"bg-black":"bg-white"} drop-shadow-lg rounded-xl p-8 mt-4 `}
              key={i}
            >
              <div className="flex flex-col gap-4 items-center">
                <div>{e.sendData.created_at}</div>

                <div>
                  <div className="md:w-28 md:h-28 w-20 h-20 items-center">
                    <img
                      src={`${
                        e.sendData.service_type === "Plumber"
                          ? "/plumber.png"
                          : e.sendData.service_type === "Carpenter"
                          ? "/carpenter.png"
                          : e.sendData.service_type === "Electrician"
                          ? "/electrician.png"
                          : "/other.png"
                      }`}
                      alt=""
                      className="rounded-full  border-2 border-gray-300 "
                    />
                  </div>
                  <div className="font-semibold md:text-xl text-lg capitalize ">
                    {e.sendData.service_type}
                  </div>
                </div>

                <div className={`flex justify-between w-full text-gray-900 font-semibold ${darkMode?"bg-white":"bg-[#E8E8E8]"} p-4 rounded-xl`}>
                  <div className="text-lg">Budget</div>
                  <div className="text-lg">&#8377; {e.sendData.budget}</div>
                </div>
                <div className={`text-gray-900 rounded-xl border-white p-4 ${darkMode?"bg-white":"bg-[#E8E8E8]"} font-semibold w-full`}>
                  {e.sendData.description}
                </div>
              </div>
              {e.bidding===true && <div className={`flex justify-between text-gray-900 ${darkMode?"bg-white":"bg-[#E8E8E8]"} rounded-xl px-6 py-3 mt-5 md:text-lg font-semibold `} >
                    <div>
                        
                        <h1>Your Bid</h1>
                    </div>
                    <div>
                   
                    &#8377; {e.bidding_price}
                    </div>
                </div>}
            </div>
            
          );
        })}
         <div className="md:block flex flex-col" >
         Need some work?  <span className="font-semibold" > Start Bidding.</span>
        </div>
    </div>
  );
};

export default UserRequests;
