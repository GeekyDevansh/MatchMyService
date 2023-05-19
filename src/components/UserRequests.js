import React, { useState, useEffect } from "react";
import {BsTagFill} from "react-icons/bs";
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
import Loading from "../components/Loading";

const UserRequests = ({
  setModalIsOpen,
  darkMode,
  request,
  setRequest,
  loading,
  signoutModalIsOpen,
  modalIsOpen
}) => {
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const openModal = () => {
    setModalIsOpen(true);
  };

  console.log(signoutModalIsOpen);
  console.log(modalIsOpen);

  // const [request, setRequest] = useState(false);
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

  const handleAccept = async (bidderId, req_id) => {
    const washingtonRef = doc(db, "product_data", req_id);
    await updateDoc(washingtonRef, {
      acceptedId: bidderId,
    }).then(() => {
      setRequest(!request);
    });
  };

  return (
    <div
      className={`flex flex-col ${
        darkMode ? "text-white" : "text-gray-900"
      } border-2 ${
        darkMode ? "border-white" : "border-gray-900"
      } rounded-lg text-center gap-4 mt-10 md:p-10 p-4 h-auto max-h-screen overflow-scroll scrollbar-hide`}
    >
      <div className={`${signoutModalIsOpen || modalIsOpen?"z-0":"z-10"} font-semibold text-2xl`}>Your Service Requests</div>
      {loading?(<div className="flex justify-center items-center" > <Loading darkMode={darkMode} /> </div> ):(
        <div>
          {data
            ?.filter((e) => {
              return e?.sendData?.user_id === user;
            })
            ?.map((e, i) => {
              return (
                <div
                  className={` ${
                    darkMode ? "bg-black" : "bg-white"
                  } drop-shadow-lg rounded-xl p-8 mt-4 `}
                  key={i}
                >
                  <div className="flex flex-col gap-4 items-center">
                    <div>{e?.sendData?.created_at}</div>

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
                        {e?.sendData?.service_type}
                      </div>
                    </div>

                    <div
                      className={`flex justify-between w-full text-gray-900 font-semibold ${
                        darkMode ? "bg-white" : "bg-[#E8E8E8]"
                      } p-4 rounded-xl`}
                    >
                      <div className="md:text-lg  flex justify-center items-center gap-1 "> <BsTagFill/> Budget</div>
                      <div className="md:text-lg ">&#8377; {e.sendData.budget}</div>
                    </div>
                    <div
                      className={`text-gray-900 rounded-xl border-white p-4 ${
                        darkMode ? "bg-white" : "bg-[#E8E8E8]"
                      } font-semibold w-full`}
                    >
                      {e?.sendData?.description}
                    </div>
                  </div>
                  {e.acceptedId === undefined &&
                    e?.bidding_info?.map((element) => {
                      return (
                        <div>
                          <div
                            className={` bg-gradient-to-r from-blue-100 to-blue-400 flex justify-between w-full text-gray-900 rounded-t-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                          >
                            <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize ">
                              <h1 className="font-normal text-gray-700 md:text-base text-sm">
                                Bidder Name
                              </h1>
                              {element?.bidder_name}
                            </div>
                            <div className="w-0.5 bg-gray-500"></div>
                            <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                              <h1 className="font-normal text-gray-700 md:text-base text-sm ">
                                Bidding price
                              </h1>
                              &#8377; {element?.bidding_price}
                            </div>
                          </div>

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
                            <div
                              className={` bg-gradient-to-r from-green-300 to-green-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                            >
                              <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize">
                                <h1 className="font-normal text-gray-700 md:text-base text-sm">
                                  Bidder Name
                                </h1>
                                {element?.bidder_name}
                              </div>
                              <div className="w-0.5 bg-gray-500"></div>
                              <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                <h1 className="font-normal text-gray-700 md:text-base text-sm ">
                                  Bidding price
                                </h1>
                                &#8377; {element?.bidding_price}
                              </div>
                            </div>
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
                            <div
                              className={` bg-gradient-to-r from-red-300 to-red-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                            >
                              <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold capitalize">
                                <h1 className="font-normal text-gray-700 md:text-base text-sm">
                                  Bidder Name
                                </h1>
                                {element?.bidder_name}
                              </div>
                              <div className="w-0.5 bg-gray-500"></div>
                              <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                <h1 className="font-normal text-gray-700 md:text-base text-sm ">
                                  Bidding price
                                </h1>
                                &#8377; {element?.bidding_price}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              );
            })}
        </div>
      )}
      <div className={`md:block flex flex-col ${signoutModalIsOpen || modalIsOpen?"z-0":"z-10"}`}>
        Need some service?{" "}
        <span onClick={openModal} className="cursor-pointer font-semibold">
          {" "}
          Post your requirement.
        </span>
      </div>
    </div>
  );
};

export default UserRequests;
