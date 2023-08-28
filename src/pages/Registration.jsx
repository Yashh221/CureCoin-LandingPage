import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import checkImg from "./../assets/check.svg";
import thumbImg from "./../assets/thumb.svg";
import medicineImg from "./../assets/medicine.svg";
import Aadhar from "./RegistrationPages/Aadhar";
import ProgressBar from "../Components/ProgressBar";

const section = [
    {
      title: "Apply Online",
      description:
        "Experience a seamless journey to wellness with CureCoin's partnered hospital. When you visit, simply submit the necessary documents, and our team will carefully review your profile and eligibility. ensuring you receive the care you deserve",
      img: checkImg,
    },
    {
      title: "Get Approved",
      description:
        "Once you have created your profile on the Curecoin app, simply submit the required documents for verification. Our streamlined process ensures that your application is reviewed promptly, and you can expect approval in no time.",
      img: thumbImg,
    },
    {
      title: "Start Treatment",
      description:
        "Congratulations on being approved by Curecoin! With your application successfully processed, you can now proceed with your treatment without any financial worries. Feel confident as you embark on your healthcare journey.",
      img: medicineImg,
    },
  ];

const Registration = ({children}) => {
  const [currentStep, setcurrentStep] = React.useState(1)
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main className="grid grid-rows-3" style={{gridTemplateRows:"auto 6px auto"}}>
        <div className="grid sm:grid-cols-3 grid-cols-1">
            <div className="bg-primary text-tertiary w-full flex justify-start p-[70px] ">
                <span>
                    <ProgressBar currentStep={currentStep}/>
                </span>
            </div>
            <div className="bg-secondary pt-[80px] px-[100px] col-span-2">
                {children}
            </div>
        </div>
        <hr className="bg-[white] w-full h-[5px] z-10"/>
        <div className="grid sm:grid-cols-3 grid-cols-1 bg-primary text-[white] py-8">
        {section.map((item, index) => (
          <div className="col-span-1 p-[25px] lg:p-[80px] text-center">
            <div className="flex justify-center">
              <img src={item.img} alt="" className="w-[100px]" />
            </div>
            <p className="flex flex-col text-2xl p-4 font-bold tracking-wide text-center">
              <span className="mr-5">{item.title}</span>
            </p>
            <p className="text-lg md:px-3">{item.description}</p>
          </div>
        ))}
      </div>   
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Registration;
