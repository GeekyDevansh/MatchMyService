import React from "react";

const AllRequests = () => {
  return (
    <>
      <div className=" flex flex-col gap-4 h-screen overflow-scroll scrollbar-hide rounded-lg text-white border-2 border-white drop-shadow-xl md:p-10 p-4 min-h-[20%] mt-10 ">
        <div className="text-center text-2xl font-semibold" >All Service Requests</div>
        <div className=" bg-black drop-shadow-lg rounded-xl md:p-8 p-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="md:text-xl text-lg" >Devansh</div>
                <div>03 May 2023</div>
              </div>
              <div className="text-gray-300" >8448119914</div>
            </div>

            <div className="flex justify-around ">
              <div className="flex flex-col items-center md:w-20 md:h-20 w-12 h-12">
                <div className="flex flex-col ">
                  <img src="/plumber.gif" alt="" className="rounded-full" />
                </div>
                <div className="font-semibold md:text-normal text-sm" >Plumber</div>
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between text-gray-900 font-semibold bg-white p-4 rounded-xl">
                  <div className="md:text-lg" >Budget</div>
                  <div className="md:text-lg" >&#8377; 6900</div>
                </div>
                <div className="text-gray-900 rounded-xl border-white p-4 bg-white font-semibold text-sm md:text-normal ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis quam suscipit, recusandae veritatis explicabo,
                  adipisci omnis harum ipsa quos dolore, earum iste voluptas
                  voluptates quod at! Aliquam quibusdam quam cum eos? Nostrum
                  doloribus molestias voluptas, illo aperiam, suscipit nemo
                  natus velit odit nesciunt, tempore laborum quidem praesentium
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-black drop-shadow-lg rounded-xl p-8">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="text-xl" >Devansh</div>
                <div>03 May 2023</div>
              </div>
              <div className="text-gray-300" >8448119914</div>
            </div>

            <div className="flex justify-around ">
              <div className="flex flex-col items-center w-20 h-20">
                <div className="flex flex-col ">
                  <img src="/plumber.gif" alt="" className="rounded-full" />
                </div>
                <div className="font-semibold" >Plumber</div>
              </div>
              <div className="flex flex-col gap-2 w-2/3">
                <div className="flex justify-between text-gray-900 font-semibold bg-white p-4 rounded-xl">
                  <div className="text-lg" >Price</div>
                  <div className="text-lg" >&#8377; 6900</div>
                </div>
                <div className="text-gray-900 rounded-xl border-white p-4 bg-white font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis quam suscipit, recusandae veritatis explicabo,
                  adipisci omnis harum ipsa quos dolore, earum iste voluptas
                  voluptates quod at! Aliquam quibusdam quam cum eos? Nostrum
                  doloribus molestias voluptas, illo aperiam, suscipit nemo
                  natus velit odit nesciunt, tempore laborum quidem praesentium
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRequests;
