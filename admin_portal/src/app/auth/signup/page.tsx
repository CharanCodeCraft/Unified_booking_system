"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import logo from '@/assets/final-logo.jpg';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  code:string;
  city: string;
}

const AdminSignup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    code : '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password || !formData.name) {
      toast.error('All fields are required', { position: "top-center" });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', { position: "top-center" });
      return;
    }

    try {
      const { confirmPassword, city, ...cleanData } = formData;

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Admin Registered Successfully', { position: "top-center" });
        router.push('/auth/signin');
      } else {
        toast.error(data.message || 'Registration Failed', { position: "top-center" });
      }

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong', { position: "top-center" });
    }
  };

  return (
    <div className="authout flex justify-center items-center">
      <ToastContainer />
      <div className="authin flex flex-col md:flex-row w-full max-w-[900px] min-h-[400px] mx-auto shadow-xl bg-white mt-12 rounded-lg overflow-hidden max-[900px]:mt-0">
        {/* Left Section: Image */}
        <div className="left w-full md:w-[40%] bg-black overflow-hidden flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-md max-[900px]:hidden">
          <Image src={logo} alt="Logo" className="img w-full h-full" />
        </div>

        {/* Right Section: Form */}
        <div className="right w-full md:w-[60%] flex justify-center items-center p-6 bg-red-200">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-col1 mb-6">Register</h2>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>

              <div className="forminput_cont flex flex-col my-2 gap-2 w-full">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>

              <div className="forminput_cont flex flex-col my-2 gap-2 w-full">
                <label className="font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>

              <div className="forminput_cont flex flex-col my-2 gap-2 w-full">
                <label className="font-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>
              <div className="forminput_cont flex flex-col my-2 gap-2 w-full">
                <label className="font-semibold">code</label>
                <input
                  type="password"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                  className="bg-white p-2 text-sm w-full border border-gray-500"
                />
              </div>

              <button type="submit" className="main_button bg-red-500 text-col1 font-semibold py-2 px-8 text-center no-underline w-fit self-center m-2">
                Register
              </button>

              <p className="authlink self-center my-2 text-gray-500">
                Already an Admin? <Link href="/auth/signin" className="text-red-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
