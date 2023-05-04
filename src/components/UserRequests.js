import React from 'react'

const UserRequests = () => {
  return (
    <div className=' text-white border-2 border-white rounded-lg text-center  mt-10 md:p-10 p-4 h-screen overflow-scroll scrollbar-hide ' >
      
     <div className='font-semibold text-2xl' >Your Service Requests</div> 
     <div className=" bg-black drop-shadow-lg rounded-xl p-8 mt-4 ">
          <div className="flex flex-col gap-4 items-center">
            
                
                <div>03 May 2023</div>
              
              <div>

                <div className='md:w-28 md:h-28 w-20 h-20 items-center' >

                  <img src="/plumber.gif" alt="" className="rounded-full" />
                </div>
                <div className="font-semibold md:text-xl text-lg" >Plumber</div>
              </div>
               
              
                <div className="flex justify-between w-full text-gray-900 font-semibold bg-white p-4 rounded-xl">
                  <div className="text-lg" >Budget</div>
                  <div className="text-lg" >&#8377; 6900</div>
                </div>
                <div className="text-gray-900 rounded-xl border-white p-4 bg-white font-semibold w-full ">
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
        
      
     
  )
}

export default UserRequests