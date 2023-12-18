import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { BsTagFill } from "react-icons/bs";
import { motion, useScroll, useSpring } from "framer-motion";
import { Tooltip } from "react-tippy";
import 'react-tippy/dist/tippy.css'

const AllRequests = ({
  data,
  darkMode,
  loading,
  signoutModalIsOpen,
  modalIsOpen,
}) => {

  return (
    <>
      <div
        className={`flex flex-col gap-4 h-auto max-h-screen overflow-scroll scrollbar-hide rounded-lg ${
          darkMode ? "text-white" : "text-gray-900"
        }  border-y-2 ${darkMode?"border-y-[#37393f]":"border-y-indigo-400"}
         drop-shadow-xl md:p-10 p-4 mt-10`}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center text-2xl font-semibold'
        >
          All Service Requests
        </motion.div>
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <Loading darkMode={darkMode} />
          </div>
        ) : (
          <div >
            {data?.map((e, i) => {
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
                        <div className="md:text-xl text-lg capitalize font-normal ">
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
                          className={`flex justify-between text-gray-900 font-semibold ${
                            darkMode ? "bg-white" : "bg-indigo-300"
                          } p-4 rounded-xl`}
                        >
                          <div className="md:text-lg text-sm flex justify-center items-center gap-1 text-gray-800">
                            {" "}
                            <BsTagFill /> Budget{" "}
                          </div>
                          <div className="md:text-lg text-sm">
                            &#8377; {e.sendData.budget}
                          </div>
                        </div>
                        <div
                          className={`text-gray-900 rounded-xl p-4 ${
                            darkMode ? "bg-white" : "bg-indigo-300"
                          } font-semibold text-sm md:text-base `}
                        >
                          {e.sendData.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  {e.bidding === true && (
                    <div
                      className={` text-gray-900 rounded-xl md:px-6 md:py-3 mt-5 md:text-lg `}
                    >
                      <div className="capitalize">
                        {e.acceptedId === undefined &&
                          e?.bidding_info?.map((e) => {
                            return (
                              <Tooltip
                                title="&#10711; Pending"
                                position="top"
                                trigger="mouseenter"
                                arrow="true"
                              >
                                <div
                                  className={`bg-gradient-to-r from-indigo-100 to-indigo-400 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                                >
                                  <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold">
                                    <h1 className="md:text-base text-sm font-normal text-gray-700">
                                      Bidder Name
                                    </h1>
                                    {e.bidder_name}
                                  </div>
                                  <div className="w-px bg-gray-900"></div>
                                  <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                    <h1 className="md:text-base text-sm text-gray-700 font-normal">
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
                                      className={` bg-gradient-to-r from-green-300 to-green-600 flex justify-between w-full text-gray-900 rounded-xl md:px-6 px-4 md:py-3 py-2 mt-5 md:text-lg text-center `}
                                    >
                                      <div className="flex flex-col md:text-base text-sm w-1/2 pr-2 break-words font-semibold">
                                        <h1 className=" md:text-base text-sm font-normal text-gray-700">
                                          Bidder Name
                                        </h1>
                                        {element?.bidder_name}
                                      </div>
                                      <div className="w-px bg-gray-900"></div>
                                      <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                        <h1 className=" md:text-base text-sm text-gray-700 font-normal ">
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
                                        <h1 className="font-normal md:text-base text-sm text-gray-700">
                                          Bidder Name
                                        </h1>
                                        {element?.bidder_name}
                                      </div>
                                      <div className="w-px bg-gray-900"></div>
                                      <div className="flex flex-col md:text-base text-sm w-1/2 pl-2 font-semibold">
                                        <h1 className="font-normal md:text-base text-sm text-gray-700">
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
                </motion.div>
              );
            })}
          </div>
        )}
        <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         ease: [0, 0.71, 0.2, 1.01]
       }}
          className='flex justify-center items-center font-normal'
        >
          You're all caught up.
        </motion.div>
      </div>
    </>
  );
};

export default AllRequests;
