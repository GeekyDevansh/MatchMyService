import React, { useState, useEffect } from "react";
import { BsTagFill } from "react-icons/bs";
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";

const UserRequests = ({
  setModalIsOpen,
  darkMode,
  request,
  setRequest,
  loading,
  signoutModalIsOpen,
  modalIsOpen,
}) => {
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const openModal = () => {
    setModalIsOpen(true);
  };

  // const [request, setRequest] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, [request]);

  const handleAccept = async (bidderId, req_id) => {
    const washingtonRef = doc(db, "product_data", req_id);
    await updateDoc(washingtonRef, {
      acceptedId: bidderId,
    }).then(() => {
      setRequest(!request);
    });
  };

  const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
  const [deleteId,setDeleteId] = useState("");

  const handleDelete = (id)=>{
    setDeleteModalIsOpen(true);
    setDeleteId(id);
  }
  console.log(deleteId);
  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };

  const handleDeleteRequest = async ()=>{
    try {
     await deleteDoc(doc(db,"product_data",deleteId));
       console.log(`Document with ID '${deleteId}' successfully deleted.`);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
    setDeleteModalIsOpen(false);
    window.location.reload();
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "40%",
      width: "50%",
      borderWidth: "1px",
      borderColor: "gray",
      borderRadius: "15px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor:"#FFFFFF",
      overflowY:"hidden"
    },
  };
  const customStylesSm = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "25%",
      width: "90%",
      borderWidth: "1px",
      borderColor: "gray",
      borderRadius: "15px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      overflowY:"hidden"
    },
  };

  return (
    <>
    <Modal
        isOpen={deleteModalIsOpen}
        closeTimeoutMS={200}
        style={window.screen.width > "768" ? customStyles : customStylesSm}
        contentLabel="Example Modal"
        >
        {loading ? (
          <div className="flex justify-end items-center overflow-y-hidden h-full w-full md:w-[60%] md:ml-[20%] ">
            {" "}
            <Loading />{" "}
          </div>
        ) : (
          <div className="flex md:bg-white md:justify-center items-center rounded-xl p-2 m-1 md:mr-4 h-full">
            <div className="flex justify-center items-center w-[40%]  ">
              <img src="/delete.svg" alt="" />
            </div>
            <div className="w-[60%] flex justify-center items-center ">
              <div className="flex flex-col gap-10">
                <div className="md:text-xl text-base font-medium text-right ">
                  
                Are you sure you want to <span className="font-black">Delete</span> the service request?
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    className="md:px-6 md:py-2 px-3 py-2 text-xs md:text-base text-white font-extrabold bg-gray-500 hover:bg-gray-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
                    onClick={closeModal}
                    >
                    Cancel
                  </button>
                  <button
                    className="md:px-6 md:py-2 px-3 py-2 text-xs md:text-base text-white font-extrabold bg-red-500 hover:bg-red-600 rounded-lg md:drop-shadow-xl drop-shadow-lg"
                    onClick={handleDeleteRequest}
                    >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    <div
      className={`flex flex-col ${
        darkMode ? "text-white" : "text-[#f1f2f9]"
      } rounded-lg text-center gap-4 mt-10 md:p-10 p-4 h-auto max-h-screen overflow-scroll scrollbar-hide border-y-2 ${darkMode?"border-y-[#37393f]":"border-y-indigo-400"} `}
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className= {`font-semibold text-2xl ${darkMode?"text-white":"text-gray-900"}`}
      >
        Your Service Requests
      </motion.div>
      {loading ? (
        <div className="flex justify-center items-center ">
          {" "}
          <Loading darkMode={darkMode} />{" "}
        </div>
      ) : (
        <div>
          {data
            ?.filter((e) => {
              return e?.sendData?.user_id === user;
            })
            ?.map((e, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className={` ${
                    darkMode ? "bg-[#37393f]" : "bg-[#3547ac]"
                  } drop-shadow-lg rounded-xl p-8 mt-4 ${darkMode?"border-l-4":"border-l-0"} border-orange-500 `}
                  key={i}
                >
                    <div className="flex justify-between mb-4">
                      <div>{e?.sendData?.created_at}</div>
                      <div className="flex cursor-pointer rounded-full" onClick={()=>handleDelete(e.id)}>
                        <MdDelete size={20} />
                      </div>
                    </div>
                  <div className="flex flex-col gap-4 items-center ">

                    <div>
                      <div className="md:w-28 md:h-28 w-20 h-20 items-center">
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
                          className="rounded-full  border-2 border-gray-300 "
                        />
                      </div>
                      <div className="font-semibold md:text-xl text-lg capitalize ">
                        {e?.sendData?.service_type}
                      </div>
                    </div>

                    <div
                      className={`flex justify-between w-full text-gray-900 font-semibold ${
                        darkMode ? "bg-white" : "bg-[#f1f2f9]"
                      } p-4 rounded-xl`}
                    >
                      <div className="md:text-lg  flex justify-center items-center gap-1 ">
                        {" "}
                        <BsTagFill /> Budget
                      </div>
                      <div className="md:text-lg ">
                        &#8377; {e.sendData.budget}
                      </div>
                    </div>
                    <div
                      className={`text-gray-900 rounded-xl border-white p-4 ${
                        darkMode ? "bg-white" : "bg-[#f1f2f9]"
                      } font-semibold w-full`}
                    >
                      {e?.sendData?.description}
                    </div>
                  </div>
                  {e.acceptedId === undefined &&
                    e?.bidding_info?.map((element) => {
                      return (
                        <div>
                          <Tooltip
                            title="&#10711; Pending"
                            position="top"
                            trigger="mouseenter"
                            arrow="true"
                          >
                            <div
                              className={` bg-gradient-to-r from-blue-100 to-blue-400 flex justify-between w-full text-gray-900 rounded-t-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                            >
                              <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize ">
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
                          <div className="flex ">
                            <div
                              className="w-full bg-green-500 hover:bg-green-600 rounded-b-xl py-1 font-semibold text-sm text-white cursor-pointer "
                              onClick={() => {
                                handleAccept(
                                  element?.bidder_id,
                                  element?.req_id
                                );
                              }}
                            >
                              Accept
                            </div>
                          </div>
                        </div>
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
                                className={` bg-gradient-to-r from-green-300 to-green-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                              >
                                <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize">
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
                                <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize">
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
                </motion.div>
              );
            })}
        </div>
      )}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`md:block flex flex-col ${darkMode?"text-white":"text-gray-900"} `}
      >
        Need some service?{" "}
        <span onClick={openModal} className="cursor-pointer font-semibold">
          {" "}
          Post your requirement.
        </span>
      </motion.div>
    </div>
  </>
  );
};

export default UserRequests;
