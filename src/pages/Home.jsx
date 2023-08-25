import React, { useEffect, useState } from "react";
import heroImg from "./../assets/hero.webp";

import checkImg from "./../assets/check.svg";
import thumbImg from "./../assets/thumb.svg";
import medicineImg from "./../assets/medicine.svg";
import Slider from "react-slick";
import carosolImg from "./../assets/carosol2.webp";
import partnerImg from "./../assets/partner.webp";
import Header from "./Header.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GrNext, GrPrevious } from "react-icons/gr";
import Footer from "./Footer";

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  const Settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrNext className="text-[white]" />,
    prevArrow: <GrPrevious className="text-[white]" />,
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
      title: "Start Treatement",
      description:
        "Congratulations on being approved by Curecoin! With your application successfully processed, you can now proceed with your treatment without any financial worries. Feel confident as you embark on your healthcare journey.",
      img: medicineImg,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Section 1 */}
      <header className={`w-full transition-transform duration-500 ease-in-out ${
        isScrolled ? "-translate-y-full hidden" : "translate-y-0 fixed"
      }`}>        <Header />
      </header>
      <div className="grid grid-cols-3">
        <div className="sm:hidden block col-span-3">
          <img src={heroImg} className="w-[100%]" alt="" />
        </div>
        <div className="sm:col-span-1 col-span-3 bg-primary flex flex-col space-y-8 justify-center px-10 sm:pt-0 py-6">
          <h1 className="text-[42px] text-[white] font-bold font-sans leading-[1.1em] mb-8">
            HEALTH CARE EMPOWERED
          </h1>
          <hr className="w-full bg-[white]" />
          <p className="text-[22px] text-[white] my-2">
            Transforming <br />
            Healthcare Finance
          </p>
          <hr className="w-full bg-[white]" />
          <button className="px-4 py-2 bg-[#F8F7F3] hover:bg-secondary text-primary text-lg max-w-[230px] min-w-[230px] sm:m-0 m-auto mt-12">
            Get Started
          </button>
        </div>
        <div className="sm:block hidden col-span-2">
          <img src={heroImg} className="w-[100%]" alt="" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-secondary text-[white]">
        {section2Data.map((item, index) => (
          <div className="col-span-1 p-[50px] text-center">
            <div className="flex justify-center">
              <img src={item.img} alt="" className="w-[100px]" />
            </div>
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      {domLoaded && (
        <div className="container mx-auto px-3 mt-10">
          <h1 className="text-[32px] font-semibold text-center text-primary">
            SURGERIES MADE AFFORDABLE
          </h1>
          <div className="">
            <Slider {...Settings} className="mt-[30px] pb-[30px]">
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
              <div className="px-2">
                <div className="rounded-full overflow-hidden">
                  <img src={carosolImg} className="w-full" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      )}

      {/* Section 4 */}
      <div className="bg-primary mt-10 py-10">
        <div className="container mx-auto px-3">
          <h1 className="text-2xl font-semibold text-center text-[white]">
            HEALTHCARE PARTNERS
          </h1>
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={partnerImg} className="w-[100px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-secondary text-[white]">
        <div className=" py-10 container mx-auto px-3">
          <Slider {...Settings2}>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-Medium+/Paragraph/Large">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center">
                  <p className="text-Medium+/Label/Medium">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-Medium+/Paragraph/Large">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center">
                  <p className="text-Medium+/Label/Medium">Claire Brooks, MI</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <p className="md:w-[50%] w-[80%] text-center text-Medium+/Paragraph/Large">
                  Testimonials are a great way to share positive feedback you
                  have received and encourage others to work with you. Add your
                  own here.
                </p>
                <div className="mt-[30px] flex gap-[20px] items-center">
                  <p className="text-Medium+/Label/Medium">Claire Brooks, MI</p>
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
