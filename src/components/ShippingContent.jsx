import React, { useState } from "react";
import DeliveryAddressCard from "./DeliveryAddressCard";
import { cartItems } from "../utils";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import { pentagon, pentagonRight } from "../assets";

const ShippingContent = () => {
  const shippingCode = 400601;
  const [state, setState] = useState(false);
  const shipping = state ? 2.0 + 10.0 : 2.0;

  return (
    <div className=" w-[75%] flex justify-center mt-20 flex-col m-auto items-center  ">
      <img
        src={pentagon}
        className=" lg:w-[8rem] md:w-[6rem] absolute  left-0  top-[25%] z-[-1] "
      />

      <h2 className=" font-semibold">
        Shipping options for{" "}
        <span className=" text-green-600 font-semibold underline">
          {shippingCode}
        </span>
      </h2>
      <DeliveryAddressCard />
      <p className="text-[#F3692E] text-sm cursor-pointer font-medium mt-12 self-start">
        Edit Bag
      </p>
      <div className=" xs:items-center lg:self-start lg:justify-between lg:items-start mt-6 flex w-full lg:flex-row xs:flex-col  ">
        <div className="flex gap-12 flex-col items-center  flex-2 md:w-[60%] sx:w-[100%]">
          {cartItems.map((item) => {
            return (
              <CartItems
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                size={item.size}
                quantity={item.quantity}
                deliveryTime={item.deliveryTime}
                amount={item.amount}
                shipping={shipping}
                state={state}
                setState={setState}
              />
            );
          })}
        </div>
        <OrderSummary state={state} shipping={shipping} />
      </div>
      <img
        src={pentagonRight}
        className=" lg:w-[8rem] md:w-[6rem] absolute right-0 bottom-[-95%] z-[-1] "
      />
    </div>
  );
};

export default ShippingContent;

//         <div className=" text-green-600 font-semibold ml-2 ">
//           {shippingCode}
//           <div className=" h-[2px] w-auto bg-green-600" />
//         </div>
