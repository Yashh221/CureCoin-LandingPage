import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormContext } from "../../Contexts/FormContext";
import axios from "axios";

const Aadhar = () => {
  let navigate = useNavigate();
  const [aadhaar, setAadhaar] = React.useState("");
  const { baseUrl } = React.useContext(FormContext);
  const showError = (response) => {
    toast.error(response, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/adhaarotp`,
        {
          aadhaar: aadhaar,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: "include",
        }
      );
      console.log(response.data.message);
      if (response.data.status) {
        navigate("/register/verifyaadhaar");
        localStorage.setItem("refid", JSON.stringify(response.data.refid));
      } else {
        toast.error(response.data.message, {
          position: "top-right",
        });
      }
    } catch (err) {
      console.error(err);
      if (err.response.data.message === "Customer already registered") {
        toast.error("Customer already registered", {
          position: "top-right",
        });
      } else {
        showError(err.response.data.message);
      }
    }
  };
  return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Your Aadhaar Number
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            To proceed, please enter your aadhaar number.
          </span>
        </div>
        <form className="py-8"
        //  onSubmit={handleSubmit}
         >
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              placeholder="Aadhar Number"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              // value={aadhaar}
              // onChange={(e) => setAadhaar(e.target.value)}
              // required
            />
          </div>
        </form>
        <button
          // type="submit"
          onClick={()=>navigate("/register/verifyaadhaar")}
          className="w-[150px] h-[40px] mt-[80px] mb-[60px] sm:mb-0 sm:mt-[180px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
        >
          Proceed
        </button>
      </div>
    </React.Fragment>
  );
};

export default Aadhar;
