import React from "react";
import PanVerify from "./PanVerify";

const IncomeDetails = ({ showIncomeDetails }) => {
  const [showIncomeDetailsForm, setShowIncomeDetailsForm] =
    React.useState(showIncomeDetails);
  const [showPanVerify, setPanVerify] = React.useState(false);

  const handleNextForm = () => {
    setShowIncomeDetailsForm(false);
    setPanVerify(true);
  };
  return (
    <React.Fragment>
      {showIncomeDetailsForm && (
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Income Details
            </span>
            <span className="text-lg tracking-wider">
              Tell us about your income details.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="numeric"
                placeholder="Monthly Take Home Amount"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full mt-3">
              <input
                type="numeric"
                placeholder="Existing Monthly EMISs (if any)"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button
            className="w-[150px] h-[40px] mt-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
            onClick={handleNextForm}
          >
            Next
          </button>
        </div>
      )}
      {showPanVerify && <PanVerify showPanVerify={showPanVerify} />}
    </React.Fragment>
  );
};

export default IncomeDetails;
