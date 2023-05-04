import React,{useEffect,useState} from "react";

const AllRequests = ({data}) => {
  return (
    <>
      <div className=" flex flex-col gap-4 h-auto overflow-scroll scrollbar-hide rounded-lg text-white border-2 border-white drop-shadow-xl md:p-10 p-4 mt-10 ">
        <div className="text-center text-2xl font-semibold" >All Service Requests</div>
        {data!=""?data?.map((e,i)=> {return (<div className=" bg-black drop-shadow-lg rounded-xl md:p-8 p-4" key={i} >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="md:text-xl text-lg capitalize " >{e.sendData.customer_name}</div>
                <div>{e.sendData.created_at}</div>
              </div>
              <div className="text-gray-300" >{e.sendData.contact_number}</div>
            </div>

            <div className="flex justify-around ">
              <div className="flex flex-col items-center md:w-20 md:h-20 w-12 h-12">
                <div className="flex flex-col ">
                  <img src={`${e.sendData.service_type==="Plumber"?"/plumber.gif":e.sendData.service_type==="Carpenter"?"/carpenter.gif":e.sendData.service_type==="Electrician"?"/electrician.gif":"/other.gif"}`} alt="" className="rounded-full" />
                </div>
                <div className="font-semibold md:text-normal text-sm" >{e.sendData.service_type}</div>
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between text-gray-900 font-semibold bg-white p-4 rounded-xl">
                  <div className="md:text-lg" >Budget</div>
                  <div className="md:text-lg" >&#8377; {e.sendData.budget}</div>
                </div>
                <div className="text-gray-900 rounded-xl border-white p-4 bg-white font-semibold text-sm md:text-base ">
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
