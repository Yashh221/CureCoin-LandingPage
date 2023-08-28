import React from "react";
import IncomeDetails from "./IncomeDetails";

const EmploymentDetails = ({ showEmploymentDetails }) => {
  const [showEmploymentDetailsForm, setShowEmploymentDetailsForm] =
    React.useState(showEmploymentDetails);
  const [showIncomeDetails, setshowIncomeDetails] = React.useState(false);

  const handleNextForm = () => {
    setShowEmploymentDetailsForm(false);
    setshowIncomeDetails(true);
  };
  return (
    <React.Fragment>
      {showEmploymentDetailsForm && (
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Employment Details
            </span>
            <span className="text-lg tracking-wider">
            Tell us about your employment details.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="text"
                placeholder="Industry Type"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Employer Name"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Work Email"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button
            className="w-[150px] h-[40px] mt-[50px] mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
            onClick={handleNextForm}
          >
            Next
          </button>
        </div>
      )}
      {showIncomeDetails && <IncomeDetails showIncomeDetails={showIncomeDetails}/>}
    </React.Fragment>
  );
};

export default EmploymentDetails;
