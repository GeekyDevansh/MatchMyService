import "../index.css"
import React, { useEffect, useState } from "react";
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
  where,
  FieldValue,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";
import Loading from "./Loading";
import { BsTagFill } from "react-icons/bs";
import { motion} from "framer-motion";
import { Tooltip } from "react-tippy";
import toast from "react-hot-toast";
import 'react-tippy/dist/tippy.css'

const BusinessRequests = ({
  darkMode,
  request,
  setRequest,
  loading,
  setLoading,
  modalIsOpen,
  signoutModalIsOpen,
}) => {
  const [data, setData] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const cName = JSON.parse(localStorage.getItem("user")).user.displayName;
  const [biddingPrice, setBiddingPrice] = useState("");
  
  const handleClick = async (req_id) => {
    setLoading(true);
    const entry = {
      bidding_price: biddingPrice,
      bidder_name: cName,
      bidder_id: user,
      req_id: req_id,
    };
    const washingtonRef = doc(db, "product_data", req_id);
    await updateDoc(washingtonRef, {
      bidding: true,
      bidding_info: arrayUnion(entry),
      bidder_id: arrayUnion(user),
      bidding_time: serverTimestamp(),
    })
    .then(() => {
      setRequest(!request);
    })
    .finally(() => {
      setLoading(false);
    });
  };
  
  const business = JSON.parse(localStorage.getItem("user"))?.user.photoURL;
  
  
  
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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [request]);
  
   
  
  return (
    <>
      <div
        className={`flex flex-col gap-4 h-auto max-h-screen overflow-scroll scrollbar-hide rounded-lg ${
          darkMode ? "text-white" : "text-gray-900"
        } border-y-2 ${darkMode?"border-y-[#37393f]":"border-y-indigo-400"} drop-shadow-xl md:p-10 p-4 mt-10`}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={` ${
            modalIsOpen || signoutModalIsOpen ? "z-0" : "z-10"
          } text-center text-2xl font-semibold`}
        >
          All Service Requests
        </motion.div>
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <Loading darkMode={darkMode} />{" "}
          </div>
        ) : (
          <div>
            {data
              ?.filter((e, i) => {
                return (
                  e.sendData.service_type.toUpperCase() ===
                  business.toUpperCase()
                );
              })
              ?.map((e, i) => {
                return (
                  <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                    className={` ${
                      darkMode ? "bg-[#37393f]" : "bg-[#f8f9fb]"
                    } drop-shadow-lg rounded-xl mt-4 md:p-8 p-4 ${darkMode?"border-l-4" : "border-l-0"} border-[#6fa1d6] `}
                    key={i}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <div className="md:text-xl text-lg capitalize font-medium ">
                            {e.sendData.customer_name}
                          </div>
                          <div>{e.sendData.created_at}</div>
                        </div>
                        <div
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          } font-normal `}
                        >
                          {e.sendData.contact_number}
                        </div>
                      </div>

                      <div className="flex justify-around ">
                        <div className="flex flex-col items-center md:w-20 md:h-20 w-12 h-12">
                          <div className="flex flex-col ">
                            <img
                              src={`${
                                e.sendData.service_type === "Plumber"
                                  ? "/plumbers.webp"
                                  : e.sendData.service_type === "Carpenter"
                                  ? "/carpenters.webp"
                                  : e.sendData.service_type === "Electrician"
                                  ? "/electricians.webp"
                                  : "/others.webp"
                              }`}
                              alt=""
                              className="rounded-full border-2 border-gray-300 "
                            />
                          </div>
                          <div className="font-semibold md:text-normal text-sm capitalize ">
                            {e.sendData.service_type}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 w-2/3">
                          <div
                            className={`flex justify-between ${darkMode?"text-gray-900":"text-[#f8f9fb]"} font-semibold ${
                              darkMode ? "bg-white" : "bg-[#3547ac]"
                            } p-4 rounded-xl`}
                          >
                            <div className="md:text-lg text-sm flex justify-center items-center gap-1 ">
                              {" "}
                              <BsTagFill /> Budget
                            </div>
                            <div className="md:text-lg text-sm">
                              &#8377; {e.sendData.budget}
                            </div>
                          </div>
                          <div
                            className={`${darkMode?"text-gray-900":"text-[#f8f9fb]"} rounded-xl p-4 ${
                              darkMode ? "bg-white" : "bg-[#3547ac]"
                            } font-semibold text-sm md:text-base `}
                          >
                            {e.sendData.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    {e?.bidding === true && (
                      <div
                        className={` text-gray-900 rounded-xl md:px-6 md:py-3 mt-5 md:text-lg `}
                      >
                        <div className="capitalize">
                          {e.acceptedId === undefined &&
                            e.bidding_info?.map((e) => {
                              return (
                                <Tooltip
                                title="&#10711; Pending"
                                position="top"
                                trigger="mouseenter"
                                arrow="true"
                              >
                                <div
                                  className={` bg-gradient-to-r from-[#ffffff] to-[#8a9cd6] flex justify-between w-full text-gray-900 rounded-xl px-4 md:px-6 py-3 mt-5 md:text-lg text-center `}
                                >
                                  <div className="flex flex-col w-1/2 break-words font-semibold md:text-base text-sm ">
                                    <h1 className="text-gray-700 font-normal md:text-base text-sm">
                                      Bidder Name
                                    </h1>
                                    {e.bidder_name}
                                  </div>
                                  <div className="w-px bg-gray-900"></div>
                                  <div className="flex flex-col w-1/2 font-semibold md:text-base text-sm ">
                                    <h1 className="text-gray-700 md:text-base text-sm font-normal">
                                      Bidding price
                                    </h1>
                                    &#8377; {e.bidding_price}
                                  </div>
                                </div>
                                </Tooltip>
                              );
                            })}
                          {e.acceptedId !== undefined &&
                            e?.bidding_info
                              ?.filter((f) => {
                                return f?.bidder_id === e?.acceptedId;
                              })
                              ?.map((element) => {
                                return (
                                  <div>
                                     <Tooltip
                                    title="&#10004; Accepted"
                                    position="top"
                                    trigger="mouseenter"
                                    arrow="true"
                                  >
                                    <div
                                      className={` bg-gradient-to-r from-green-300 to-green-600 flex justify-between w-full text-gray-900 rounded-xl px-4 md:px-6 py-3 mt-5 md:text-lg text-center `}
                                    >
                                      <div className="flex flex-col w-1/2 break-words font-semibold md:text-base text-sm ">
                                        <h1 className="font-normal text-gray-700 md:text-base text-sm">
                                          Bidder Name
                                        </h1>
                                        {element?.bidder_name}
                                      </div>
                                      <div className="w-px bg-gray-900"></div>
                                      <div className="flex flex-col w-1/2 font-semibold md:text-base text-sm ">
                                        <h1 className="font-normal text-gray-700 md:text-base text-sm ">
                                          Bidding price
                                        </h1>
                                        &#8377; {element?.bidding_price}
                                      </div>
                                    </div>
                                    </Tooltip>
                                  </div>
                                );
                              })}
                          {e.acceptedId !== undefined &&
                            e?.bidding_info
                              ?.filter((f) => {
                                return f.bidder_id !== e?.acceptedId;
                              })
                              ?.map((element) => {
                                return (
                                  <div>
                                     <Tooltip
                                    title="&#10006; Rejected"
                                    position="top"
                                    trigger="mouseenter"
                                    arrow="true"
                                  >
                                    <div
                                      className={` bg-gradient-to-r from-red-300 to-red-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                                    >
                                      <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold">
                                        <h1 className="font-normal text-gray-700 md:text-base text-sm">
                                          Bidder Name
                                        </h1>
                                        {element?.bidder_name}
                                      </div>
                                      <div className="w-px bg-gray-900"></div>
                                      <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                        <h1 className="font-normal text-gray-700 md:text-base text-sm ">
                                          Bidding price
                                        </h1>
                                        &#8377; {element?.bidding_price}
                                      </div>
                                    </div>
                                    </Tooltip>
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <div className="w-1/2">
                        <input
                          type="number"
                          min="500"
                          max="500000"
                          id="ip"
                          required={true}
                          placeholder="Bid Amount"
                          onChange={(e) => setBiddingPrice(e.target.value)}
                          className=" rounded-lg px-3 py-3 mt-5 w-full text-gray-900 font-semibold border-2 border-gray-800 "
                        />
                      </div>
                      <button
                        onClick={() => {
                          if(biddingPrice!="")
                          handleClick(e.id)
                        else{toast.error("Please add the bid amount");}
                        }}
                        className="bg-blue-700 disabled:bg-gray-600 rounded-lg px-8 py-3 mt-5 hover:bg-blue-600 text-white text-lg font-semibold"
                        disabled={
                          e.acceptedId !== undefined ||
                          e?.bidder_id?.includes(user)
                        }
                      >
                        Bid
                      </button>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        )}
        <motion.div initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
          className={` ${
            modalIsOpen || signoutModalIsOpen ? "z-0" : "z-10"
          } flex justify-center items-center font-normal`}
        >
          You're all caught up.
        </motion.div>
      </div>
    </>
  );
};

export default BusinessRequests;
