import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const Form = ({ loading, setLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicSchema),
  });

  const navigate = useNavigate();
  const [user, setUser] = useState();

  const onSubmit = (data,e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res.user.uid);
          console.log("res", res);
        })
        .then(() => {
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          toast.error("The username or password you entered is incorrect.",{ className:'font-semibold' });
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };
  return (
    <>
      <div className=" bg-white text-gray-900 w-full md:border-l-2 border-t-2 md:border-t-0 border-gray-300 font-semibold max-h-[110%] scrollbar-hide overflow-y-auto  ">
        <div className="flex justify-center mt-8 md:mt-0 md:text-5xl text-3xl">
          <h1>Sign In</h1>
        </div>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center mt-6 gap-6 md:p-10">
            <div className="w-full flex flex-col justify-center items-center " >

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="p-3 bg-gray-200 rounded-xl text-gray-900 md:w-2/3 w-[85%] "
              {...register("email")}
              />
            <span className="text-center text-red-500 font-semibold text-sm ">
              {errors?.email?.message}
            </span>
            </div>
            <div className="w-full flex flex-col justify-center items-center" >

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="p-3 bg-gray-200 rounded-xl text-gray-900 md:w-2/3 w-[85%] "
              {...register("password")}
              />
              
            <span className="text-center text-red-500 font-semibold text-sm ">
              {errors?.password?.message}
            </span>
            </div>
            <div className="w-full flex justify-center " >

            <button
              type="submit"
              className=" px-6 py-3 md:w-[80%] w-full text-white font-extrabold bg-blue-700 rounded-2xl drop-shadow-xl "
              >
              SIGN IN
            </button>
          </div>
              </div>
        </form>
      </div>
    </>
  );
};

export default Form;
