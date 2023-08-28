import React from "react";
import {useNavigate} from 'react-router-dom'
const AddPhoto = () => {
  let navigate = useNavigate()

    return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Add Photo
          </span>
          <span className="text-base sm:text-lg tracking-wider">
          Make sure customer is clearly visible in the captured photo.
          </span>
        </div>
        <form className="py-8">
          {/* <div className="flex h-[45px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              placeholder="Aadhar Number"
              className="text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
            />
          </div> */}
        </form>
        <button
          className="w-[150px] h-[40px] mt-[100px] sm:mt-[180px] mb-[60px] sm:mb-0 font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
          onClick={()=>navigate("/register/address")}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddPhoto;
