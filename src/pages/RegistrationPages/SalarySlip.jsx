import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FormContext } from "../../Contexts/FormContext";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import axios from "axios";
import SpinFC from "antd/es/spin";
const SalarySlip = () => {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState("");
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const { baseUrl } = React.useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile === "") {
      toast.error("Select a file", { position: "top-right" });
      return;
    }
    const formdata = new FormData();
    formdata.append("salary", selectedFile);
    setIsSubmitting(true)
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/addsalary`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
        navigate("/registered");
        },1000)
      }
    } catch (err) {
      setIsSubmitting(false)
      showError(err.response.data.message);
    }
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
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
            Salary Slip
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Provide last 3 month salary slip.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center h-[175px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="h-[130px] w-auto" />
            ) : (
              <label
                htmlFor="salaryslip"
                className="cursor-pointer text-tertiary text-base sm:text-lg tracking-wide"
              >
                Choose File
              </label>
            )}
            <input
              type="file"
              id="salaryslip"
              className="hidden"
              onChange={handleChange}
              // required
            />
          </div>
          <button
            type="submit"
            className="w-[150px] h-[40px] mt-[20px] font-bold mb-[80px] sm:mb-[120px] text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-xl"
          >
            Finish
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default SalarySlip;
