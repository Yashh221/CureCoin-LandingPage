import React from "react";
import VerifyAadhaar from "./VerifyAadhaar";

const Aadhar = () => {
    const[showAadhaar, setShowAadhaar] = React.useState(true)
    const [showVerifyAadhaar, setShowVerifyAadhaar] = React.useState(false);
    
      const handleProceedClick = () => {
        setShowAadhaar(false)
        setShowVerifyAadhaar(true);
      };
    return (
    <React.Fragment>
        {showAadhaar && 
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary">
          <span className="text-3xl tracking-wider  font-semibold">
            Your Aadhaar Number
          </span>
          <span className="text-lg tracking-wider">
            To proceed, please enter your aadhaar number.
          </span>
        </div>
        <form className="py-8">
          <div className="flex h-[45px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              placeholder="Aadhar Number"
              className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
            />
          </div>
        </form>
        <button
          className="w-[150px] h-[40px] mt-[180px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:bg-tertiary text-lg"
          onClick={handleProceedClick}
        >
          Proceed
        </button>
      </div>
}
      {showVerifyAadhaar && <VerifyAadhaar showVerifyAadhaar = {showVerifyAadhaar}/>}
    </React.Fragment>
  );
};

export default Aadhar;
