import { Navbar, NavbarBrand, TextInput, Button } from "flowbite-react";
import { HiUser, HiShoppingCart } from "react-icons/hi";

export default function ProfileInfo() {
  return (
    <div>
      {/* Navbar */}

      <Navbar
        fluid
        style={{ backgroundColor: "#FFEFC1" }}
        className="px-6  shadow-md fixed top-0 left-0 right-0 z-50"
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
      {/* Page Content */}
      <div className="p-4 pt-36 mx-2 md:ml-64 bg-gray-100">
        <div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p>View and update profile</p>
          </div>

          <div className="shadow-xl bg-white shadow-gray-300 rounded-2xl">
            <div className="p-4 m-3 rounded-2xl">
              <h2 className="py-4">Personal Information</h2>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Birthdate
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">Egypt</option>
                    <option value="CA">Saudi Arabia</option>
                    <option value="FR">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 m-3 rounded-2xl">
              <h2 className="py-4">Contact Information</h2>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-gray-400 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-2xl text-lg px-5 py-4 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
}
