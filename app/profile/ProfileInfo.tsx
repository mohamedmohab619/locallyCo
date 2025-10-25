"use client";

import React, { useState } from "react";

export default function ProfileInfo() {
  const [formData, setFormData] = useState({
    first_name: "",
    birthdate: "",
    governorate: "",
    gender: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    birthdate: "",
    email: "",
    phone: "",
  });

  // Validation functions
  const validateName = (name: string) => {
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return "Name must only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Invalid email format";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!/^(010|011|012|015)\d{8}$/.test(phone)) {
      return "Phone must start with 010, 011, 012, or 015 and be 11 digits";
    }
    return "";
  };

  const validateBirthdate = (birthdate: string) => {
    if (!birthdate) return "Birthdate is required";

    const birth = new Date(birthdate);
    const today = new Date();

    const age =
      today.getFullYear() -
      birth.getFullYear() -
      (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);

    if (age < 7) return "Age must be at least 7 years old";
    if (age > 90) return "Age must be less than 90 years old";

    return "";
  };

  // Handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle submit
  const handleSubmit = () => {
    const newErrors = {
      first_name: validateName(formData.first_name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      birthdate: validateBirthdate(formData.birthdate),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Profile updated successfully ✅");
      console.log(formData);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Hello, {formData.first_name || "UserName"}</h1>
        <p>View and update your profile</p>
      </div>

      <div className="shadow-xl bg-[#fffcf2]  rounded-2xl">
        {/* Personal Info */}
        <div className="p-6">
          <h2 className="py-4">Personal Information</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
              {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
            </div>

            {/* Birthdate */}
            <div>
              <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
                Birthdate
              </label>
              <input
                type="date"
                id="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              {errors.birthdate && <p className="text-red-500 text-sm">{errors.birthdate}</p>}
            </div>

            {/* Governorate */}
            <div>
              <label htmlFor="governorate" className="block mb-2 text-sm font-medium text-gray-900">
                Governorate
              </label>
              <select
                id="governorate"
                value={formData.governorate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Choose a governorate</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Red Sea">Red Sea</option>
                <option value="Beheira">Beheira</option>
                <option value="Fayoum">Fayoum</option>
                <option value="Gharbia">Gharbia</option>
                <option value="Ismailia">Ismailia</option>
                <option value="Menofia">Menofia</option>
                <option value="Minya">Minya</option>
                <option value="Qaliubiya">Qaliubiya</option>
                <option value="New Valley">New Valley</option>
                <option value="Suez">Suez</option>
                <option value="Aswan">Aswan</option>
                <option value="Assiut">Assiut</option>
                <option value="Beni Suef">Beni Suef</option>
                <option value="Port Said">Port Said</option>
                <option value="Damietta">Damietta</option>
                <option value="Sharkia">Sharkia</option>
                <option value="South Sinai">South Sinai</option>
                <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                <option value="Matrouh">Matrouh</option>
                <option value="Luxor">Luxor</option>
                <option value="Qena">Qena</option>
                <option value="North Sinai">North Sinai</option>
                <option value="Sohag">Sohag</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Choose gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6">
          <h2 className="py-4">Contact Information</h2>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="01123456789"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Save button */}
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 text-white bg-[#5C0B00] hover:bg-[#94492e] hover:text-white 
           font-medium rounded-2xl text-lg px-5 py-3"
      >
        Update Information
      </button>
    </div>
  );
}
