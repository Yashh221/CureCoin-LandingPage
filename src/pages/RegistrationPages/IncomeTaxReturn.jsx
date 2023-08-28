import React from "react";
import {useNavigate} from 'react-router-dom'
const IncomeTaxRet = ({ showForms }) => {
  let navigate = useNavigate()

  return (
    <React.Fragment>
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Income Tax Return
            </span>
            <span className="text-lg tracking-wider">
            Provide last 1 year income tax return.
            </span>
          </div>
          <form className="py-8">
            <div className="flex justify-center items-center h-[155px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <label
                  htmlFor="addressproof"
                  className="cursor-pointer text-tertiary text-lg tracking-wide"
                >
                  Choose File
                </label>
              <input
                type="file"
                id="addressproof"
                className="hidden"
                required
              />
            </div>
          </form>
          <button
            className="w-[150px] h-[40px] mt-[20px] mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-xl"
            onClick={()=>navigate("/registered")}
          >
            Finish
          </button>
        </div>
    </React.Fragment>
  );
};

export default IncomeTaxRet;
