"use client";

import React from "react";
import Navbar from "../components/NavBar"; // same as addresses
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Column layout: Navbar top, middle row for Sidebar+Content, Footer bottom
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar at top */}
      <Navbar />

      {/* Middle area: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar (left) */}
        <div className="shrink-0">
          <Sidebar />
        </div>

        {/* Main content (right) */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;


