import React,{useEffect,useState} from "react";

const AllRequests = ({data, darkMode}) => {
  return (
    <>
      <div className={`flex flex-col gap-4 h-auto max-h-screen overflow-scroll scrollbar-hide rounded-lg ${darkMode?"text-white":"text-gray-900"} border-2 ${darkMode?"border-white":"border-gray-900"} drop-shadow-xl md:p-10 p-4 mt-10`}>
        <div className="text-center text-2xl font-semibold" >All Service Requests</div>
        {data!=""?data?.map((e,i)=> {return (<div className={` ${darkMode?"bg-black":"bg-white"} drop-shadow-lg rounded-xl mt-4 md:p-8 p-4`} key={i} >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="md:text-xl text-lg capitalize font-medium " >{e.sendData.customer_name}</div>
                <div>{e.sendData.created_at}</div>
              </div>
              <div className={`${darkMode?"text-gray-300":"text-gray-700"} font-normal `} >{e.sendData.contact_number}</div>
            </div>

            <div className="flex justify-around ">
              <div className="flex flex-col items-center md:w-20 md:h-20 w-12 h-12">
                <div className="flex flex-col ">
                  <img src={`${e.sendData.service_type==="Plumber"?"/plumber.png":e.sendData.service_type==="Carpenter"?"/carpenter.png":e.sendData.service_type==="Electrician"?"/electrician.png":"/other.png"}`} alt="" className="rounded-full border-2 border-gray-300 " />
                </div>
                <div className="font-semibold md:text-normal text-sm capitalize " >{e.sendData.service_type}</div>
              </div>
              <div className="flex flex-col gap-4 w-2/3">
                <div className={`flex justify-between text-gray-900 font-semibold ${darkMode?"bg-white":"bg-[#E8E8E8]"} p-4 rounded-xl`}>
                  <div className="md:text-lg" >Budget</div>
                  <div className="md:text-lg" >&#8377; {e.sendData.budget}</div>
                </div>
                <div className={`text-gray-900 rounded-xl p-4 ${darkMode?"bg-white":"bg-[#E8E8E8]"} font-semibold text-sm md:text-base `}>
                {e.sendData.description}
                </div>
              </div>
            </div>
          </div>
        </div>) }  ):(<div className="flex justify-center items-center" > No service Requests. </div> )}
      </div>
    </>
  );
};

export default AllRequests;
