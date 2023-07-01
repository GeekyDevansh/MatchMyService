import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";

const Landing = () => {

  return (
    <div>
      <LandingNavbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" mt-[5%] md:mt-[2%] mx-[5%] md:p-[0.75%] p-[2%]"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-semibold text-5xl flex justify-center items-center"
        >
          <h1>Your One-Stop Platform for <span className="text-transparent bg-clip-text gradient-background-1 " > Quality Services! </span> </h1>
        </motion.div>
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 ">
          <div className="md:w-1/2 overflow-x-hidden">
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
              autoplay={{ delay: 1200,disableOnInteraction: false }}
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
                <div className="  bg-[#69c47a] p-10 rounded-xl flex flex-col md:h-96 h-80 text-center justify-around items-center ">
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

          <div className="md:w-1/2 overflow-x-hidden">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center font-semibold text-3xl mb-5 md:mt-10"
            >
              Why Us?
            </motion.div>
            <div className="flex flex-col justify-between md:h-96 p-2 rounded-xl bg-[#D7B9E4] ">
              <div className="md:flex justify-between ">
                <div className="flex md:w-1/2 gap-4 p-2 justify-center items-center ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className=" md:w-1/4 w-1/3"
                  >
                    <img src="/ui.svg" alt="" />
                  </motion.div>
                  <div className=" flex flex-col w-2/3">
                    {" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="font-semibold text-lg"
                    >
                      {" "}
                      User Friendly Interface{" "}
                    </motion.div>{" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="text-gray-600 text-sm "
                    >
                      With intuitive navigation and a visually appealing design,
                      users can navigate, post their requirements, and evaluate
                      bids with ease.
                    </motion.div>{" "}
                  </div>
                </div>
                <div className="flex md:w-1/2 gap-4 p-2 justify-center items-center ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/4 w-1/3"
                  >
                    <img src="/bid.svg" alt="" />
                  </motion.div>
                  <div className=" flex flex-col w-2/3">
                    {" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="font-semibold text-lg"
                    >
                      {" "}
                      Transparent bidding Process{" "}
                    </motion.div>{" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="text-gray-600 text-sm"
                    >
                      We promote a transparent bidding process, offering users
                      full visibility into bids and creating a level playing
                      field for informed decision-making.
                    </motion.div>{" "}
                  </div>
                </div>
              </div>
              <div className="md:flex justify-between ">
                <div className="flex md:w-1/2 gap-4 p-2 justify-center items-center ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/4 w-1/3"
                  >
                    <img src="/categories.svg" alt="" />
                  </motion.div>
                  <div className=" flex flex-col w-2/3">
                    {" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="font-semibold text-lg"
                    >
                      {" "}
                      Service Categories{" "}
                    </motion.div>{" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="text-gray-600 text-sm"
                    >
                      We offer a diverse range of service categories, providing
                      users with a wide selection to choose from based on their
                      specific needs and preferences.
                    </motion.div>{" "}
                  </div>
                </div>
                <div className="flex md:w-1/2 gap-4 p-2 justify-center items-center ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/4 w-1/3"
                  >
                    <img src="/mobile.svg" alt="" />
                  </motion.div>
                  <div className=" flex flex-col w-2/3">
                    {" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="font-semibold text-lg"
                    >
                      {" "}
                      Mobile Compatibility{" "}
                    </motion.div>{" "}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="text-gray-600 text-sm"
                    >
                      The platform is fully mobile compatible, allowing users to
                      access and navigate its features seamlessly on their
                      smartphones.
                    </motion.div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Landing;
