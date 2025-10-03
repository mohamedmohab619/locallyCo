import React from "react";
import Layout from "./Layout";

const Orders = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center w-full p-6">
        <div className="text-6xl mb-4">😔</div>
        <h2 className="text-2xl font-bold text-gray-800">You have no previous orders</h2>
        <p className="text-gray-600 mt-2 mb-6 max-w-lg">
          We have thousands of items available across our wide range of sellers.
          Start ordering today!
        </p>
        <button className="bg-[#9F580A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#824806] transition">
          CONTINUE SHOPPING
        </button>
      </div>
    </Layout>
  );
};

export default Orders;
