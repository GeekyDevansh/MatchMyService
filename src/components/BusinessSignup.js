import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../schemas/signupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const BusinessSignup = ({ loading, setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicSchema),
  });

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [serviceType, setServiceType] = useState();

  const handleSignup = (data, e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (res) => {
          const newUser = res.user;
          await updateProfile(newUser, { displayName: data.name });
          return res;
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res.user.uid);
          console.log("res", res);
        })
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("Email Already In Use. \n Please Sign In", {
            className: "font-semibold",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };

  return (
    <>
      <div className=" bg-white text-gray-900 w-full md:border-l-2 md:border-t-0 border-gray-300 max-h-[110%] overflow-y-auto scrollbar-hide ">
        <form
          method="POST"
          onSubmit={handleSubmit(handleSignup)}
          className="max-h-screen overflow-y-hidden overflow-x-hidden "
        >
          <div className=" items-center gap-2 my-4 bg-[#E8E8E8] p-[3%] md:p-[1%] md:h-34 md:w-[80%] justify-center mx-auto rounded-xl">
            <div className="text-gray-400 mb-2 md:pl-3">
              Choose your Business
            </div>

            <div className="flex justify-center w-[90%] items-center md:gap-2 gap-5 mx-auto px-2">
              <div>
                <button
                  type="button"
                  className={`${
                    serviceType === "plumber"
                      ? "border-2 border-gray-900"
                      : "border-0 border-transparent"
                  } bg-[#E8E8E8] rounded-xl md:w-16 md:h-16 w-12 h-12`}
                  onClick={() => {
                    setServiceType("plumber");
                    // setSendData({...sendData,service_type:"Plumber"});
                  }}
                >
                  <img src="/plumber.gif" alt="" className="rounded-xl" />
                  <span className=" text-xs font-semibold">Plumber</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className={`${
                    serviceType === "carpenter"
                      ? "border-2 border-gray-900"
                      : "border-0 border-transparent"
                  } bg-[#E8E8E8] rounded-xl md:w-16 md:h-16 w-12 h-12`}
                  onClick={() => {
                    setServiceType("carpenter");
                    // setSendData({...sendData,service_type:"Carpenter"});
                  }}
                >
                  <img src="/carpenter.gif" alt="" className="rounded-xl" />
                  <span className=" text-xs font-semibold">Carpenter</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className={`${
                    serviceType === "electrician"
                      ? "border-2 border-gray-900"
                      : "border-0 border-transparent"
                  } bg-[#E8E8E8] rounded-xl md:w-16 md:h-16 w-12 h-12`}
                  onClick={() => {
                    setServiceType("electrician");
                    // setSendData({...sendData,service_type:"Electrician"});
                  }}
                >
                  <img src="/electrician.gif" alt="" className="rounded-xl " />
                  <span className="text-xs font-semibold">Electrician</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className={`${
                    serviceType === "other"
                      ? "border-2 border-gray-900"
                      : "border-0 border-transparent"
                  } bg-[#E8E8E8] rounded-xl md:w-16 md:h-16 w-12 h-12`}
                  onClick={() => {
                    setServiceType("other");
                  }}
                >
                  <img src="/other.gif" alt="" className="rounded-xl" />
                  <span className="text-xs font-semibold">Others</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full  md:w-[80%] md:ml-12"
                {...register("name")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full md:w-[80%] md:mr-10 "
                {...register("email")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.email?.message}
                </span>
              )}
            </div>
          </div>
          <div className={`gap-1 flex mt-4`}>
            <div className={`${serviceType==="other"?"":"md:w-[56%]"}`} >
              <input
                type="password"
                name="name"
                placeholder="Enter Password"
                className={`p-3 bg-gray-200 rounded-xl text-gray-900 ${serviceType==="other"?"w-full":"w-[94%]"} md:w-[80%] md:ml-12`}
                {...register("name")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div className={`md:w-1/3 w-[80%]  ${serviceType==="other"?"hidden":"block"}`} >
              <button
                type="submit"
                className=" md:px-6 px-4 py-3 md:py-3 w-full text-white font-extrabold bg-blue-700 hover:bg-blue-800 rounded-lg md:drop-shadow-xl drop-shadow-lg "
              >
                SIGN UP
              </button>
            </div>
            <div className={`  ${serviceType==="other"?"block":"hidden"}`} >
              <input
                type="text"
                name="business_name"
                placeholder="Business Name"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full md:w-[80%] md:mr-10 "
                {...register("email")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.email?.message}
                </span>
              )}
            </div>
          </div>

          <div className={`w-full items-center justify-center flex mt-4 ${serviceType==="other"?"block":"hidden"}`} >
              <button
                type="submit"
                className=" px-6 py-3 w-full md:w-[80%] text-white font-extrabold bg-blue-700 hover:bg-blue-800 rounded-lg md:drop-shadow-xl drop-shadow-lg "
              >
                SIGN UP
              </button>
            </div>

          <div className="flex flex-col md:flex-row md:gap-1 items-center justify-center mt-4 text-center md:text-sm ">
            <div className="text-center"> Already have an account?</div>{" "}
            <div className="text-center font-semibold text-blue-800 ">
              <Link to="/login"> Sign In </Link>{" "}
            </div>
          </div>

          {/* <div className="w-full flex flex-col justify-center items-center ">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 md:w-2/3 w-[85%] "
                {...register("password")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm">
                  {errors?.password?.message}
                </span>
              )}
            </div> */}
          {/* <button
              type="submit"
              className=" px-6 py-3 md:w-[80%] w-full text-white font-extrabold bg-blue-700 rounded-2xl md:drop-shadow-xl drop-shadow-lg "
            >
              SIGN UP
            </button> */}

          {/* <div className="flex flex-col md:flex-row md:gap-1 text-center md:text-sm ">
              <div className="text-center"> Already have an account?</div>{" "}
              <div className="text-center font-semibold text-blue-800 ">
                <Link to="/login"> Sign In </Link>{" "}
              </div>
            </div> */}
        </form>
      </div>
    </>
  );
};

export default BusinessSignup;