'use client';

import React, { useState } from "react";
import Image from "next/image";
import "./SignUp.css"; 
import signUpandInImage from "../../public/OBJECTS[1].png";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
    console.log("Number:", number);
    console.log("Address:", address);
    console.log("Governorate:", governorate);
    console.log("Date of Birth:", dob);
  };

  return (
    <div className="signup-wrapper ">
      <div className="signup-container">
        <Link href="/" className="link text-blue-700">Home</Link>
        <h2 className="mx-5">Sign up</h2>
        <p className="slogan mx-2">Fashion never been easier.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-scroll">
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email" className="mx-5">Email</label>
              <input
                className="mx-5"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password" className="mx-5">Password</label>
              <input
                className="mx-5"
                type="password"
                id="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <small className="mx-5">Must be at least 8 characters.</small>
            </div>

            {/* Gender */}
            <div className="input-group">
              <label htmlFor="gender" className="mx-5">Gender</label>
              <select
                className="mx-5"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Number */}
            <div className="input-group">
              <label htmlFor="number" className="mx-5">Phone Number</label>
              <input
                className="mx-5"
                type="tel"
                id="number"
                placeholder="Enter your phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>

            {/* Address */}
            <div className="input-group">
              <label htmlFor="address" className="mx-5">Address</label>
              <input
                className="mx-5"
                type="text"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            {/* Governorate */}
            <div className="input-group">
              <label htmlFor="governorate" className="mx-5">Governorate</label>
              <input
                className="mx-5"
                type="text"
                id="governorate"
                placeholder="Enter your governorate"
                value={governorate}
                onChange={(e) => setGovernorate(e.target.value)}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="input-group">
              <label htmlFor="dob" className="mx-5">Date of Birth</label>
              <input
                className="mx-5"
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Create account</button>
        </form>

        <p className="text-with-lines">OR</p>

        <div className="social-buttons">
          <button>Google</button>
          <button>Facebook</button>
          <button>Apple</button>
        </div>

        <div className="alternate-login ">
            <p className="mx-5">
              Already have an account ? <Link href="/SignIn" className="link"> Log in</Link>
            </p>
        </div>
      </div>

      <div className="signup-image">
        <Image src={signUpandInImage} alt="SignUpImage" />
      </div>
    </div>
  );
}

