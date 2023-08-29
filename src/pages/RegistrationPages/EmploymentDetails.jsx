import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FormContext } from "../../Contexts/FormContext";
import axios from "axios";
const EmploymentDetails = () => {
  let navigate = useNavigate();
  const [employDetails, setEmployDetails] = React.useState({
    industryType: "",
    employerName: "",
    workEmail: "",
  });
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
        `${baseUrl}/Hospitals/addemploy`,
        {
          industryType: employDetails.industryType,
          employerName: employDetails.employerName,
          workEmail: employDetails.workEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );
      const json = await response.data;
      console.log(json);
      if (json.status === "success") {
        navigate("/register/incomedetails");
      }
    } catch (err) {
      console.log(err);
      showError(err.response.data.message);
    }
  };
  const handleChange = (e) => {
    setEmployDetails({ ...employDetails, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Employment Details
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Tell us about your employment details.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              name="industryType"
              placeholder="Industry Type"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={employDetails.industryType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <input
              type="text"
              name="employerName"
              placeholder="Employer Name"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={employDetails.employerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <input
              type="text"
              name="workEmail"
              placeholder="Work Email"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={employDetails.workEmail}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-[150px] h-[40px] mt-[50px] mb-[80px] sm:mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
          >
            Next
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default EmploymentDetails;
