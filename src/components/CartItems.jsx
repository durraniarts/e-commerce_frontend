import React from "react";
import { boxImg } from "../assets";
const CartItems = ({
  title,
  subtitle,
  size,
  quantity,
  deliveryTime,
  amount,
  state,
  setState,
  shipping,
}) => {
  return (
    <div className="flex gap-4 xl:flex-row  xs:flex-col  self-start xs:items-center lg:items-start  w-full ">
      <img src={boxImg} className="  lg:w-[250px] xs:w-[290px]" />
      <div className="flex flex-col justify-between xs:h-[17rem] xs:w-[19rem]">
        <div>
          <h2 className=" text-xl font-semibold sm:w-[19rem] ">{title}</h2>
          <h2 className=" text-lg font-semibold ">{subtitle}</h2>
        </div>

        <p className=" text-lg font-medium">
          Size:<span className=" text-base font-light"> {size} ML</span>
        </p>
        <p className=" text-lg font-medium">
          Quantity: <span className=" text-base font-light">{quantity}</span>
        </p>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 26 26"
            fill="none"
            onClick={() => setState(!state)}
          >
            <circle cx="13" cy="13" r="12" stroke="#FFA33D" strokeWidth="2" />
            {state ? <circle cx="13" cy="13" r="7" fill="#FFA33D" /> : null}
          </svg>

          <p>
            {state
              ? "Delivery within 7 days"
              : `Delivery within ${deliveryTime} days`}
          </p>
        </div>
        <div className="flex w-max px-4 py-3 rounded-lg bg-white drop-shadow-box border border-gray-400">
          <p className="text-lg font-medium">Total Amount: </p>
          <span className=" ml-3 text-xl font-medium">
            {state ? amount + shipping : amount + shipping} PkR
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

// {
//   title, subtitle, size, quantity, deliveryTime, amount;
// }
