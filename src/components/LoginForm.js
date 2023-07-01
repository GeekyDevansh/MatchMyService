import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { basicSchema } from "../schemas/loginSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";


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
  const [showPassword,setShowPassword]=useState(false);

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
          if (res?.user.photoURL !== null) {
            navigate("/business/home");
          } else {
            navigate("/home");
          }
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res?.user?.uid);
        })
        .catch((err) => {
          console.log(err);
          toast.error("The email or password you entered is incorrect.", {
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
      <div className=" bg-white text-gray-900 w-full md:border-l-2 border-t-2 md:border-t-0 border-gray-300 max-h-[110%] scrollbar-hide overflow-y-auto  ">
        <div className="flex justify-center mt-8 md:mt-0 md:text-5xl text-3xl font-semibold">
          <h1>Sign In</h1>
        </div>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center mt-6 gap-6 md:p-10">
            <div className="w-full flex flex-col justify-center items-center ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="p-3 bg-gray-200 rounded-xl text-gray-700 md:w-2/3 w-[85%] focus:outline-0 "
                {...register("email")}
              />
              <span className="text-center text-red-500 font-semibold text-sm ">
                {errors?.email?.message}
              </span>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex md:w-2/3 w-[85%]">
                <input
                  type={showPassword?"text":"password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="p-3 bg-gray-200 rounded-l-xl text-gray-700 w-3/4 focus:outline-0 "
                  {...register("password")}
                />
                <div className="w-1/4 text-2xl cursor-pointer bg-gray-200 text-gray-500 p-3 rounded-r-xl items-center justify-center flex" onClick={()=>{setShowPassword(!showPassword)}} >
                 {showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}
                </div>
              </div>
              <span className="text-center text-red-500 font-semibold text-sm ">
                {errors?.password?.message}
              </span>
            </div>

            <div className="w-full flex justify-center ">
              <button
                type="submit"
                className=" px-6 py-3 md:w-[80%] w-full text-white font-extrabold bg-blue-700 hover:bg-blue-800 rounded-2xl md:drop-shadow-xl drop-shadow-lg"
              >
                SIGN IN
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:gap-1 text-center md:text-sm ">
              <div> New to MatchMyService ?</div>{" "}
              <div className="font-semibold text-blue-800">
                {" "}
                <Link to="/signup"> Create a FREE account </Link>{" "}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
