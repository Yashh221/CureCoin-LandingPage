import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyAadhar = ({ showVerifyAadhaar }) => {
 let navigate = useNavigate()
  return (
    <React.Fragment>
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Verify Aadhaar Number
            </span>
            <span className="text-lg tracking-wider">
              Enter the otp code that is sent to your phone number associated
              with aadhar number.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="numeric"
                placeholder="OTP"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button className="w-[150px] h-[40px] mt-[148px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:bg-tertiary text-lg"
          onClick={()=>navigate("/register/yourdetails")}>
            Verify
          </button>
        </div>
    </React.Fragment>
  );
};

export default VerifyAadhar;
