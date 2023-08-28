import React from "react";
import AddPhoto from "./AddPhoto";

const VerifyPhnNumber = ({ showVerifyNumber }) => {
  const [showVerifyNumberForm, setShowVerifyNumberForm] =
    React.useState(showVerifyNumber);
  const [showAddPhoto, setshowAddPhoto] = React.useState(false);

  const handleNextForm = () => {
    setShowVerifyNumberForm(false);
    setshowAddPhoto(true);
  };
  return (
    <React.Fragment>
      {showVerifyNumberForm && (
        <div className="w-full">
          <div className="flex flex-col space-y-2 text-tertiary pr-10">
            <span className="text-3xl tracking-wider  font-semibold">
              Verify Phone Number
            </span>
            <span className="text-lg tracking-wider">
              Enter the 6-digit code that we sent to your phone number to finish
              your authentication.
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
          <button
            className="w-[150px] h-[40px] mt-[130px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
            onClick={handleNextForm}
          >
            Verify
          </button>
        </div>
      )}
      {showAddPhoto && <AddPhoto showAddPhoto={showAddPhoto}/>}
    </React.Fragment>
  );
};

export default VerifyPhnNumber;
