import React from "react";
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
// import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LandingNavbar from "../components/LandingNavbar";

const Landing = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 6000,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <div>

      <LandingNavbar/>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className=" mt-10 mx-[5%] md:p-[0.75%] p-[2%]"
    >
      <motion.div  initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }} className="font-semibold text-5xl flex justify-center items-center md:w-1/2">
        <h1>Your One-Stop Platform for Quality Services!</h1>
      </motion.div>

      <div className="md:w-1/3 overflow-x-hidden">
        <motion.div  initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1, delay:0.5 }} className="text-center font-semibold text-2xl mb-5 mt-10">How It Works</motion.div>
        <Slider {...settings}>
          <div>
            <div className=" bg-red-400 p-10 rounded-xl mx-2 flex flex-col md:h-96 h-80 text-center justify-center items-center">
              <div className="h-[82%]" >
                <img src="post.svg" alt="" className="h-[80%]" />
              </div>
              <div className="h-1/2 font-normal text-xl tracking-wide text-white " > <span className="text-2xl" > 1. </span> Post your requirement.</div>
            </div>
          </div>
          <div>
            <div className=" bg-orange-400 p-10 rounded-xl flex flex-col mx-2 md:h-96 h-80 text-center justify-around items-center ">
              <div className="h-[90%]" >
                <img src="compare.svg" alt="" className="h-[80%]" />
              </div>

              <div className="h-1/2 font-normal text-xl tracking-wide text-white" > <span className="text-2xl" > 2. </span> Compare the bids.</div>
            </div>
          </div>
          <div>
            <div className=" bg-green-400 p-10 rounded-xl flex flex-col mx-2 md:h-96 h-80 text-center justify-around items-center ">
              <div className="h-[90%]" >
                <img src="choose.svg" alt="" className="h-[80%]" />
              </div>
              <div className="h-1/2 font-normal text-xl tracking-wide text-white" > <span className="text-2xl" > 3. </span> Choose the Best Provider for the Job. </div>
            </div>
          </div>
        </Slider>
      </div>
    </motion.div>
    </div>
  );
};

export default Landing;
