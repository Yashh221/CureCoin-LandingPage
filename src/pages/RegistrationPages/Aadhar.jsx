import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import { FormContext } from "../../Contexts/FormContext";
import axios from "axios";
import SpinFC from "antd/es/spin";

const Aadhar = () => {
  let navigate = useNavigate();
  const [aadhaar, setAadhaar] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
  const { baseUrl } = React.useContext(FormContext);
  const showError = (response) => {
    toast.error(response, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/adhaarotp`,
        {
          aadhaar: aadhaar,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );
      console.log(response.data.message);
      if (response.data.status) {
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
          navigate("/register/verifyaadhaar");
          localStorage.setItem("refid", JSON.stringify(response.data.refid));
        }, 1000);
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
      setIsSubmitting(false);
    }
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
        <div className="flex flex-col space-y-2 text-tertiary">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Your Aadhaar Number
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            To proceed, please enter your aadhaar number.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              placeholder="Aadhar Number"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            // onClick={()=>navigate("/register/verifyaadhaar")}
            className="w-[150px] h-[40px] mt-[80px] mb-[60px] sm:mb-0 sm:mt-[180px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
          >
            Proceed
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Aadhar;
