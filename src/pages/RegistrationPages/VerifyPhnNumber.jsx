import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const VerifyPhnNumber = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const verifyKey = location.state.verifyKey;
  const phone = location.state.phone;
  const [otp, setOtp] = React.useState("");

  const { baseUrl } = React.useContext(FormContext);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/verifyOtp`,
        {
          verifyKey: verifyKey,
          otp: otp,
          phone: phone,
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
        navigate("/register/addphoto");
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
