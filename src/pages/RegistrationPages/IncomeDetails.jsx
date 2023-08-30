import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import axios from "axios";
import SpinFC from "antd/es/spin";
const IncomeDetails = () => {
  let navigate = useNavigate();
  const { handleNextStep, baseUrl } = React.useContext(FormContext);
  const [incDetails, setIncDetails] = React.useState({
    monthlyTakeHomeAmount: "",
    exisitingEmi: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);

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
        `${baseUrl}/Hospitals/addincome`,
        {
          monthlyTakeHomeAmount: incDetails.monthlyTakeHomeAmount,
          exisitingEmi: incDetails.exisitingEmi,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );
      if (response.data.status === "success") {
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
        navigate("/register/panverify");
        handleNextStep();
        },1000)
      }
    } catch (err) {
      setIsSubmitting(false)
      console.log(err)
      showError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setIncDetails({ ...incDetails, [e.target.name]: e.target.value });
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
            Income Details
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Tell us about your income details.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="numeric"
              name="monthlyTakeHomeAmount"
              placeholder="Monthly Take Home Amount"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={incDetails.monthlyTakeHomeAmount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full mt-3">
            <input
              type="numeric"
              name="exisitingEmi"
              placeholder="Existing Monthly EMISs (if any)"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={incDetails.exisitingEmi}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-[150px] h-[40px] mt-[80px] sm:mt-[120px] mb-[80px] sm:mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default IncomeDetails;
