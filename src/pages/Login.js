import React, { useState } from "react";
import Form from "../components/LoginForm";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center md:items-center h-screen bg-[url('/public/bgnew.svg')] "
      >
        {loading ? (
          <div className=" items-center mx-auto bg-white flex justify-center md:p-10 p-6 md:h-2/3 md:min-h-0 md:mt-0 md:w-2/3 w-[90%] min-h-fit max-h-[80%] mt-[50%] rounded-xl shadow-lg h-1/2 overflow-y-auto scrollbar-hide ">
            <div className="md:w-[50%]">
              <Loading />
            </div>
          </div>
        ) : (
          [
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row md:justify-between justify-center flex flex-col md:p-10 p-6 md:h-2/3 md:min-h-0 md:w-2/3 w-[90%] min-h-fit max-h-[80%]  rounded-xl shadow-lg mt-[10%] md:mt-0 overflow-y-auto scrollbar-hide "
            >
              <div className="flex md:hidden flex-col justify-center items-center">
                <div className="flex justify-center md:w-1/2 h-52 w-3/4 items-center md:h-full">
                  <img src="/signup.webp" alt="login" />
                </div>
              </div>
              <div className="md:flex hidden justify-center md:w-1/2 h-52 w-3/4 md:h-full">
                  <img src="/signup.webp" alt="login" />
                </div>
              <div className="md:w-1/2">
                <Form loading={loading} setLoading={setLoading} />
              </div>
            </motion.div>,
          ]
        )}
      </motion.div>
    </>
  );
}

export default Login;
