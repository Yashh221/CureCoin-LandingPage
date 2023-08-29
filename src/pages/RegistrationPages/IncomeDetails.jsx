import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const IncomeDetails = () => {
  let navigate = useNavigate();
  const { handleNextStep, baseUrl } = React.useContext(FormContext);
  const [incDetails, setIncDetails] = React.useState({
    monthlyTakeHomeAmount: "",
    exisitingEmi: "",
  });

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        navigate("/register/panverify");
        handleNextStep();
      }
    } catch (err) {
      showError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setIncDetails({ ...incDetails, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="w-full">
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
