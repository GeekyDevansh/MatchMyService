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
              className="text-center font-semibold text-3xl mt-14 tracking-wider"
            >
              How It Works
            </motion.div>
            <motion.div  initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }} className="text-center text-normal text-gray-300 mb-10">
              Just 3 easy steps and you're done.
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
        className="text-center font-semibold text-3xl mt-14 tracking-wider text-white"
      >
        Why Us?
      </motion.div>
      <motion.div  initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }} className="text-center text-normal text-gray-300 mb-10">
        Know why we are superior.
      </motion.div>

      <div className="md:w-2/3 w-[90%] flex flex-col items-center justify-center mx-auto gap-10 ">
        <div className="flex md:flex-nowrap flex-wrap justify-between gap-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#6699CC] bg-opacity-90 rounded-xl cursor-pointer "
          >
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

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FFF275] bg-opacity-90 rounded-xl cursor-pointer "
          >
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex flex-col md:flex-row md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF8C42] bg-opacity-90 rounded-xl cursor-pointer "
          >
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF6F6D] bg-opacity-90 rounded-xl cursor-pointer "
          >
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
        <div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center font-semibold text-3xl mt-10 tracking-wider text-white"
          >
            Our Services
          </motion.div>
          <motion.div  initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }} className="text-center text-normal text-gray-300 mb-10">
            We provide a wide range of services.
          </motion.div>
          <div className="flex md:flex-nowrap flex-wrap justify-between gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF8370] bg-opacity-90 rounded-xl cursor-pointer "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className=" md:w-1/3 w-1/2"
              >
                <img src="/welding.png" alt="" className="" />
              </motion.div>
              <div className=" flex flex-col md:w-2/3">
                {" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="font-semibold text-xl text-[#333333] text-center md:text-left "
                >
                  {" "}
                  Fabricators{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[#333333] text-lg  text-center md:text-left "
                >
                  Precision welding for diverse projects. Trust our skilled
                  welders for top-notch craftsmanship, repairs, and structural
                  welding.
                </motion.div>{" "}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#00B1B0] bg-opacity-90 rounded-xl cursor-pointer "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/3 w-1/2"
              >
                <img src="/electric.png" alt="" />
              </motion.div>
              <div className=" flex flex-col md:w-2/3">
                {" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="font-semibold text-xl text-[#001F3F] text-center md:text-left "
                >
                  {" "}
                  Electricians{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[#001F3F] text-lg text-center md:text-left "
                >
                  Certified electricians for installations, wiring, and repairs.
                  Rely on us for safe and efficient electrical solutions.
                </motion.div>{" "}
              </div>
            </motion.div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 mt-10 ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex flex-col md:flex-row md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FEC84D] bg-opacity-90 rounded-xl cursor-pointer "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/3 w-1/2"
              >
                <img src="/carpentry.png" alt="" />
              </motion.div>
              <div className=" flex flex-col md:w-2/3">
                {" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="font-semibold text-xl text-gray-900 text-center md:text-left "
                >
                  {" "}
                  Carpenters{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-gray-900 text-lg md:text-left text-center"
                >
                  Crafting excellence in woodwork, installations, and repairs.
                  Our carpenters bring precision and creativity to every
                  project.
                </motion.div>{" "}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex md:flex-row flex-col md:w-1/2 md:gap-4 gap-8 p-10 justify-center items-center bg-[#FF8FB3] bg-opacity-90 rounded-xl cursor-pointer "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/3 w-1/2"
              >
                <img src="/plumbing.png" alt="" />
              </motion.div>
              <div className=" flex flex-col md:w-2/3">
                {" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="font-semibold text-xl text-[#001F3F] text-center md:text-left "
                >
                  {" "}
                  Plumbers{" "}
                </motion.div>{" "}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[#001F3F] text-lg text-center md:text-left "
                >
                  Tailored plumbing expertise for emergencies, installations,
                  and upgrades. Trust us for prompt, customer-focused solutions.
                </motion.div>{" "}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div  initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }} className="w-full flex justify-center items-center mt-10" >
          <CTA/>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
