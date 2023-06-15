import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../schemas/signupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import BusinessSignup from "./BusinessSignup";

const Form = ({ loading, setLoading, businessSignup, setBusinessSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicSchema),
  });

  const navigate = useNavigate();
  const [user, setUser] = useState();

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
      <div className=" bg-white text-gray-900 w-full md:border-l-2 border-t-2 md:border-t-0 border-gray-300 max-h-[110%] overflow-y-auto scrollbar-hide ">
        <div className={`flex justify-center items-center text-center mt-1 md:mt-0 overflow-y-hidden md:overflow-y-visible ${businessSignup?"md:text-3xl":"md:text-5xl"} ${businessSignup?"md:ml-4":"md:ml-0"}  text-3xl font-semibold mt-8`}>
          {businessSignup?<h1>Create Business Account</h1>:<h1>Sign Up</h1>}
        </div>
        {!businessSignup && <form
          method="POST"
          onSubmit={handleSubmit(handleSignup)}
          className="max-h-screen overflow-y-hidden "
        >
          <div className="flex flex-col justify-center items-center gap-4 mt-5 md:mt-0 md:p-10">
            <div className="w-full flex flex-col justify-center items-center ">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-3 bg-gray-200 rounded-xl text-gray-700 md:w-2/3 w-[85%]"
                {...register("name")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-center ">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 bg-gray-200 rounded-xl text-gray-700 md:w-2/3 w-[85%] "
                {...register("email")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm ">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-center ">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-3 bg-gray-200 rounded-xl text-gray-700 md:w-2/3 w-[85%] "
                {...register("password")}
              />
              {errors && (
                <span className="text-center text-red-500 font-semibold text-sm">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className=" px-6 py-3 md:w-[80%] w-full text-white font-extrabold bg-blue-700 rounded-2xl md:drop-shadow-xl drop-shadow-lg "
            >
              SIGN UP
            </button>

            <div className=" flex flex-col justify-center items-center gap-1 text-center">
              <div className="flex flex-col md:flex-row md:gap-1 text-center md:text-sm">
                <div className="text-center"> Already have an account?</div>{" "}
                <div className="text-center font-semibold text-blue-800">
                  <Link to="/login"> Sign In </Link>{" "}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-1 text-center md:text-sm ">
                {" "}
                Are you a business?{" "}
                <span
                  className="cursor-pointer font-semibold text-blue-800"
                  onClick={() => {
                    setBusinessSignup(true);
                  }}
                >
                  {" "}
                 Create a FREE business account{" "}
                </span>{" "}
              </div>
            </div>
          </div>
        </form>}
      </div>
      {businessSignup && <BusinessSignup setLoading={setLoading} />}
    </>
  );
};

export default Form;
