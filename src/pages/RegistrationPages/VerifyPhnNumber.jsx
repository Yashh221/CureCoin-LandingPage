import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import axios from "axios";
import SpinFC from "antd/es/spin";
const VerifyPhnNumber = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [otp, setOtp] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
  console.log(location)
  const { baseUrl } = React.useContext(FormContext);

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
        `${baseUrl}/Hospitals/verifyOtp`,
        {
          verifyKey: location.state.verifyKey,
          otp: otp,
          phone: location.state.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );

      const json = response.data;
      console.log(json);

      if (json.status === "success") {
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
        navigate("/register/addphoto");
        },2000)
      }
    } catch (err) {
      setIsSubmitting(false)
      console.log(err)
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
            Verify Phone Number
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Enter the 6-digit code that we sent to your phone number to finish
            your authentication.
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
            type="submit"
            className="w-[150px] h-[40px] mt-[100px] sm:mt-[130px] mb-[80px] sm:mb-0 font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
          >
            Verify
          </button>
        </form>
      </div>
      <ToastContainer/>
    </React.Fragment>
  );
};

export default VerifyPhnNumber;
