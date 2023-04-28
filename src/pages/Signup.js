import React,{useState} from "react";
import Loading from "../components/Loading";
import Form from "../components/SignupForm";

function Signup() {

  const [loading,setLoading]=useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[url('/public/bgnew.svg')] ">
        <div className="bg-white md:flex justify-between md:p-10 p-6 md:h-2/3 min-h-[90%] md:min-h-0 md:w-2/3 w-[80%] rounded-xl shadow-lg ">
          {loading?(<div className="flex items-center justify-center mx-auto md:mt-0 mt-[80%]">
            <Loading />
          </div>):([<div className='flex justify-center md:w-1/2 mb-8 md:mb-0 ' >
        <img src="/signup.gif" alt="login" />
      </div>,
      <div className="md:w-1/2" >
        <Form loading={loading} setLoading={setLoading} />
      </div>]) }
          
        </div>
      </div>
    </>
  );
}

export default Signup;
