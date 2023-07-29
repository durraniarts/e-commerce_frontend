import React, { useState } from "react";
import { logo, arrow, search, cart } from "../assets";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const styles = {
    transform: dropDown && "rotate(180deg)",
  };

  return (
    <div className=" flex justify-between px-8 pt-8  h-auto items-center w-full ">
      <img src={logo} width={80} alt="logo" />
      <ul className="flex gap-5 font-medium xs:hidden xl:flex  ">
        <li>Attars</li>
        <li>Bodyspray</li>
        <li>Bakhoor</li>
        <li>Perfume</li>
        <li>Insense sticks</li>
        <li>Islamic Products</li>
        <li>Essential Oil</li>
      </ul>
      {dropDown && (
        <div className="absolute flex-col xs:right-[7rem] sm:right-[17rem] top-20 bg-white w-48 text-left  py-12  z-10 flex items-center rounded-lg drop-shadow-box ">
          <ul className="flex  gap-5 font-medium  xs:block  leading-8 ">
            <li>Attars</li>
            <li>Bodyspray</li>
            <li>Bakhoor</li>
            <li>Perfume</li>
            <li>Insense sticks</li>
            <li>Islamic Products</li>
            <li>Essential Oil</li>
          </ul>
          <button className=" xs:flex sm:hidden  border border-[#2F9379] rounded-full px-9 text-[#2F9379] font-medium  py-2 hover:bg-[#2F9379] hover:text-white duration-500 mt-4">
            Sign in
          </button>
        </div>
      )}
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer xl:hidden mr-4 ">
          <p className=" mr-2 ">Order</p>
          <img
            src={arrow}
            alt="dropdown"
            onClick={() => setDropDown(!dropDown)}
            style={styles}
            className=" duration-300"
          />
        </div>
        <div className="flex gap-3">
          <img src={search} alt="search" className=" cursor-pointer" />
          <img src={cart} alt="cart" className=" cursor-pointer" />
        </div>

        <button className=" sm:flex xs:hidden  border border-[#2F9379] rounded-full px-9 text-[#2F9379] font-medium ml-7 py-2 hover:bg-[#2F9379] hover:text-white duration-500">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
