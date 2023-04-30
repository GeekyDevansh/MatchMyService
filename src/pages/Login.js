import React, { useState } from "react";
import Form from "../components/LoginForm";
import Loading from "../components/Loading";

function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex justify-center md:items-center h-screen bg-[url('/public/bgnew.svg')] ">
        
          {loading ? (
            <div className=" items-center mx-auto bg-white flex justify-center md:p-10 p-6 md:h-2/3 md:min-h-0 md:mt-0 md:w-2/3 w-[80%] min-h-fit max-h-[80%] mt-[50%] rounded-xl shadow-lg h-1/2 ">
              <Loading />
            </div>
          ) : (
            [
              <div className="bg-white md:flex md:justify-between md:p-10 p-6 md:h-2/3 md:min-h-0 md:w-2/3 w-[80%] min-h-fit max-h-[80%]  rounded-xl shadow-lg mt-[10%] md:mt-0 ">
              <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 h-48 md:h-full">
                <img src="/signup.gif" alt="login" />
              </div>
              <div className="md:w-1/2">
                <Form loading={loading} setLoading={setLoading} />
              </div>
              </div>
            ]
          )}
        
      </div>
    </>
  );
}

export default Login;
