import React from "react";
import { useNavigate } from "react-router-dom";

const YourAddress = () => {
  let navigate = useNavigate()

  return (
    <React.Fragment>
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
            <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
              Your Address
            </span>
            <span className="text-base sm:text-lg tracking-wider">
            Fill up the details according to your address proof.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="text"
                placeholder="Addressline 1"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Addressline 2"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Choose State"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="numeric"
                placeholder="Pincode"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Residence Type"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button className="w-[150px] h-[40px] mt-[40px] mb-[80px] font-bold font-sans text-tertiary hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600 bg-red-600 hover:bg-tertiary text-xl" 
          onClick={()=>navigate("/register/employmentdetails")}
        >
            Next
          </button>
        </div>
    </React.Fragment>
  );
};

export default YourAddress;
