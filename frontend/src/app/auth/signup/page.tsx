"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import logo from "@/assets/final-logo.jpg";
import { json } from "stream/consumers";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
}

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
  });

  //array for handling errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //prevent default form submission
    e.preventDefault();

    console.log(formData);
    setErrors({});
    // Validation
    if (!formData.email || !formData.password || !formData.name) {
      toast.error("All fields are required", { position: "top-center" });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(formData.email)) {
  toast.error("Please enter a valid email address", { position: "top-center" });
  return;
}
    const { confirmPassword, city, ...cleanData } = formData;
    const jsondata = JSON.stringify(cleanData);
    console.log(jsondata);
    //send form data to backend
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data.ok);
      if (data.ok) {
        toast.success("Registered Successfully", { position: "top-center" });
        router.push("/auth/signin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  return (
    <div className="authout flex justify-center items-center  max-md:items-start min-h-screen">
      <ToastContainer />
      <div className="authin flex flex-col md:flex-row w-full max-w-[900px] min-h-[400px] mx-auto shadow-xl bg-white mt-12 rounded-lg overflow-hidden max-[900px]:mt-0">
        {/* Left Section: Image */}
        <div className="left w-full md:w-[40%] bg-black overflow-hidden flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-md max-[900px]:hidden">
          <Image src={logo} alt="Logo" className="img w-full h-full" />
        </div>

        {/* Right Section: Form */}
        <div className="right w-full md:w-[60%] flex justify-center items-center p-6 bg-red-200">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-col1 mb-6">
              Register
            </h2>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
                {errors.name && (
                  <span className="formerror">{errors.name}</span>
                )}
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
                {errors.email && (
                  <span className="formerror">{errors.email}</span>
                )}
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
                {errors.password && (
                  <span className="formerror">{errors.password}</span>
                )}
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
                {errors.confirmPassword && (
                  <span className="formerror">{errors.confirmPassword}</span>
                )}
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">City</label>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
                {errors.city && (
                  <span className="formerror">{errors.city}</span>
                )}
              </div>

              <button
                type="submit"
                className="main_button bg-red-500 text-col1 font-semibold py-2 px-8 text-center no-underline w-fit self-center m-2"
              >
                Register
              </button>

              <p className="authlink self-center my-2 text-gray-500">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-red-500">
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
