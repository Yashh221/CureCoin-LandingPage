import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Styles.css";
import { FormContext } from "../../Contexts/FormContext";

import axios from "axios";
import SpinFC from "antd/es/spin";
const AddPhoto = () => {
  let navigate = useNavigate();
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isOverlay, setIsOverlay] = React.useState(false);
  const [imageData, setImageData] = React.useState(null);
  const [stream, setStream] = React.useState(null);
  const { baseUrl } = React.useContext(FormContext);
  const showError = (err) => {
    toast.error(err, {
      position: "top-right",
    });
  };

  React.useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
    // eslint-disable-next-line
  }, []);

  const startCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = newStream;
      setStream(newStream);
    } catch (error) {
      console.log("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/jpeg");
    setImageData(imageData);
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
      setStream(null);
    }
  };

  const retakePhoto = () => {
    setImageData(null);
    startCamera();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageData === "") {
      toast.error("Please Click an Image", { position: "top-right" });
      return;
    }
    const blob = await (await fetch(imageData)).blob();
    const formData = new FormData();
    formData.append("profile", blob);
    setIsSubmitting(true)
    try {
      const response = await axios.post(
        `${baseUrl}/Hospitals/addProfile`,
        formData,
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
          navigate("/register/address");
        }, 1000);
      }
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
      showError(err.message);
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
            Add Photo
          </span>
          <span className="text-base sm:text-lg tracking-wider">
            Make sure customer is clearly visible in the captured photo.
          </span>
        </div>
        <form className="py-8 " onSubmit={handleSubmit}>
          <div className="mx-auto h-[300px] w-[300px] rounded-full border-2 border-solid border-tertiary overflow-hidden">
            {imageData ? (
              <img
                src={imageData}
                alt="Captured_Image"
                style={{ transform: "scaleX(-1)" }}
              />
            ) : (
              <video ref={videoRef} width={640} height={300} autoPlay />
            )}
          </div>
          {!imageData ? (
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="w-[170px] h-[40px] mx-auto mt-[60px] mb-[20px] font-bold text-tertiary hover:text-red-600 bg-transparent border-2 border-tertiary hover:border-2 hover:border-solid hover:border-red-600  text-lg"
                onClick={captureImage}
              >
                Capture Image
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="w-[170px] h-[40px] mt-[60px] mb-[20px] mx-auto font-bold text-tertiary hover:text-red-600 bg-transparent border-2 border-tertiary hover:border-2 hover:border-solid hover:border-red-600  text-lg"
                onClick={retakePhoto}
              >
                Retake Photo
              </button>
            </div>
          )}
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <button
            type="submit"
            className="w-[150px] h-[40px] mt-[20px] sm:mt-[80px] mb-[80px] sm:mb-14 font-bold text-tertiary hover:text-red-600 bg-red-600 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-tertiary text-lg"
          >
            Next
          </button>
        </form>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddPhoto;
