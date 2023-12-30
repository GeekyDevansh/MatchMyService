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

  const apiKey = process.env.REACT_APP_API_KEY;

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

  const handleClick = ()=>{

    setLoading(true);

    const res = JSON.stringify({"user":{"uid":"XLfNMurAESZxik5sHlsDEFi1tPs2","email":"devansh@test.com","emailVerified":false,"displayName":"devansh","isAnonymous":false,"providerData":[{"providerId":"password","uid":"devansh@test.com","displayName":"devansh","email":"devansh@test.com","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"AMf-vBzaI_hyefZgDDisyXZa3Wu_3rjmvvK7Vv8X0Gpf1ta1Tzg11li9ZUEfBex0LU8Whjg-uLZRkOXRv_8CKqxVyYBeEwiSx-ydq9AkPPpblqf79PYEOMHgPW9Oujf3u2-JTp3_OiTErtz1GBMgyOFyyez47aSk1jdGVFso0ayLANPjPzH9HblaDZ98wYLL-XbcX1cZGYIAb2TeR-yg_emHhMc40P0ixKZiB_sXz__fZv-9BQWWsdo","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGV2YW5zaCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9iaWRkaW5nLXByb2plY3QtMTFlZGUiLCJhdWQiOiJiaWRkaW5nLXByb2plY3QtMTFlZGUiLCJhdXRoX3RpbWUiOjE3MDM4ODY2ODMsInVzZXJfaWQiOiJYTGZOTXVyQUVTWnhpazVzSGxzREVGaTF0UHMyIiwic3ViIjoiWExmTk11ckFFU1p4aWs1c0hsc0RFRmkxdFBzMiIsImlhdCI6MTcwMzg4NjY4MywiZXhwIjoxNzAzODkwMjgzLCJlbWFpbCI6ImRldmFuc2hAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGV2YW5zaEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kzMDt0pelkvmPY4rsezFOFIUzpD4adV7WUBuCr5O_Sv9MljRSvfrL486SLEh8poj-nmFnCroVJR2KFJGPrEPFHmkBNHIocw1wQ6muHKoZ02SHHYYu_vix_4amh3snKfmllRrzv0TuHhknKUO_6v885UuBMGqh4h74GEmMGMuot0Tgjjmbm3a9fOX6rbXb2r0n3Lc24uU8lcdLT0p5UXVxxLPkXsZ33up3SOzV1O29J_BBDnzCKvxWxketrvzgIkFMnTiBgRIGSuhg1J2gnAHt4MJGqxWvuUa-SeiJ37h0avCY9mA5OzFkpimxGnWumafDiZfTyXx29p5QM_T_3QDDw","expirationTime":1703890282950},"createdAt":"1682691510895","lastLoginAt":"1703886683900","apiKey":apiKey,"appName":"[DEFAULT]"},"providerId":null,"_tokenResponse":{"kind":"identitytoolkit#VerifyPasswordResponse","localId":"XLfNMurAESZxik5sHlsDEFi1tPs2","email":"devansh@test.com","displayName":"devansh","idToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGV2YW5zaCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9iaWRkaW5nLXByb2plY3QtMTFlZGUiLCJhdWQiOiJiaWRkaW5nLXByb2plY3QtMTFlZGUiLCJhdXRoX3RpbWUiOjE3MDM4ODY2ODMsInVzZXJfaWQiOiJYTGZOTXVyQUVTWnhpazVzSGxzREVGaTF0UHMyIiwic3ViIjoiWExmTk11ckFFU1p4aWs1c0hsc0RFRmkxdFBzMiIsImlhdCI6MTcwMzg4NjY4MywiZXhwIjoxNzAzODkwMjgzLCJlbWFpbCI6ImRldmFuc2hAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGV2YW5zaEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kzMDt0pelkvmPY4rsezFOFIUzpD4adV7WUBuCr5O_Sv9MljRSvfrL486SLEh8poj-nmFnCroVJR2KFJGPrEPFHmkBNHIocw1wQ6muHKoZ02SHHYYu_vix_4amh3snKfmllRrzv0TuHhknKUO_6v885UuBMGqh4h74GEmMGMuot0Tgjjmbm3a9fOX6rbXb2r0n3Lc24uU8lcdLT0p5UXVxxLPkXsZ33up3SOzV1O29J_BBDnzCKvxWxketrvzgIkFMnTiBgRIGSuhg1J2gnAHt4MJGqxWvuUa-SeiJ37h0avCY9mA5OzFkpimxGnWumafDiZfTyXx29p5QM_T_3QDDw","registered":true,"refreshToken":"AMf-vBzaI_hyefZgDDisyXZa3Wu_3rjmvvK7Vv8X0Gpf1ta1Tzg11li9ZUEfBex0LU8Whjg-uLZRkOXRv_8CKqxVyYBeEwiSx-ydq9AkPPpblqf79PYEOMHgPW9Oujf3u2-JTp3_OiTErtz1GBMgyOFyyez47aSk1jdGVFso0ayLANPjPzH9HblaDZ98wYLL-XbcX1cZGYIAb2TeR-yg_emHhMc40P0ixKZiB_sXz__fZv-9BQWWsdo","expiresIn":"3600"},"operationType":"signIn"});

    localStorage.setItem("user", res);
    setUser("XLfNMurAESZxik5sHlsDEFi1tPs2")
    setTimeout( function (){
      navigate("/home");

      setLoading(false);
    } ,2000)


  }

  return (
    <>
      <div className=" bg-white text-gray-900 w-full md:border-l-2 border-gray-300  max-h-[110%] scrollbar-hide overflow-y-auto  ">
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
            <div className="cursor-pointer text-blue-800 font-semibold underline underline-offset-2 hover:underline-offset-4" onClick={handleClick} >
              Skip to demo 
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
