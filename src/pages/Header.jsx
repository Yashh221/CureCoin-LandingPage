import React from "react";
import Logo from "../assets/Home.png";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(sessionStorage.getItem("headerTab") || "home")

  const handleTab = (tab) =>{
    setSelectedTab(tab)
    sessionStorage.setItem("headerTab",tab)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(()=>
  {
    setSelectedTab(sessionStorage.getItem("headerTab"))
  },[selectedTab])
  return (
    <div className="flex relative justify-between items-center bg-white h-[75px] px-4">
      <div
        className={`sm:pl-6 ${
          isSidebarOpen && window.innerWidth < 768 ? "hidden" : ""
        }`}
      >
        <img
          src={Logo}
          className="max-w-[180px] md:max-w-[250px] w-full"
          alt="logo"
        />
      </div>
      <div className="hidden lg:flex space-x-10 pr-12 2xl:text-lg text-base ">
        <a href="/" className={`${selectedTab === "home" ? "text-[royalblue]" : "text-black"} hover:text-blue-500`} onClick={()=>handleTab("home")}>
          Home
        </a>
        <a href="/" className={`${selectedTab === "about" ? "text-[royalblue]" : "text-black"} hover:text-blue-500`} onClick={()=>handleTab("about")}>
          About
        </a>
        <a href="/" className={`${selectedTab === "partner" ? "text-[royalblue]" : "text-black"} hover:text-blue-500`} onClick={()=>handleTab("partner")}>
          Partner
        </a>
        <a href="/" className={`${selectedTab === "contact" ? "text-[royalblue]" : "text-black"} hover:text-blue-500`} onClick={()=>handleTab("contact")}>
          Contact Us
        </a>
        <a href="/register/aadhaar" className={`${selectedTab === "getstarted" ? "text-[royalblue]" : "text-black"} hover:text-blue-500`} onClick={()=>handleTab("getstarted")}>
          Get Started
        </a>
      </div>
      <button
        className="lg:hidden hover:text-blue-200 fixed right-3"
        onClick={toggleSidebar}
      >
        <Hamburger
          toggled={isSidebarOpen}
          toggle={setIsSidebarOpen}
          size={34}
          color={isSidebarOpen ? "#000000" : "#F3B246"}
          
        />
      </button>
      {isSidebarOpen && (
        <div
          className={`lg:hidden text-2xl  flex flex-col justify-start items-center space-y-7 w-full h-screen md:w-[50%] absolute top-[75px] right-0 bg-white p-4 shadow transform transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Sidebar links */}
          <a href="/" className={`block ${selectedTab === "home" ? "text-[royalblue]" : "text-black"} hover:text-blue-500 my-2 mt-[70px] `} onClick={()=>handleTab("home")}>
            Home
          </a>
          <a href="/" className={`block ${selectedTab === "about" ? "text-[royalblue]" : "text-black"} hover:text-blue-500 my-2`} onClick={()=>handleTab("about")}>
            About
          </a>
          <a href="/" className={`block ${selectedTab === "partner" ? "text-[royalblue]" : "text-black"} hover:text-blue-500 my-2`} onClick={()=>handleTab("partner")}>
            Partner
          </a>
          <a href="/" className={`block ${selectedTab === "contact" ? "text-[royalblue]" : "text-black"} hover:text-blue-500 my-2`} onClick={()=>handleTab("contact")}>
            Contact Us
          </a>
          <a href="/register/aadhaar" className={`block ${selectedTab === "getstarted" ? "text-[royalblue]" : "text-black"} hover:text-blue-500 my-2`} onClick={()=>handleTab("getstarted")}>
            Get Started
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
