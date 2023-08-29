import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const VerifyAadhar = () => {
  const [otp, setOtp] = React.useState("");
  const [custDetails, setCustDetails] = React.useState({ name: "", dob: "" });
  const { baseUrl } = React.useContext(FormContext);
  let navigate = useNavigate();
  const { handleNextStep } = React.useContext(FormContext);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/adhaarVerify`,
        {
          otp: otp,
          refid: JSON.parse(localStorage.getItem("refid")),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );
      if (response.data.status === "Valid") {
        handleNextStep();
        setCustDetails({
          name: response.data.message.name,
          dob: response.data.message.dob,
        });
        console.log(custDetails)
        navigate("/register/yourdetails", { state: custDetails });
      }
    } catch (err) {
      showError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Verify Aadhaar Number
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Enter the otp code that is sent to your phone number associated with
            aadhar number.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="numeric"
              placeholder="OTP"
              name="otp"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={otp}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-[150px] h-[40px] mt-[100px] mb-[80px] sm:mb-0 sm:mt-[148px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-red-600 hover:border-2 hover:bg-tertiary text-lg"
            type="submit"
          >
            Verify
          </button>
        </form>
      </div>
      <ToastContainer/>
    </React.Fragment>
  );
};

export default VerifyAadhar;
