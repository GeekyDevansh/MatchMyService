import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { businessSchema } from "../schemas/businessSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const BusinessSignup = ({ loading, setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(businessSchema),
  });

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [serviceType, setServiceType] = useState();
  const [serviceName, setServiceName] = useState("");

  const handleSignup = (data, e) => {
    e.preventDefault();
    setLoading(true);
    if(serviceName !=="")
    {

      setTimeout(() => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(async (res) => {
            const newUser = res.user;
            await updateProfile(newUser, { displayName: data.name, photoURL: data.serviceType || serviceName });
            return res;
          })
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res));
            setUser(res.user.uid);
            console.log("res", res);
          })
          .then(() => {
            navigate("/business/home");
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

    }
    else
    {
      toast.error("Service type is missing", {
        className: "font-semibold",
      });
      setLoading(false);
    }
    
  };

  return (
    <>
      <div className=" bg-white text-gray-900 w-full md:border-l-2 md:border-t-0 border-gray-300 max-h-[110%] overflow-y-auto scrollbar-hide ">
        <form
          method="POST"
          onSubmit={handleSubmit(handleSignup)}
          className="max-h-screen overflow-y-hidden overflow-x-hidden "
        >
<div className=" items-center gap-2 mb-4 bg-[#E8E8E8] p-[5%] md:p-[1%] md:h-34 md:w-[80%] rounded-xl md:mx-auto mt-5 ">
              <div className="text-gray-400 mb-2 md:pl-3">Choose Service Type</div>

              <div className="flex justify-center items-center gap-2 px-2">
                <div>
                  <button
                    type="button"
                    className={`${serviceType==="plumber"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-18 md:h-18 w-16 h-16`}
                    onClick={() => {
                      setServiceName("plumber");
                      setServiceType("plumber");
                      // setSendData({...sendData,service_type:"Plumber"});
                    }}
                  >
                    <img src="/plumber.gif" alt="" className="rounded-xl bg-white " />
                    <span className="text-xs font-semibold">
                      Plumber
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={`${serviceType==="carpenter"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-18 md:h-18 w-16 h-16`}
                    onClick={() => {
                      setServiceName("carpenter");
                      setServiceType("carpenter");
                      // setSendData({...sendData,service_type:"Carpenter"});
                    }}
                  >
                    <img src="/carpenter.gif" alt="" className="rounded-xl bg-white " />
                    <span className="text-xs font-semibold">
                      Carpenter
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={`${serviceType==="electrician"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-18 md:h-18 w-16 h-16`}
                    onClick={() => {
                      setServiceName("electrician");
                      setServiceType("electrician");
                      // setSendData({...sendData,service_type:"Electrician"});
                    }}
                  >
                    <img
                      src="/electrician.gif"
                      alt=""
                      className="rounded-xl bg-white  "
                    />
                    <span className="text-xs  font-semibold">
                      Electrician
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className={`${serviceType==="other"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-18 md:h-18 w-16 h-16`}
                    onClick={() => {
                      setServiceType("other");
                    }}
                  >
                    <img src="/other.gif" alt="" className="rounded-xl bg-white" />
                    <span className="text-xs  font-semibold">
                      Others
                    </span>
                  </button>
                </div>
              </div>
            </div>

          <div className="flex gap-2">
            <div className="w-full flex flex-col justify-center md:items-start items-center " >
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full  md:w-[80%] md:ml-12 ml-1"
                {...register("name")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm md:ml-12 ">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col justify-start md:items-start items-center " >
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-[98%] md:w-[80%] md:mr-10 "
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
            <div className={`${serviceType==="other"?"":"md:w-[56%]"} flex flex-col justify-center md:items-start items-center `} >
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className={`p-3 bg-gray-200 rounded-xl text-gray-900 ${serviceType==="other"?"w-full":"w-[95%]"} md:w-[80%] md:ml-12 ${serviceType==="other"?"ml-1":"ml-0"} `}
                {...register("password")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm md:ml-12 ">
                  {errors?.password?.message}
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
                name="service_name"
                placeholder="Service Name"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-[97%] md:w-[80%] md:mr-10 ml-1 md:ml-0 "
                {...register("serviceType")}
                onChange={(e)=>setServiceName(e.target.value.toUpperCase())}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm  ">
                  {errors?.serviceType?.message}
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
