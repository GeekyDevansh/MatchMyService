import React from 'react';
import { useNavigate } from "react-router-dom";

const CTA = () => {


  const Navigate=useNavigate();
  const audio = new Audio("/getStarted.wav");

  const handleClick= ()=>{

    audio.play()
      Navigate('/login');

  }

  return (
    <div className='bg-gradient-to-r from-[#57ebde] to-[#aefb2a] px-10 md:py-6 py-4 md:w-[30%] w-[70%] rounded-lg text-gray-900 font-semibold text-center cursor-pointer hover:opacity-80 text-xl ' onClick={handleClick} >
        Start for free
    </div>
  )
}

export default CTA