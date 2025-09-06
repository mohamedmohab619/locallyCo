"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  TextInput,
  Button,
} from "flowbite-react";
import { HiSearch, HiShoppingCart, HiUser } from "react-icons/hi";
import Link from "next/link";

export default function NoonNavbar() {
  return (
    <>
      <Navbar
        fluid
        style={{ backgroundColor: '#FFEFC1' }}
        className="px-6 shadow-md fixed top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold text-gray-900">
            Locallyco
          </span>
        </NavbarBrand>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center mx-6 max-w-2xl">
          <div className="flex w-full">
            <TextInput
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-l-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
     

          {/* Profile */}
          <Button color="gray" pill>
            <HiUser className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Sign In</span>
          </Button>

          {/* Cart */}
          <Button color="gray" pill>
            <HiShoppingCart className="mr-1 h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </Button>
        </div>
      </Navbar>

      {/* Navigation Links below Navbar */}
      <div className="flex gap-10 p-10 text-blue-700 mt-[80px]">
        <p>Navigate to the pages through these links:</p>
        <Link href="/product" className="link">Product</Link>
        <Link href="/SignIn" className="link">SignIn</Link>
        <Link href="/search" className="link">Search</Link>
        <Link href="/SignUp" className="link">SignUp</Link>
        <Link href="/favourites" className="link">Favourites</Link>
        <Link href="/orders" className="link">Orders</Link>
        <Link href="/profile" className="link">Profile</Link>
      </div>
    </>
  );
}
