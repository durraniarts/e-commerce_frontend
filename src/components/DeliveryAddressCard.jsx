import React from "react";

const DeliveryAddressCard = () => {
  const address = "Pak avenue line no 10 opposite fried town Sahiwal";

  return (
    <div className=" w-full px-8 py-5 bg-white flex flex-col drop-shadow-box rounded-md mt-14 gap-4 ">
      <div className="flex items-center justify-between font-medium">
        <h2 className=" text-lg">Delivery Address</h2>
        <p className=" text-[#F3692E] text-sm cursor-pointer font-medium">
          Change
        </p>
      </div>
      <p className="font-medium">{address}</p>
    </div>
  );
};

export default DeliveryAddressCard;
