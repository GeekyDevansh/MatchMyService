import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import TextTransition, { presets } from "react-text-transition";
import CTA from "../components/CTA";

const TEXTS = [
  "plumbers.",
  "carpenters.",
  "electricians.",
  "other utility providers.",
];
const Landing = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-stone-900 bg-[url('/public/grid.svg')]">
      <LandingNavbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" mt-[5%] md:mt-[2%] mx-[5%] md:p-[0.75%] p-[2%] text-white "
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-semibold text-5xl flex justify-center items-center"
        >
          <h1>
            Your One-Stop Platform for finding the best{" "}
            <TextTransition
              className="text-teal-500 italic md:justify-center md:mb-0 mb-4 "
              springConfig={presets.wobbly}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </motion.div>
        <div className=" flex flex-col items-center gap-10 ">
          <div className="md:w-2/3 w-full overflow-x-hidden">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center font-semibold text-3xl mb-5 mt-10"
            >
              How It Works
            </motion.div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 1200, disableOnInteraction: false }}
              speed={2000}
            >
              <SwiperSlide>
                <div className=" bg-red-400 p-10 rounded-xl flex flex-col md:h-96 h-80 text-center justify-center items-center">
                  <div className="h-[82%]">
                    <img src="post.svg" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-1/2 font-semibold text-2xl text-white ">
                    {" "}
                    <span className="text-3xl"> 1. </span> Post Your
                    Requirement.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-orange-400 p-10 rounded-xl flex flex-col md:h-96 h-80 text-center justify-around items-center ">
                  <div className="h-[90%]">
                    <img src="compare.svg" alt="" className="h-[80%]" />
                  </div>

                  <div className="h-1/2 font-semibold text-2xl text-white">
                    {" "}
                    <span className="text-3xl"> 2. </span> Compare the Bids.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="  bg-[#2ea673] p-10 rounded-xl flex flex-col md:h-96 h-80 text-center justify-around items-center ">
                  <div className="h-[90%]">
                    <img src="choose.svg" alt="" className="h-[80%]" />
                  </div>
                  <div className="h-1/2 font-semibold text-2xl text-white">
                    {" "}
                    <span className="text-3xl"> 3. </span> Choose the Best
                    Provider for the Job.{" "}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-center font-semibold text-3xl mb-5 mt-10 text-white"
      >
        Why Us?
      </motion.div>

      <div className="md:w-2/3 w-[90%] flex flex-col items-center justify-center mx-auto gap-10 ">
        <div className="flex md:flex-nowrap flex-wrap justify-between gap-10">

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#6699CC] bg-opacity-90 rounded-xl cursor-pointer ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className=" md:w-1/3 w-1/2"
            >
              <img src="/ui.svg" alt="" />
            </motion.div>
            <div className=" flex flex-col md:w-2/3">
              {" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-semibold text-xl text-[#1E3954] text-center md:text-left "
              >
                {" "}
                User Friendly Interface{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-[#1E3954] text-lg  text-center md:text-left "
              >
                With intuitive navigation and a visually appealing design, users
                can navigate, post their requirements, and evaluate bids with
                ease.
              </motion.div>{" "}
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FFF275] bg-opacity-90 rounded-xl cursor-pointer ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/3 w-1/2"
            >
              <img src="/bid.svg" alt="" />
            </motion.div>
            <div className=" flex flex-col md:w-2/3">
              {" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-semibold text-xl text-[#46411A] text-center md:text-left "
              >
                {" "}
                Transparent Bidding{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-[#46411A] text-lg text-center md:text-left "
              >
                We promote a transparent bidding process, offering users full
                visibility into bids and creating a level playing field for
                informed decision-making.
              </motion.div>{" "}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 ">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="flex flex-col md:flex-row md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF8C42] bg-opacity-90 rounded-xl cursor-pointer ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/3 w-1/2"
            >
              <img src="/categories.svg" alt="" />
            </motion.div>
            <div className=" flex flex-col md:w-2/3">
              {" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-semibold text-xl text-[#3E2913] text-center md:text-left "
              >
                {" "}
                Service Categories{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-[#3E2913] text-lg md:text-left text-center"
              >
                We offer a diverse range of service categories, providing users
                with a wide selection to choose from based on their specific
                needs and preferences.
              </motion.div>{" "}
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF3C38] bg-opacity-90 rounded-xl cursor-pointer ">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/3 w-1/2"
            >
              <img src="/mobile.svg" alt="" />
            </motion.div>
            <div className=" flex flex-col md:w-2/3">
              {" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-semibold text-xl text-[#45110F] text-center md:text-left "
              >
                {" "}
                Mobile Compatibility{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-[#45110F] text-lg text-center md:text-left "
              >
                The platform is fully mobile compatible, allowing users to
                access and navigate its features seamlessly on their
                smartphones.
              </motion.div>{" "}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
