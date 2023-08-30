import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import { ToastContainer, toast } from "react-toastify";
import State from "../../data/State";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import SpinFC from "antd/es/spin";

const YourAddress = () => {
  let navigate = useNavigate();
  const [location, setLocation] = React.useState({
    line1: "",
    line2: "",
    state: "",
    city: "",
    pincode: "",
    residenceType: "",
  });
  const [cities, setCities] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
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
        `${baseUrl}/Hospitals/addcustloc`,
        {
          line1: location.line1,
          line2: location.line2,
          state: location.state,
          city: location.city,
          pincode: location.pincode,
          residenceType: location.residenceType,
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
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
          sessionStorage.getItem("employmentType") === "Salaried"
            ? navigate("/register/employmentdetails")
            : navigate("/register/incomedetails");
        }, 1000);
      }
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
      showError(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    if (location.state) {
      const selectedState = State.states.find(
        (state) => state.state === location.state
      );
      setCities(selectedState ? selectedState.cities : []);
    } else {
      setCities([]);
    }
  }, [location.state]);

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
            Your Address
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Fill up the details according to your address proof.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              name="line1"
              placeholder="Addressline 1"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={location.line1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <input
              type="text"
              name="line2"
              placeholder="Addressline 2"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={location.line2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <select
              type="text"
              name="state"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-secondary outline-none w-full"
              value={location.state}
              onChange={handleChange}
              required
            >
              <option selected>Choose State</option>
              {State?.states.map((e, key) => {
                return (
                  <option value={e.state} key={key}>
                    {e.state}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <select
              name="city"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-secondary outline-none w-full"
              value={location.city}
              onChange={handleChange}
              required
            >
              <option disabled value="">
                Choose City
              </option>
              {cities.map((city, key) => (
                <option value={city} key={key} className="text-blue">
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <input
              type="numeric"
              name="pincode"
              placeholder="Pincode"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              value={location.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            <select
              type="text"
              placeholder="Residence Type"
              name="residenceType"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-secondary outline-none w-full"
              value={location.residenceType}
              onChange={handleChange}
              required
            >
              <option value="" selected disabled>
                Residence type
              </option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="cottage">Cottage</option>
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
      <ToastContainer />
    </React.Fragment>
  );
};

export default YourAddress;
