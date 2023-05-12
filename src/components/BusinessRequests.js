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
} from "firebase/firestore";
import { db } from "../firebase";

const BusinessRequests = ({ darkMode, request, setRequest }) => {
  const [data, setData] = useState();
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const cName = JSON.parse(localStorage.getItem("user")).user.displayName;
  const [biddingPrice, setBiddingPrice] = useState("");

  const handleClick = async (id) => {
    const washingtonRef = doc(db, "product_data", id);
    await updateDoc(washingtonRef, {
      bidding: true,
      bidder_id: user,
      bidding_price: biddingPrice,
      bidder_name: cName,
      bidding_time: serverTimestamp(),
    }).then(() => {
      setRequest(!request);
    });
  };

  const business = JSON.parse(localStorage.getItem("user"))?.user.photoURL;
  console.log(business);

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
        {data != "" ? (
          data
            ?.filter((e, i) => {
              return e.sendData.service_type.toUpperCase() === business.toUpperCase();
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
                          <div className="md:text-lg">Budget</div>
                          <div className="md:text-lg">
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
                  {e.bidding === true && (
                    <div
                      className={`flex justify-between text-gray-900 ${
                        darkMode ? "bg-white" : "bg-[#E8E8E8]"
                      } rounded-xl px-6 py-3 mt-5 md:text-lg `}
                    >
                      <div className="capitalize">
                        <h1 className="font-semibold">Bidder Name</h1>
                        {e.bidder_name}
                      </div>
                      <div>
                        <h1 className="font-semibold">Bid Price</h1>
                        &#8377; {e.bidding_price}
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
                      onClick={() => handleClick(e.id)}
                      className="bg-blue-500 rounded-lg px-8 py-3 mt-5 hover:bg-blue-700 text-white"
                    >
                      Bid
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="flex justify-center items-center">
            {" "}
            No service Requests.{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessRequests;
