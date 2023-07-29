import React from "react";
import { facebook, gmail, instagram, logo, phoneIcon } from "../assets";

const Footer = () => {
  return (
    <div className="flex mt-28 h-auto xs:flex-col md:flex-row  xl:px-40 md:px-24 xs:px-20 justify-between items-start xs:py-8 md:py-16 lg:py-36 gap-8">
      <img src={logo} width={90} className="xs:mb-[3rem] md:mb-0" />
      <div className="flex lg:w-[65%] lg:flex-row xs:flex-col justify-between  gap-5">
        <div className=" w-max">
          <h4 className=" text-[#2F9379] font-semibold text-lg mb-4">
            Discover
          </h4>
          <ul>
            <li className=" text-sm leading-8">Home</li>
            <li className=" text-sm leading-8">Our Services</li>
            <li className=" text-sm leading-8">Article</li>
          </ul>
        </div>
        <div className=" w-max">
          <h4 className=" text-[#2F9379] font-semibold text-lg mb-4">
            Learn More
          </h4>
          <ul className=" gap-2 ">
            <li className=" text-sm leading-8">About Us</li>
            <li className=" text-sm leading-8">Privacy Policy</li>
            <li className=" text-sm leading-8">FAQ</li>
            <li className=" text-sm leading-8">Terms & Condition</li>
          </ul>
        </div>
        <div className=" max-w-[15rem]">
          <h4 className=" text-[#2F9379] font-semibold text-lg mb-4">
            Contact
          </h4>
          <p className=" text-sm leading-8">
            Gedung Medical, Jl HR Rasuna Said Kav 1-2 Bl X-5 Menara Karya Lt
            22-23,Kuningan Timur, Jakarta
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col xs:flex-row gap-4  justify-between ">
        <img src={facebook} width={30} />
        <img src={instagram} width={30} />
        <img src={gmail} width={30} />
        <img src={phoneIcon} width={30} />
      </div>
    </div>
  );
};

export default Footer;
