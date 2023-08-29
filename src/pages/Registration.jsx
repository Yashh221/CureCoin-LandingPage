import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import checkImg from "./../assets/check.svg";
import thumbImg from "./../assets/thumb.svg";
import medicineImg from "./../assets/medicine.svg";
import ProgressBar from "../Components/ProgressBar";
import { FormContext } from "../Contexts/FormContext";


const Registration = ({children}) => {
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
    const [isScrolled, setIsScrolled] = React.useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  //eslint-disable-next-line
  const {currentStep} = React.useContext(FormContext)
  return (
    <React.Fragment>
      <header className={`w-full fixed  ${isScrolled ? "top-[-75px] " : "top-0"}`}
        style={{ transition: "top 0.3s" }}>
        <Header />
      </header>
      <main className="grid grid-rows-3 mt-[75px]" style={{gridTemplateRows:"auto 6px auto"}}>
        <div className="grid sm:grid-cols-3 grid-cols-1">
            <div className="bg-primary text-tertiary w-full hidden sm:flex justify-start p-[70px] ">
                <span>
                    <ProgressBar currentStep={currentStep}/>
                </span>
            </div>
            <div className="bg-secondary pt-[40px] sm:pt-[80px] px-[20px] sm:px-[100px] sm:col-span-2 col-span-1">
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
