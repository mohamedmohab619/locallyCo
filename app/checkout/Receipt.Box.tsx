import Image from "next/image";
import React from "react";

const ReceiptBox = () => {
  return (
    <div className="bg-beige p-3 rounded flex items-center gap-7 text-dark-brown my-2">
      <div>
        <Image
          src={"/adidas.png"}
          alt={"receiptImage"}
          width={120}
          height={120}
          className="object-cover w-full h-32 rounded-md mx-2"
        />
      </div>
      <div>
        <p className="font-bold"> Blue Diamond Almonds Lightly Naturel </p>
        <p className="text-dark-gray font-bold">
          size / <span className=" text-brown"> 50g </span>
        </p>
        <p className="text-dark-gray font-bold">
          quantity / <span className=" text-brown"> 5 baskets </span>
        </p>
        <p className="text-dark-gray font-bold">
          price / <span className=" text-brown"> $60 </span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptBox;
