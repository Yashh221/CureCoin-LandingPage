import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import axios from "axios";
import SpinFC from "antd/es/spin";

const VerifyAadhar = () => {
  const [otp, setOtp] = React.useState("");
  // const [custDetails, setCustDetails] = React.useState({ name: "", dob: "" });
  const { baseUrl } = React.useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
  let navigate = useNavigate();
  const { handleNextStep } = React.useContext(FormContext);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
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
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
        handleNextStep();
        const newCustDetails = {
          name: response.data.message.name,
          dob: response.data.message.dob,
        };
        // setCustDetails(newCustDetails);
        navigate("/register/yourdetails", { state: newCustDetails });
      },1000)
      }
    } catch (err) {
      setIsSubmitting(false)
      showError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="w-full relative">
      {isOverlay && <div className="white-overlay" />}
        {isSubmitting && (
          <div className="fixed flex justify-center items-center inset-0 bg-white opacity-40 z-50">
            <SpinFC
              size="large"
              color="#306fc7"
              style={{ width: "100%", margin: "auto" }}
            />
          </div>
        )}
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
