import React,{useState} from "react";
import { Link } from "react-router-dom";

const UserRequests = ({ data, setModalIsOpen }) => {
  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const openModal=()=>{
    setModalIsOpen(true);
  }

  return (
    <div className=" flex flex-col text-white border-2 border-white rounded-lg text-center gap-4 mt-10 md:p-10 p-4 h-auto overflow-scroll scrollbar-hide ">
      <div className="font-semibold text-2xl">Your Service Requests</div>
      {data
        ?.filter((e) => {
          return e.sendData.user_id === user;
        })
        ?.map((e, i) => {
          return (
            <div
              className=" bg-black drop-shadow-lg rounded-xl p-8 mt-4 "
              key={i}
            >
              <div className="flex flex-col gap-4 items-center">
                <div>{e.sendData.created_at}</div>

                <div>
                  <div className="md:w-28 md:h-28 w-20 h-20 items-center">
                    <img
                      src={`${
                        e.sendData.service_type === "Plumber"
                          ? "/plumber.gif"
                          : e.sendData.service_type === "Carpenter"
                          ? "/carpenter.gif"
                          : e.sendData.service_type === "Electrician"
                          ? "/electrician.gif"
                          : "/other.gif"
                      }`}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="font-semibold md:text-xl text-lg">
                    {e.sendData.service_type}
                  </div>
                </div>

                <div className="flex justify-between w-full text-gray-900 font-semibold bg-white p-4 rounded-xl">
                  <div className="text-lg">Budget</div>
                  <div className="text-lg">&#8377; {e.sendData.budget}</div>
                </div>
                <div className="text-gray-900 rounded-xl border-white p-4 bg-white font-semibold w-full ">
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
