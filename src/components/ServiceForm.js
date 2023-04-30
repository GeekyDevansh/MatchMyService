import React, { useState } from "react";
import Loading from "./Loading";

const ServiceForm = ({ setModalIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState();
  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <Loading />{" "}
        </div>
      ) : (
        <div className=" p-2 flex justify-center items-center ">
          <form action="POST" onSubmit={handleSubmit}>
            <div className="font-semibold text-2xl flex justify-center items-center md:mb-5 mb-2">
              <h1>Service Request Form</h1>
            </div>

            <div className=" items-center gap-2 mb-4 bg-[#E8E8E8] p-[5%] md:p-[1%] md:h-34  rounded-xl">
              <div className="text-gray-400 mb-2 md:pl-3">Choose service type</div>

              <div className="flex justify-center items-center gap-2 px-2">
                <div>
                  <button
                    type="button"
                    className="bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16 focus:outline-none focus:ring focus:ring-gray-900"
                    onClick={() => {
                      setService("plumber");
                    }}
                  >
                    <img src="/plumber.gif" alt="" className="rounded-xl" />
                    <span className="md:text-sm text-xs font-semibold">
                      Plumber
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16 focus:outline-none focus:ring focus:ring-gray-900 "
                    onClick={() => {
                      setService("carpenter");
                    }}
                  >
                    <img src="/carpenter.gif" alt="" className="rounded-xl" />
                    <span className="md:text-sm text-xs font-semibold">
                      Carpenter
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16 focus:outline-none focus:ring focus:ring-gray-900 "
                    onClick={() => {
                      setService("electrician");
                    }}
                  >
                    <img
                      src="/electrician.gif"
                      alt=""
                      className="rounded-xl "
                    />
                    <span className="text-xs md:text-sm font-semibold">
                      Electrician
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16 focus:outline-none focus:ring focus:ring-gray-900 "
                    onClick={() => {
                      setService("other");
                    }}
                  >
                    <img src="/other.gif" alt="" className="rounded-xl" />
                    <span className="text-xs md:text-sm font-semibold">
                      Others
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center  ">
              {service === "other" && (
                <input
                  type="text"
                  placeholder="Please specify the required service"
                  className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
                />
              )}
              <textarea
                type="textarea"
                rows="3"
                cols="50"
                placeholder="Description of service"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
              />
              <input
                type="text"
                placeholder="Budget (in &#8377;)"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
              />

              <button
                type="submit"
                className="md:px-6 md:py-2 px-4 py-2 text-white font-extrabold bg-blue-600 hover:bg-blue-700 rounded-lg md:drop-shadow-xl drop-shadow-lg w-full"
              >
                SUBMIT
              </button>
              <button
                className="md:px-6 md:py-2 px-4 py-2 text-white font-extrabold bg-gray-500 hover:bg-gray-600 rounded-lg md:drop-shadow-xl drop-shadow-lg w-full"
                onClick={() => {
                  setModalIsOpen(false);
                }}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ServiceForm;
