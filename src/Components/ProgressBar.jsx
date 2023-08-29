import React from 'react';
import checkImg from "../assets/check.svg"

const ProgressBar = ({ currentStep }) => {
  const steps = ['Aadhaar Verification', 'Profile Creation', 'Pan Card Verification', 'Document Verification','Congratulations'];

  return (
    <div className="flex flex-col items-center space-y-10 relative">
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-center max-w-[450px] w-full">
            {/* <div> */}
          <div
            className={`w-12 h-12 border-2 border-tertiary rounded-full px-2`}
          >
            { index < currentStep ? <img className =" h-12 w-12" src={checkImg} alt="tick"/> : ""}
          </div>
          <span className="ml-5 text-tertiary text-left text-xl tracking-wide font-semibold">{step}</span>
                      {/* </div> */}
          {index < steps.length - 1 && (
            <div
              className={`w-2 absolute left-5 top-12 border-2 border-tertiary border-t-0 border-b-0`}
              style={{ height: 'calc(100% - 8px )' }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
