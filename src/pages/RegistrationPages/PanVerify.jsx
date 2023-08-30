import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../Contexts/FormContext";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import SpinFC from "antd/es/spin";

const PanVerify = () => {
  let navigate = useNavigate();
  const { handleNextStep, baseUrl } = React.useContext(FormContext);
  const [pan, setPan] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
  const showError = () => {
    toast.error("Pan Card Not Valid", {
      position: "top-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile === "") {
      toast.error("Select a file", { position: "top-right" });
      return;
    }
    setIsSubmitting(true)
    const formdata = new FormData();
    formdata.append("pannumber", pan);
    formdata.append("pan", selectedFile);
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/addPan`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: "include",
        }
      );
      console.log(response);
      const json = response.data;
      console.log(json);

      if (json.status === "success") {
        setIsSubmitting(false);
        setIsOverlay(true);
        setTimeout(() => {
          setIsOverlay(false);
        navigate("/register/addressproof");
        handleNextStep();
        },1000)
      }
    } catch (err) {
      setIsSubmitting(false)
      console.log(err);
      showError();
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
            Verify Pan Card
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Verify your pan card.
          </span>
        </div>
        <form className="py-8" onSubmit={handleSubmit}>
          <div className="flex h-[48px] max-w-[650px] border-2 border-solid border-tertiary w-full">
            <input
              type="text"
              name="pannumber"
              placeholder="Pan Card No"
              className="text-base sm:text-lg text-tertiary h-full px-4 placeholder:text-tertiary bg-transparent outline-none w-full"
              onChange={(e) => setPan(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center items-center h-[175px] max-w-[650px] border-2 border-solid border-tertiary w-full my-3">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="h-[130px] w-auto" />
            ) : (
              <label
                htmlFor="pancard"
                className="cursor-pointer text-tertiary text-base sm:text-lg tracking-wide"
              >
                Choose File
              </label>
            )}
            <input
              type="file"
              id="pancard"
              className="hidden"
              onChange={handleChange}
              // required
            />
          </div>
          <button
            type="submit"
            className="w-[150px] h-[40px] mt-[20px] mb-[80px] font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-xl"
          >
            Next
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default PanVerify;
