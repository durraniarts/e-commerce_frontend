import React from "react";
import { cartItems } from "../utils";

const OrderSummary = ({ state, shipping }) => {
  const discount = 2.5;
  let amount = 0;

  cartItems.map((item) => (amount += item.amount));

  return (
    <div className="flex flex-col min-w-max lg:w-[22rem]  md:w-[75%] xs:w-full xs:mt-12 lg:mt-0  bg-[#efefef] px-8 py-5 h-[23rem] justify-between rounded-xl items-center">
      <div className=" text-center flex flex-col gap-2">
        <h1 className=" text-lg font-semibold">Order Summary</h1>
        <p className=" text-sm font-semibold">Total Items: {"2"}</p>
      </div>

      <div className="w-full flex  flex-col gap-2 text-sm font-semibold">
        <div className="flex w-full justify-between ">
          <p>Subtotal</p>
          <p>{amount + shipping} PkR</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Coupon Discount</p>
          <p>{discount} PkR</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Shipping</p>
          <p>{shipping} PkR</p>
        </div>
        <div className=" w-[75%] bg-gray-400 h-px self-center m-5" />
        <div className="flex w-full justify-between ">
          <p>Total</p>
          <p>{amount + shipping - discount} PkR</p>
        </div>
      </div>

      <button className=" w-full border border-[#2F9379] rounded-lg px-9 bg-[#2F9379] text-white font-medium py-2 hover:bg-transparent hover:text-[#2F9379] duration-500">
        Continue
      </button>
    </div>
  );
};

export default OrderSummary;
