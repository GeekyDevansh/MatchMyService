import React, { useState } from "react";
import Loading from "../components/Loading";
import Form from "../components/SignupForm";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [businessSignup, setBusinessSignup] = useState(false);

  return (
    <>
      <div className="flex justify-center md:items-center h-screen bg-[url('/public/bgnew.svg')] ">
       
          {loading ? 
            <div className="bg-white flex justify-center md:p-10 p-6 md:h-2/3 mt-[20%] md:mt-0 md:min-h-0 md:w-2/3 w-[80%] min-h-fit max-h-[83%] overflow-y-auto scrollbar-hide rounded-xl shadow-lg items-center h-1/2 ">
              <Loading />
            </div>
           : 
            [ <div className="bg-white md:flex md:justify-between md:p-10 p-6 md:h-2/3  md:min-h-0 md:w-2/3 w-[80%] min-h-fit max-h-[83%] overflow-y-auto scrollbar-hide rounded-xl shadow-lg md:mt-0 mt-[10%] ">
              <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 h-48 md:h-full ">
               {businessSignup? <img src="/business_signup.gif" alt="business_signup" />:<img src="/signup.gif" alt="signup" />}
              </div>
              <div className="md:w-1/2">
                <Form loading={loading} setLoading={setLoading} businessSignup={businessSignup} setBusinessSignup={setBusinessSignup}  />
              </div>
              </div>,
            ]
          }
        
      </div>
    </>
  );
}

export default Signup;
