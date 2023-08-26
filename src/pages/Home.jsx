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
import { AiOutlineRight } from "react-icons/ai";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

import Footer from "./Footer";

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

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
      <path fill="#ffffff" d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
    </svg>
  );

  const arrowStyles = {
    color: "#000000",
    width: "30px",
    trasition: "color 0.3s ease",
  };
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: (
      <GrNext
        className=" z-10 ring-1 ring-black hover:ring-[#000000] hover:shadow-md"
        style={arrowStyles}
      />
    ),
    prevArrow: <prevArrow />,
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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
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
    };
  }, []);
  return (
    <div className="w-full">
      {/* Section 1 */}
      <header
        className={`w-full fixed  ${isScrolled ? "top-[-75px] " : "top-0"}`}
        style={{ transition: "top 0.3s" }}
      >
        {" "}
        <Header />
      </header>
      <div className="grid grid-cols-3 w-full">
        <div className="sm:hidden block col-span-3">
          <img src={heroImg} className="w-[100%]" alt="" />
        </div>
        <div className="sm:col-span-1 col-span-3 bg-primary flex flex-col space-y-8 justify-center px-10 pl-12 sm:pt-0 pt-[60px]">
          <h1 className="text-[42px] text-[white] font-[800] font-sans leading-[1.1em] mb-4">
            HEALTH CARE EMPOWERED
          </h1>
          <hr className="w-full bg-[white]" />
          <p className="text-[25px] text-[white] tracking-widest leading-[40px]">
            Transforming <br />
            Healthcare Finance
          </p>
          <hr className="w-full mt-0 bg-[white]" />
          <button className="px-4 py-2 bg-[#F8F7F3] hover:bg-secondary hover:text-white text-primary text-lg max-w-[230px] min-w-[230px] sm:m-0 m-auto mt-12 transition delay-50">
            Get Started
          </button>
        </div>
        <div className="sm:block hidden col-span-2">
          <img src={heroImg} className="w-[100%]" alt="" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-secondary text-[white] py-8">
        {section2Data.map((item, index) => (
          <div className="col-span-1 p-[80px] text-center">
            <div className="flex justify-center">
              <img src={item.img} alt="" className="w-[100px]" />
            </div>
            <p className="flex flex-col text-2xl p-4 font-bold tracking-wide text-center">
              <span className="mr-5">{item.title.split(" ")[0]}</span>
              <span>{item.title.split(" ")[1]}</span>
            </p>

            <p className="text-lg px-5">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      {domLoaded && (
        <div className="container mx-auto px-3 py-8">
          <h1 className="text-[45px] font-normal text-center text-primary tracking-wider">
            SURGERIES MADE AFFORDABLE
          </h1>
          <div className="max-w-[1200px] mx-auto py-8 pb-4">
            <Slider {...Settings} className=" w-full pb-[30px] px-14 sm:px-4">
              <div className="px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5">
                <div
                  className="rounded-full overflow-hidden cursor-pointer relative group"
                  onClick={openLightbox}
                >
                  <img src={carosolImg} className="w-full" alt="" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              </div>
              <div className="px-5">
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
      <div className="bg-primary mt-10 py-12">
        <div className="container mx-auto px-3">
          <h1 className="text-[45px] font-normal text-center text-[white] tracking-wider">
            HEALTHCARE PARTNERS
          </h1>
          <div className="grid grid-cols-4 px-14 py-6">
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5 ">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center p-5 ">
              <img src={partnerImg} className="w-full max-w-[150px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-secondary text-[white] py-[100px]">
        <div className="flex w-full justify-center py-4">
          <img src={quote} alt="quote" className="w-[50px] opacity-40" />
        </div>
        <div className="max-w-screen-xl  py-14 container mx-auto px-3">
          <Slider {...Settings2}>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-3xl tracking-wide">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-xl">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-3xl tracking-wide">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-xl">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-3xl tracking-wide">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center py-3">
                  <p className="text-xl">Claire Brooks, MI</p>
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
