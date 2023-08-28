import React from "react";
import Logo from "../assets/Home.png";

const Footer = () => {
  return (
    <div className="w-full p-10 min-h-[550px] relative">
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-3 justify-center place-items-center px-auto mx-auto py-[95px] sm:text-left text-center">
        <div className="flex items-start h-full pt-4">
          <img src={Logo} className="w-full max-w-[230px] sm:max-w-[300px]" alt="logo" />
        </div>
        <div className="flex flex-col w-full max-w-[400px] text-base sm:text-[22px] sm:px-4 ">
          <div className="block text-secondary font-semibold">Head Office</div>
          <div className="block text-[#155de9]">
            SF223, Second Floor, Marvel Artiza, Oppo to KIMS,
            <br /> Vidyanagar, Hubli
            <a href="mailto:info@storelink.in">
              <u> info@storelink.in</u>
            </a>
          </div>
          <div className="block mt-5 text-[#155de9]">
            <u>Schedule now</u>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[400px] text-base sm:text-[22px] sm:p-3">
          <div className="block text-secondary font-semibold">Inquiries</div>
          <div className="block text-[#155de9]">
            For any inquiries, questions
            <br /> or commendations, please
            <br /> write to us at :<br />
            <a href="mailto:contact@storelink.in">
              <u>contact@storelink.in</u>
            </a>
          </div>
          <div className="block mt-5 text-[#155de9]">
            <u>Contact Us</u>
          </div>
        </div>
      </div>
      <hr className=" bg-secondary h-[2px] absolute right-4 left-4 sm:right-10 sm:left-10 bottom-8 md:bottom-12" />
      <div className="absolute text-secondary bottom-2 md:bottom-4 sm:ml-12 text-[12px] sm::text-lg">
        © 2023 Storelink. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
