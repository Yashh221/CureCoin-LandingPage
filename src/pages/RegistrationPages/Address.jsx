import React from "react";
import VerifyPhnNumber from "./VerifyPhnNumber";
import EmploymentDetails from "./EmploymentDetails";

const YourAddress = ({ showAddress }) => {
  const [showAddressForm, setShowAddressForm] =
    React.useState(showAddress);
    const [showEmploymentDetails, setshowEmploymentDetails] = React.useState(false)
    const handleNextForm = () => {
        setShowAddressForm(false)
        setshowEmploymentDetails(true)
    }
  return (
    <React.Fragment>
      {showAddressForm && (
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Your Address
            </span>
            <span className="text-lg tracking-wider">
            Fill up the details according to your address proof.
            </span>
          </div>
          <form className="py-8">
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
              <input
                type="text"
                placeholder="Addressline 1"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Addressline 2"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Choose State"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="numeric"
                placeholder="Pincode"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
              <input
                type="text"
                placeholder="Residence Type"
                className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              />
            </div>
          </form>
          <button className="w-[150px] h-[40px] mt-[40px] font-bold font-sans text-tertiary hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600 bg-red-600 hover:bg-tertiary text-xl" 
          onClick={handleNextForm}
        >
            Next
          </button>
        </div>
      )}
      {
        showEmploymentDetails && <EmploymentDetails showEmploymentDetails={showEmploymentDetails}/>
      }
    </React.Fragment>
  );
};

export default YourAddress;
