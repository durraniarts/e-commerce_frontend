import React from "react";
import { carlogo, secondLogo, thirdLogo } from "../assets";

const SpecsSection = () => {
  return (
    <div className=" bg-[url('/src/assets/SVG/specSection.svg')]  ml-[-2px] mt-20 w-full  flex  justify-center bg-cover bg-center bg-no-repeat ">
      <div className=" flex text-white justify-between xl:px-32 xs:px-0 md:py-20 xs:py-16 items-center md:flex-row xs:flex-col xs:gap-8  w-[80%]">
        <div className=" flex  flex-col items-center max-w-[12rem] text-center gap-1">
          <img src={carlogo} width={80} />
          <h3>Free Shipping</h3>
          <p className=" text-xs">Free Delivery pan Pak all orders</p>
        </div>

        <div className=" flex  flex-col items-center max-w-[12rem] text-center gap-1">
          <img src={secondLogo} width={80} />
          <h3>Easy Return</h3>
          <p className=" text-xs">Return product within 7 days of purchase</p>
        </div>

        <div className=" flex  flex-col items-center max-w-[12rem] text-center gap-1">
          <img src={thirdLogo} width={80} />
          <h3>Cash On Delivery</h3>
          <p className=" text-xs ">100% Risk free & secured shopping </p>
        </div>
      </div>
    </div>
  );
};

export default SpecsSection;
