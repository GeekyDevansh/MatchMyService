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
import {BsTagFill} from "react-icons/bs";

const BusinessRequests = ({ darkMode, request, setRequest, loading,setLoading }) => {
  const [data, setData] = useState();
  
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const cName = JSON.parse(localStorage.getItem("user")).user.displayName;
  const [biddingPrice, setBiddingPrice] = useState("");

  
  const handleClick = async (req_id) => {
    setLoading(true);
    const entry = { bidding_price: biddingPrice, bidder_name: cName,   bidder_id: user, req_id:req_id };
    const washingtonRef = doc(db, "product_data", req_id);
    await updateDoc(washingtonRef, {
      bidding: true,
      bidding_info: arrayUnion(entry),
      bidder_id:arrayUnion(user),
      bidding_time: serverTimestamp(),
    })
    .then(() => {
      setRequest(!request);
    })
    .finally(()=>{
      setLoading(false);
    })
  };

  const business = JSON.parse(localStorage.getItem("user"))?.user.photoURL;
  console.log(business);

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

  return (
    <>
      <div
        className={`flex flex-col gap-4 h-auto max-h-screen overflow-scroll scrollbar-hide rounded-lg ${
          darkMode ? "text-white" : "text-gray-900"
        } border-2 ${
          darkMode ? "border-white" : "border-gray-900"
        } drop-shadow-xl md:p-10 p-4 mt-10`}
      >
        <div className="text-center text-2xl font-semibold">
          All Service Requests
        </div>
       {loading?(<div className="flex justify-center items-center" > <Loading darkMode={darkMode} /> </div>):( <div>

        
        {
          data
            ?.filter((e, i) => {
              return (
                e.sendData.service_type.toUpperCase() === business.toUpperCase()
              );
            })
            ?.map((e, i) => {
              return (
                <div
                  className={` ${
                    darkMode ? "bg-black" : "bg-white"
                  } drop-shadow-lg rounded-xl mt-4 md:p-8 p-4`}
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
                                ? "/plumber.png"
                                : e.sendData.service_type === "Carpenter"
                                ? "/carpenter.png"
                                : e.sendData.service_type === "Electrician"
                                ? "/electrician.png"
                                : "/other.png"
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
                          className={`flex justify-between text-gray-900 font-semibold ${
                            darkMode ? "bg-white" : "bg-[#E8E8E8]"
                          } p-4 rounded-xl`}
                        >
                          <div className="md:text-lg text-sm flex justify-center items-center gap-1 "> <BsTagFill/> Budget</div>
                          <div className="md:text-lg text-sm">
                            &#8377; {e.sendData.budget}
                          </div>
                        </div>
                        <div
                          className={`text-gray-900 rounded-xl p-4 ${
                            darkMode ? "bg-white" : "bg-[#E8E8E8]"
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
                        {e.acceptedId===undefined && e.bidding_info?.map((e) => {
                          return (
                            <div
                              className={`bg-gradient-to-r from-blue-100 to-blue-400 flex justify-between w-full text-gray-900 rounded-xl px-6 py-3 mt-5 md:text-lg text-center `}
                            >
                              <div className="flex flex-col w-1/2 break-words">
                                <h1 className="font-semibold">Bidder Name</h1>
                                {e.bidder_name}
                              </div>
                              <div className="w-px bg-gray-500" >

                              </div>
                              <div className="flex flex-col w-1/2">
                                <h1 className="font-semibold">Bidding price</h1>
                                &#8377; {e.bidding_price}
                              </div>
                            </div>
                          );
                        })}
                        {e.acceptedId!==undefined && e?.bidding_info?.filter((f)=>{return f?.bidder_id===e?.acceptedId})?.map((element) => {
                  return (
                    <div>
                      <div
                        className={` bg-gradient-to-r from-green-300 to-green-600 flex justify-between w-full text-gray-900 rounded-xl px-4 md:px-6 py-3 mt-5 md:text-lg text-center `}
                      >
                        <div className="flex flex-col w-1/2 break-words">
                          <h1 className="font-semibold md:text-base text-sm">
                            Bidder Name
                          </h1>
                          {element?.bidder_name}
                        </div>
                        <div className="w-0.5 bg-gray-500"></div>
                        <div className="flex flex-col w-1/2 ">
                          <h1 className="font-semibold md:text-base text-sm ">
                            Bidding price
                          </h1>
                          &#8377; {element?.bidding_price}
                        </div>
                      </div>
                    </div>
                  );
                })}
                  {e.acceptedId!==undefined && e?.bidding_info?.filter((f)=>{return f.bidder_id!==e?.acceptedId})?.map((element) => {
                  return (
                    <div>
                      <div
                        className={` bg-gradient-to-r from-red-300 to-red-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                      >
                        <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words">
                          <h1 className="font-semibold md:text-base text-sm">
                            Bidder Name
                          </h1>
                          {element?.bidder_name}
                        </div>
                        <div className="w-0.5 bg-gray-500"></div>
                        <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 ">
                          <h1 className="font-semibold md:text-base text-sm ">
                            Bidding price
                          </h1>
                          &#8377; {element?.bidding_price}
                        </div>
                      </div>
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
                            onClick={()=>{handleClick(e.id)}}
                            className="bg-blue-700 disabled:bg-gray-600 rounded-lg px-8 py-3 mt-5 hover:bg-blue-600 text-white text-lg font-semibold"
                            disabled={e.acceptedId!==undefined || e?.bidder_id?.includes(user)}
                          >
                            Bid
                          </button>
                        </div>
                      
                </div>
              );
            })
        }
        </div>)}
        <div className="flex justify-center items-center font-medium">
          You're all caught up.
        </div>
      </div>
    </>
  );
};

export default BusinessRequests;
