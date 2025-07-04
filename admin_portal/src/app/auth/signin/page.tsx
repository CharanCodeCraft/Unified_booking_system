"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import logo from "@/assets/final-logo.jpg";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
  password: string;
}

const Signin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Admin Login Successful", {
          position: "top-center",
        });

        // Delay a little to show toast
        setTimeout(() => {
          window.location.href="/pages/createmovie"
        }, 1500);
      } else {
        toast.error(data.message || "Admin Login Failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="authout flex justify-center items-center">
      <ToastContainer />
      <div className="authin flex flex-col md:flex-row w-full max-w-[900px] min-h-[400px] mx-auto shadow-xl bg-white mt-12 rounded-lg overflow-hidden max-[900px]:mt-0 max-[900px]:shadow-none">
        <div className="left w-full md:w-[40%] bg-black overflow-hidden flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-md max-[900px]:hidden">
          <Image src={logo} alt="Logo" className="img w-full h-full" />
        </div>
        <div className="right w-full md:w-[60%] flex justify-center items-center p-6 bg-red-200">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-col1 mb-6">
              Sign In
            </h2>

            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
            >
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full relative">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white p-2 text-sm text-gray-900 w-full border border-gray-500"
                />
              </div>

              <button
                type="submit"
                className="main_button bg-red-500 text-col1 font-semibold py-2 px-8 text-center no-underline w-fit self-center m-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
