import React from "react";
import "./orders.css";

const Orders = () => {
  return (
    <div className="orders-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="profile-box">
          <h3>Hala !</h3>
          <p className="email">dnawasany@gmail.com</p>
          <div className="progress">
            <span>Profile Completion 20%</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>

        <ul className="menu">
          <li className="active">Orders</li>
          <li>Returns</li>
          <li>noon Credits</li>
          <li>Wishlist</li>
        </ul>

        <div className="account-section">
          <h4>MY ACCOUNT</h4>
          <ul>
            <li>Profile</li>
            <li>Addresses</li>
            <li>Payments</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="orders-content">
        <div className="empty-orders">
          <div className="icon">😔</div>
          <h2>You have no previous orders</h2>
          <p>
            We have thousands of items available across our wide range of sellers.
            Start ordering today!
          </p>
          <button className="continue-btn">CONTINUE SHOPPING</button>
        </div>
      </main>
    </div>
  );
};

export default Orders;
