"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { ToastContainer,toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import logo from '@/assets/final-logo.jpg';
import { json } from 'stream/consumers';

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
}


const Signup = () => {
  const router = useRouter();
    const[formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        city:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        //prevent default form submission
        try{
          e.preventDefault();
        if (!formData.email) {
            toast.error('Email is required');
        }
        if (!formData.password) {
          toast.error('Password is required');  
        }
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match'); 
        }
        else{
          const { confirmPassword, city, ...cleanData } = formData;
        const jsondata = JSON.stringify(cleanData);
        console.log(jsondata)
        //send form data to backend
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsondata,
            credentials: 'include',
        });
        const data = await response.json();
        console.log(data.ok)
        if (data.ok) {
          router.push('/auth/signin');
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }
        }
        }
        catch{
          toast.error("something went wrong")
        }
    }

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
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-col1 mb-6">Register</h2>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
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
          </div>
          <button type="submit" className="main_button bg-red-500 text-col1 font-semibold py-2 px-8 text-center no-underline w-fit self-center m-2">
            Register
          </button>

          <p className="authlink self-center my-2 text-gray-500">
            Already have an account? <Link href="/auth/signin" className="text-red-500">login</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup
