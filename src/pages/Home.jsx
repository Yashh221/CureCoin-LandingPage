import React, { useEffect, useState } from "react";
import heroImg from "./../assets/hero.webp";

import checkImg from "./../assets/check.svg";
import thumbImg from "./../assets/thumb.svg";
import medicineImg from "./../assets/medicine.svg";
import Slider from "react-slick";
import carosolImg from "./../assets/carosol2.webp";
import partnerImg from "./../assets/partner.webp";
import Header from "./Header.jsx";
import quote from "../assets/quote.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { BsChevronUp } from "react-icons/bs";

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [upButton, setUpButton] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const prevArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-[40px]">
      <path
        fill="#ffffff"
        d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
      />
    </svg>
  );
  const nextArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path
        fill="#ffffff"
        d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
      />
    </svg>
  );

  const arrowStyles = {
    color: "#000000",
    width: "30px",
    trasition: "color 0.3s ease",
  };
  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 728 ? 4 : 1,
    slidesToScroll: window.innerWidth > 728 ? 4 : 1,
    nextArrow: (
      <GrNext
        className=" z-10 ring-1 ring-black hover:ring-[#000000] hover:shadow-md"
        style={arrowStyles}
      />
    ),
    prevArrow: (
      <GrPrevious
        className=" z-10 ring-1 ring-black hover:ring-[#000000] hover:shadow-md"
        style={arrowStyles}
      />
    ),
  };

  const Settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    arrowStyles: {
      color: "#ffffff",
      width: "40px",
    },
  };

  const section2Data = [
    {
      title: "Apply Online",
      description:
        "Experience a seamless journey to wellness with CureCoin's partnered hospital. When you visit, simply submit the necessary documents, and our team will carefully review your profile and eligibility. ensuring you receive the care you deserve.",
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
  const [isScrolled, setIsScrolled] = useState(false);
  let timeout;

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
      setUpButton(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setUpButton(false), 1000);
    } else {
      setIsScrolled(false);
      setUpButton(false);
    }
  };
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 1 */}
      <header
        className={`w-full fixed  ${isScrolled ? "top-[-75px] " : "top-0"}`}
        style={{ transition: "top 0.3s" }}
      >
        {" "}
        <Header />
      </header>
      <div className="grid grid-cols-3 w-full mt-[75px]">
        <div className="sm:hidden block col-span-3">
          <img src={heroImg} className="w-[100%] h-[300px]" alt="" />
        </div>
        <div className="sm:col-span-1 col-span-3 bg-[royalblue] flex flex-col space-y-8 justify-center text-center sm:text-left tracking-wider px-14 sm:pl-12 sm:pt-0 pt-[60px] pb-14 sm:pb-5">
          <h1 className="text-4xl lg:text-[42px] text-[white] font-[1000] font-sans leading-[1.1em]">
            HEALTH CARE EMPOWERED
          </h1>
          <div className="-mt-1">
            <hr className="bg-[white] mb-3" />
            <p className="text-lg sm:text-xl lg:text-[25px] text-[white] tracking-wider align-top place-content-start sm:tracking-widest t-0 leading- sm:leading-[40px] my-0">
              Transforming <br />
              Healthcare Finance
            </p>
            <hr className="mt-3 bg-[white]" />
          </div>
          <button
            className="px-4 py-2 mb-[50px] sm:mb-4 bg-[#F8F7F3] hover:bg-secondary hover:text-white text-[royalblue] text-base sm:text-lg max-w-[230px] min-w-[230px] sm:m-0 m-auto mt-12 transition delay-50"
            onClick={() => navigate("/register/aadhaar")}
          >
            Get Started
          </button>
        </div>
        <div className="sm:block hidden col-span-2">
          <img src={heroImg} className="w-[100%]" alt="" />
        </div>
      </div>
      {upButton && (
        <div
          className={`w-[60px] h-[60px] bg-[royalblue] fixed transition-opacity duration-300 ease-in right-3 bottom-1/4 border-2 border-[white] border-solid sm:hidden ${
            upButton ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollToTop}
          style={{ transition: "opacity 0.3s ease" }}
        >
          <BsChevronUp size={45} color="#ffffff" className="m-auto mt-1" />
        </div>
      )}

      {/* Section 2 */}
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-secondary text-[white] py-8">
        {section2Data.map((item, index) => (
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

      {/* Section 3 */}
      {domLoaded && (
        <div className="container mx-auto px-3 py-1 sm:py-8">
          <h1 className="text-3xl lg:text-[45px] font-normal py-8 text-center text-[royalblue] tracking-wider">
            SURGERIES MADE AFFORDABLE
          </h1>
          <div className="lg:max-w-[1200px] max-w-[300px] w-full mx-auto py-10 pb-4 ">
            <Slider {...Settings} className="w-full pb-[30px] px-10 sm:px-4">
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="sm:px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img
                    src={carosolImg}
                    className="w-full hover:bg-slate-300"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <Lightbox mainSrc={carosolImg} onCloseRequest={closeLightbox} />
      )}

      {/* Section 4 */}
      <div className="bg-[#155de9] mt-10 py-12">
        <div className="container mx-auto px-3">
          <h1 className="text-3xl lg:text-[45px] font-normal text-center text-tertiary tracking-wider">
            HEALTHCARE PARTNERS
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 px-14 py-6 space-y-7">
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5 ">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center sm:p-5 ">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-secondary text-tertiary py-[70px] sm:py-[100px]">
        <div className="flex w-full justify-center py-4">
          <img src={quote} alt="quote" className="w-[50px] opacity-40" />
        </div>
        <div className="max-w-screen-xl  py-4 sm:py-14 container mx-auto px-10">
          <Slider {...Settings2}>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-lg lg:text-3xl tracking-wide">
                  "Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here."
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-base sm:text-xl">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-lg lg:text-3xl tracking-wide">
                  "Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here."
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-base sm:text-xl">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-lg lg:text-3xl tracking-wide">
                  "Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here."
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-base sm:text-xl">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
