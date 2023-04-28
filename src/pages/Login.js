import React,{useState} from "react";
import Form from '../components/LoginForm';
import Loading from "../components/Loading";

function Login() {

  const [loading,setLoading]=useState(false);

  return (
   <>
   <div className="flex justify-center items-center h-screen bg-[url('/public/bgnew.svg')] " >
    <div className="bg-white md:flex justify-between p-10 md:h-2/3 min-h-[90%] md:min-h-0 md:w-2/3 w-3/4 rounded-xl shadow-lg " >
    {loading?(<div className="flex items-center justify-center mx-auto">
            <Loading />
          </div>):([<div className='flex justify-center md:w-1/2 mb-8 md:mb-0 ' >
        <img src="/signup.gif" alt="login" />
      </div>,
      <div className="md:w-1/2" >
        <Form loading={loading} setLoading={setLoading} />
      </div>]) }
    </div>
   {/* <div className="text-white w-1/4 p-10 h-2/3 border-2 border-white rounded-xl bg-white" > */}
    {/* <Form/> */}
   {/* </div> */}
   </div>
   </>
  );
}

export default Login;
