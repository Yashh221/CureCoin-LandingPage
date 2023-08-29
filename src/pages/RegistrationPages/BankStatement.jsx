import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormContext } from "../../Contexts/FormContext";
import axios from "axios";
const BankStatement = () => {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState("");
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const { baseUrl } = React.useContext(FormContext);

  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("bankstatements", selectedFile);
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/addbankstatements`,
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
        sessionStorage.getItem("employmentType") === "Salaried"
          ? navigate("/register/salaryslip")
          : navigate("/register/incometaxreturn");
      }
    } catch (err) {
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
      <div className="w-full">
        <div className="flex flex-col space-y-2 text-tertiary sm:pr-10">
          <span className="text-2xl sm:text-3xl tracking-wider  font-semibold">
            Bank Statement
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Provide last 3 month bank statement.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center h-[175px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="h-[130px] w-auto" />
            ) : (
              <label
                htmlFor="bankstatement"
                className="cursor-pointer text-tertiary text-base sm:text-lg tracking-wide"
              >
                Choose File
              </label>
            )}
            <input
              type="file"
              id="bankstatement"
              className="hidden"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-[150px] h-[40px] mt-[20px] mb-[80px] sm:mb-[120px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-xl"
          >
            Next
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default BankStatement;
