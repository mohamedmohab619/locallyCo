import "./Payments.css";
import Link from "next/link";
import { IoReceiptSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
export default function Payments() {
  return (
    <div className="w-full xl:w-[30%]">
      <div className="w-full max-w-md bg-beige rounded-lg  p-10 space-y-4 mx-auto">
        {/* Title */}
        <h2 className="text-xl font-bold text-dark-brown flex gap-1 items-center">
          <IoReceiptSharp /> Order Summary
        </h2>

        {/* Coupon Code */}
        <div className="flex">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border-1 border-light-gray bg-white rounded-l px-3 py-2 text-sm outline-0 focus:border-brown"
          />
          <button className="px-4 py-2 bg-brown text-beige cursor-pointer text-sm font-bold rounded-r-md hover:bg-dark-brown duration-300">
            APPLY
          </button>
        </div>

        {/* Offers */}
        <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-brown bg-white border-1 border-light-gray rounded-md hover:bg-gray-50">
          <span>View Available Offers</span>
          <span>›</span>
        </button>

        {/* Price Details */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal (3 items)</span>
            <span className="text-gray-900 font-medium">EGP 13455.20</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping Fee</span>
            <span className="text-green-600 font-semibold">FREE</span>
          </div>
        </div>

        <hr />

        {/* Total */}
        <div className="flex justify-between text-base font-semibold">
          <span>Total (Inclusive of VAT)</span>
          <span className="text-gray-900">EGP 13455.20</span>
        </div>

        {/* Payment Plan */}
        <div className="p-3  rounded text-sm bg-brown/15 text-brown flex gap-1 items-center flex-wrap">
          <span className="text-2xl font-bold">
            <RiMoneyDollarCircleFill />
          </span>{" "}
          Monthly payment plans from EGP 500.{" "}
          <a
            href="#"
            className="text-dark-brown font-bold hover:underline duration-100"
          >
            View more details
          </a>
        </div>

        {/* Checkout Button */}
        <Link href="/checkout" className="link">
          <button className="w-full py-3 bg-brown text-white font-semibold rounded duration-300 hover:bg-dark-brown cursor-pointer  ">
          CHECKOUT
        </button>
        </Link>
        
      </div>
    </div>
  );
}
