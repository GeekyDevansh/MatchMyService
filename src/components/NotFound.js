import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const Navigate=useNavigate();

    const handleClick = ()=>{

        Navigate('/');

    }

  return (
    <>
    <div className='flex justify-center' >
         <img src="/404.webp" alt="" className='md:w-[25%]' />
    </div>
    <h1 className=' md:text-5xl text-4xl flex justify-center items-center tracking-wider text-center' > Page Not Found </h1>
    <h3 className='font-semibold md:text-xl text-lg flex justify-center items-center md:mt-[1%] mt-[5%] text-center ' >It seems you have found yourself in unexplored and unfamiliar territory.</h3>
    <div className='flex justify-center items-center mt-[2%] ' >

    <button className='md:px-16 md:py-4 px-8 py-3 text-sm md:text-base text-white font-extrabold bg-gray-900 rounded-lg md:drop-shadow-xl drop-shadow-lg mt-[5%] md:mt-0' onClick={handleClick} >Return Home</button>
    </div>
    </>
  )
}

export default NotFound