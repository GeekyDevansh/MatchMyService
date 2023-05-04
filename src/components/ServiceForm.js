import React, { useState } from "react";
import Loading from "./Loading";
import {doc,serverTimestamp,addDoc,collection,getDocs, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import toast from "react-hot-toast";
import FormSubmitted from "./FormSubmitted";
import moment from 'moment'

const ServiceForm = ({ setModalIsOpen, setRequest }) => {

  var budget;
  var contact;
  var description;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serviceType, setServiceType] = useState();
  const [service, setService] = useState();

  const user = JSON.parse(localStorage.getItem("user")).user.uid;
  const cName= JSON.parse(localStorage.getItem("user")).user.displayName;

  console.log(budget);

  const [sendData,setSendData] = useState({
    budget: budget,
    customer_name: cName,
    user_id: user,
    created_at: moment().format('MMMM Do YYYY'),
    contact_number:contact,
    description:description,
    service_type:service,
    created: serverTimestamp()
  });
  
  const handleSubmit = async(e) => {
  setLoading(true);
  e.preventDefault();
  try{
    console.log("sendData",sendData);
    setServiceType(" ");
    setSendData((prev)=>({...prev,budget:budget,customer_name:cName,contact_number:contact,description:description,service_type:service}));
    const res=await addDoc(collection(db, "product_data",), {
     sendData
    })
    .then(()=>{ 
    setLoading(false);
    setSuccess(true);})
    .then(()=>{ setTimeout(() => {
      setSuccess(false)
    }, 2500);}
    ).then(()=>{setRequest(true)})
   
   
    
    
  }catch(err){
    console.log(err);
    setLoading(false);
    toast.error("All fields are mandatory.");
    document.getElementById("service-form").reset();
  }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <Loading />{" "}
        </div>
      ) : (
        <div className={`${!success?"block":"hidden"} p-2 flex justify-center items-center`}>
          <form action="POST" onSubmit={handleSubmit} id="service-form" >
            <div className="font-semibold text-2xl flex justify-center items-center md:mb-5 mb-2">
              <h1>Service Request Form</h1>
            </div>

            <div className=" items-center gap-2 mb-4 bg-[#E8E8E8] p-[5%] md:p-[1%] md:h-34  rounded-xl">
              <div className="text-gray-400 mb-2 md:pl-3">Choose service type</div>

              <div className="flex justify-center items-center gap-2 px-2">
                <div>
                  <button
                    type="button"
                    className={`${serviceType==="plumber"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16`}
                    onClick={() => {
                      setServiceType("plumber");
                      setSendData({...sendData,service_type:"Plumber"});
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
                    className={`${serviceType==="carpenter"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16`}
                    onClick={() => {
                      setServiceType("carpenter");
                      setSendData({...sendData,service_type:"Carpenter"});
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
                    className={`${serviceType==="electrician"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16`}
                    onClick={() => {
                      setServiceType("electrician");
                      setSendData({...sendData,service_type:"Electrician"});
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
                    className={`${serviceType==="other"?"border-2 border-gray-900":"border-0 border-transparent"} bg-[#E8E8E8] rounded-xl md:w-20 md:h-20 w-16 h-16`}
                    onClick={() => {
                      setServiceType("other");
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
              {serviceType === "other" && (
                <input
                  type="text"
                  placeholder="Please specify the required service"
                  required={true}
                  value={service}
                  className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
                  onChange={(e)=>setSendData({...sendData,service_type:e.target.value})}
                />
              )}
              <textarea
                type="textarea"
                rows="3"
                cols="50"
                placeholder="Description of service"
                value={description}
                required={true}
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
                onChange={(e)=> setSendData({...sendData,description:e.target.value})}
              />
              <input
                type="number"
                min="500"
                max="500000"
                placeholder="Budget (from &#8377;500 to &#8377;5,00,000)"
                required={true}
                value={budget}
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
                onChange={(e)=> setSendData({...sendData,budget:e.target.value})}
              />
              <input
                type="text" 
                pattern="[6789][0-9]{9}"
                placeholder="Contact Number (10 digit)"
                required={true}
                value={contact}
                className="p-3 bg-gray-200 rounded-xl text-gray-900 w-full "
                onChange={(e)=> setSendData({...sendData,contact_number:e.target.value})}
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
      {success && <div className="flex justify-center items-center " >
          <FormSubmitted/>
      </div>}
    </>
  );
};

export default ServiceForm;
