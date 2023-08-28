import React from "react";
import {useNavigate} from 'react-router-dom'
const IncomeDetails = () => {
  let navigate = useNavigate()

  return (
    <React.Fragment>
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
            <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
              Income Details
            </span>
            <span className="text-base sm:text-lg tracking-wider">
              Tell us about your income details.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="numeric"
                placeholder="Monthly Take Home Amount"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full mt-3">
              <input
                type="numeric"
                placeholder="Existing Monthly EMISs (if any)"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button
            className="w-[150px] h-[40px] mt-[80px] sm:mt-[120px] mb-[80px] sm:mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
            onClick={()=>navigate("/register/panverify")}
          >
            Next
          </button>
        </div>
    </React.Fragment>
  );
};

export default IncomeDetails;
