import React from "react";
import { Navbar, NavbarBrand, TextInput, Button } from "flowbite-react";
import { HiUser, HiShoppingCart } from "react-icons/hi";
import "./orders.css";
import Sidebar from "../components/Sidebar"; 

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar
        fluid
        style={{ backgroundColor: "#FFEFC1" }}
        className="px-6 shadow-md fixed top-0 left-0 right-0 z-50"
      >
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold text-gray-900">
            Locallyco
          </span>
        </NavbarBrand>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center mx-6 max-w-2xl">
          <TextInput
            type="text"
            placeholder="What are you looking for?"
            className="w-full rounded-l-lg"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button color="gray" pill>
            <HiUser className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Sign In</span>
          </Button>
          <Button color="gray" pill>
            <HiShoppingCart className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </Button>
        </div>
      </Navbar>

      {/* Page Layout */}
      <div className="pt-28 flex">
        {/* ✅ Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <main className="ml-64 flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
