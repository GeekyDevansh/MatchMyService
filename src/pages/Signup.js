import React, { useState } from "react";
import Loading from "../components/Loading";
import Form from "../components/SignupForm";
import {motion} from "framer-motion";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [businessSignup, setBusinessSignup] = useState(false);

  return (
    <>
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} className="flex justify-center md:items-center h-screen bg-[url('/public/bgnew.svg')] ">
       
          {loading ? 
            <div className="bg-white flex justify-center md:p-10 p-6 md:h-2/3 mt-[50%] md:mt-0 md:min-h-0 md:w-2/3 w-[90%] min-h-fit max-h-[83%] overflow-y-auto scrollbar-hide rounded-xl shadow-lg items-center h-1/2 ">
              <div className="md:w-[50%]" >

              <Loading />
              </div>
            </div>
           : 
            [ <motion.div initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1}} className="bg-white md:flex md:justify-between md:p-10 p-6 md:h-2/3 md:min-h-0 md:w-2/3 w-[90%] min-h-fit max-h-[83%] overflow-y-auto scrollbar-hide rounded-xl shadow-lg md:mt-0 mt-[10%] ">
              <div className="flex md:hidden flex-col justify-center items-center pb-[6%]" >
              <div className="flex justify-center md:w-1/2  h-52  w-3/4 items-center md:h-full ">
               {businessSignup? <img src="/business_signup.webp" alt="business_signup" />:<img src="/signup.webp" alt="signup" />}
              </div>
              </div>
              <div className="md:flex hidden justify-center md:w-1/2 md:mb-0 h-52  w-3/4 md:h-full ">
               {businessSignup? <img src="/business_signup.webp" alt="business_signup" />:<img src="/signup.webp" alt="signup" />}
              </div>
              <div className="md:w-1/2">
                <Form loading={loading} setLoading={setLoading} businessSignup={businessSignup} setBusinessSignup={setBusinessSignup}  />
              </div>
              </motion.div>,
            ]
          }
        
      </motion.div>
    </>
  );
}

export default Signup;
