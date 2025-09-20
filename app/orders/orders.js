// Orders.js
// Orders.js
import React from "react";
import Layout from "./Layout";
import Link from "next/link"; // ✅ import Link

const Orders = () => {
  return (
    <Layout>
      <div className="empty-orders">
        <div className="icon">😔</div>
        <h2>You have no previous orders</h2>
        <p>
          We have thousands of items available across our wide range of sellers.
          Start ordering today!
        </p>
        <button className="continue-btn">CONTINUE SHOPPING</button>

        {/* ✅ Add link to Addresses page */}
    <div className="mt-4">
  <Link href="/addresses" className="text-blue-600 underline">
    Go to Addresses
  </Link>
</div>
      </div>
    </Layout>
  );
};

export default Orders;
