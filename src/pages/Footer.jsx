import React from "react";
import Logo from "../assets/Home.png";

const Footer = () => {
  return (
    <div className="w-full p-10 min-h-[550px] relative">
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-3 justify-center place-items-center px-auto mx-auto py-[95px]">
        <div className="flex items-start h-full pt-4">
          <img src={Logo} className="w-[300px]" alt="logo" />
        </div>
        <div className="flex flex-col w-full max-w-[400px] text-[22px] px-4 ">
          <div className="block text-secondary">Head Office</div>
          <div className="block text-primary">
            SF223, Second Floor, Marvel Artiza, Oppo to KIMS,
            <br /> Vidyanagar, Hubli
            <a href="mailto:info@storelink.in">
              <u> info@storelink.in</u>
            </a>
          </div>
          <div className="block mt-5 text-primary">
            <u>Schedule now</u>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[400px] text-[22px] p-3">
          <div className="block text-secondary">Inquiries</div>
          <div className="block text-primary">
            For any inquiries, questions
            <br /> or commendations, please
            <br /> write to us at :<br />
            <a href="mailto:contact@storelink.in">
              <u>contact@storelink.in</u>
            </a>
          </div>
          <div className="block mt-5 text-primary">
            <u>Contact Us</u>
          </div>
        </div>
      </div>
      <hr className=" bg-secondary h-[2px] absolute right-10 left-10 bottom-12" />
      <div className="absolute text-secondary bottom-1 md:bottom-4 ml-12 text-sm md:text-lg">
        © 2023 Storelink. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
