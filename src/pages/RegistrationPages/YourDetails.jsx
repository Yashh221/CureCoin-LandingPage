import React from "react";
import VerifyPhnNumber from "./VerifyPhnNumber";

const YourDetails = ({ showDetails }) => {
  const [showDetailsForm, setShowDetailsForm] =
    React.useState(showDetails);
    const [showVerifyNumber, setshowVerifyNumber] = React.useState(false)
    const handleNextForm = () => {
        setShowDetailsForm(false)
        setshowVerifyNumber(true)
    }
  return (
    <React.Fragment>
      {showDetailsForm && (
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Your Details
            </span>
            <span className="text-lg tracking-wider">
            Fill up the details according to your aadhaar card.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="text"
                placeholder="Name"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="numeric"
                placeholder="Phone Number"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Date of Birth"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Maritial Status"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Employment Type"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button className="w-[150px] h-[40px] mt-[40px] mb-[60px] font-bold font-sans text-tertiary hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600 bg-red-600 hover:bg-tertiary text-xl" 
          onClick={handleNextForm}>
            Next
          </button>
        </div>
      )}
      {
        showVerifyNumber && <VerifyPhnNumber showVerifyNumber={showVerifyNumber}/>
      }
    </React.Fragment>
  );
};

export default YourDetails;
