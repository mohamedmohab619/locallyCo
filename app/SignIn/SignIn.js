'use client';

import React, { useState } from "react";
import Image from "next/image";
import "./SignIn.css"; // make sure this file exists in the same folder
import signUpandInImage from "../../public/OBJECTS[1].png";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <h2 className="mx-5">Sign In</h2>
        <p className="slogan mx-2">Fashion never been easier.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="mx-5">Email</label>
            <input className="mx-5"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="mx-5">Password</label>
            <input className="mx-5"
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <small className="mx-5">Must be at least 8 characters.</small>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="text-with-lines">OR</p>

        <div className="social-buttons">
          <button>Google</button>
          <button>Facebook</button>
          <button>Apple</button>
        </div>

        <div className="alternate-login">
            <p className="mx-5">
              Don&apos;t have an account ? <Link href="/" className="link">Sign up</Link>
            </p>
        </div>
      </div>

      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 3C21 1.9 20.1 1 19 1H3C1.9 1 1 1.9 1 3M21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3M21 3L11 10L1 3" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div className="signin-image">
        <Image src={signUpandInImage} alt="SignInImage" />
      </div>
    </div>
  );
}

