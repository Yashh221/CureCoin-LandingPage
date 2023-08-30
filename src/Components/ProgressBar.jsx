import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    "Aadhaar Verification",
    "Profile Creation",
    "Pan Card Verification",
    "Document Verification",
    "Congratulations",
  ];

  return (
    <div className="flex flex-col items-center space-y-10 relative">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative flex items-center max-w-[450px] w-full"
        >
          {/* <div> */}
          <div
            className={`w-12 h-12 border-2 border-tertiary rounded-full px-2`}
          >
            {index < currentStep ? (
              <svg
                className="h-12 w-12 pr-[18px] pb-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                />
              </svg>
            ) : (
              ""
            )}
          </div>
          <span className="ml-5 text-tertiary text-left text-xl tracking-wide font-semibold">
            {step}
          </span>
          {/* </div> */}
          {index < steps.length - 1 && (
            <div
              className={`w-2 absolute left-5 top-12 border-2 border-tertiary border-t-0 border-b-0`}
              style={{ height: "calc(100% - 8px )" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
