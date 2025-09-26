import React from "react";
import Payment from "./payment";
import Receipt from "./Receipt";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { BiSolidBadgeCheck } from "react-icons/bi";
const Checkout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-wrap justify-center gap-5 my-5">
        <div className="px-5  h-24 flex items-center  w-full">
          <h3 className="text-4xl text-brown font-bold flex items-end">
            <span className="flex items-center gap-2">
              <BiSolidBadgeCheck /> Checkout
            </span>
          </h3>
        </div>
        <section className="w-full xl:w-1/3">
          <Payment />
          <button className="bg-brown w-full px-3 py-3 cursor-pointer rounded text-beige text-lg font-bold mt-3">
            Pay Now
          </button>
        </section>
        <section className="w-full xl:w-1/3">
          <Receipt />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
