import React,{useState} from "react";
import { Link } from "react-router-dom";

const UserRequests = ({ data, setModalIsOpen, darkMode }) => {
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const openModal=()=>{
    setModalIsOpen(true);
  }

  return (
    <div className={`flex flex-col ${darkMode?"text-white":"text-gray-900"} border-2 ${darkMode?"border-white":"border-gray-900"} rounded-lg text-center gap-4 mt-10 md:p-10 p-4 h-auto max-h-screen overflow-scroll scrollbar-hide`}>
      <div className="font-semibold text-2xl">Your Service Requests</div>
      {data
        ?.filter((e) => {
          return e.sendData.user_id === user;
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
            </div>
          );
        })}
        <div className="md:block flex flex-col" >
         Need some service?  <span onClick={openModal} className="cursor-pointer font-semibold" > Post your requirement.</span>
        </div>
    </div>
  );
};

export default UserRequests;
