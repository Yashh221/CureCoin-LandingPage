import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { format } from "date-fns";

const YourDetails = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const custDetails = location.state;
  const [info, setInfo] = React.useState({
    name: custDetails.name,
    phone: "",
    dob: custDetails.dob,
    maritialStatus: "",
    employmentType: "",
  });
  console.log(location)
  // const [verifyKey, setVerifyKey] = React.useState("");
  const { baseUrl } = React.useContext(FormContext);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${baseUrl}/Hospitals/add`,
        {
          name: info.name,
          phone: info.phone,
          dob: info.dob,
          maritialStatus: info.maritialStatus,
          employmentType: info.employmentType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: "include",
        }
      );
      sessionStorage.setItem("employmentType", info.employmentType);
      const json = response.data;
      console.log(json);

      if (json.status === "Success") {
        // setVerifyKey(json.details);
        navigate("/register/verifynumber",{
          state:{verifyKey:json.details,phone:info.phone}
        })
      }
    } catch (err) {
      console.log(err.response);
      showError(err.response.data.message);
    }
  };

  const formatDate = (date) => {
    if(!date)
    return ''
    const parsedDate = new Date(date.replace(/-/g, "/"));
    return format(parsedDate, "dd/MM/yyyy");
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Your Details
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Fill up the details according to your aadhaar card.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <div className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full p-2">
              {info.name}
            </div>
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <input
              type="numeric"
              placeholder="Phone Number"
              name="phone"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={info.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <div className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full p-2">
              {formatDate(info.dob)}
            </div>
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <select
              id="maritialstatus"
              className=" text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-secondary outline-none w-full"
              name="maritialStatus"
              value={info.maritialStatus}
              onChange={handleChange}
              // defaultValue='0'
              required
            >
              <option value="" selected disabled>
                Maritial Status
              </option>
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
            </select>
          </div>

          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
          <select
                id="employmenttype"
                className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-secondary outline-none w-full"
                name="employmentType"
                // defaultValue='0'
                value={info.employmentType}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled>
                  Employment Type
                </option>
                <option value="Salaried">Salaried</option>
                <option value="Self-employed">Self-employed</option>
              </select>
            
          </div>
          <button
          type="submit"
            className="w-[150px] h-[40px] mt-[40px] mb-[80px] font-bold font-sans text-tertiary hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600 bg-red-600 hover:bg-tertiary text-xl"
          >
            Next
          </button>
        </form>
      </div>
      <ToastContainer/>-
    </React.Fragment>
  );
};

export default YourDetails;
