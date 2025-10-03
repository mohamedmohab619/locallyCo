"use client";

import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const OrdersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Middle layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="text-5xl mb-4">😔</div>
            <h2 className="text-2xl font-bold mb-2">You have no previous orders</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We have thousands of items available across our wide range of sellers.  
              Start ordering today!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
              CONTINUE SHOPPING
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrdersPage;
