"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logo from "@/assets/final-logo.jpg";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [isadminauth, setisadminauth] = useState(false);

  const checkadminauth = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/admin/checklogin",
        {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        setisadminauth(true);
      } else {
        setisadminauth(false);
      }
    } catch {
      console.log("error");
      setisadminauth(false);
    }
  };
  const handlelogut = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/admin/logout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        setisadminauth(false);
      } else {
        setisadminauth(true);
      }
    } catch {
      console.log("error");
      setisadminauth(true);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    checkadminauth();
  }, []);

  return (
    <div>
      <nav className="bg-white text-white flex justify-between items-center px-5 py-1.5 w-[100%] shadow-md max-[900px]:hidden">
        <div className="left text-black bg-white w-[70%] ">
          <img src="/final-logo.jpg" alt="logo" className="h-20" />
        </div>
        <div className="right flex items-center justify-end text-black p-4 h-15 bg-white gap-x-2 max-[900px]:hidden">
          {isadminauth ? (
            <>
              <Link
                href="/pages/createmovie"
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Add Movie
              </Link>
              <Link
                href="/pages/screen"
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Add Screen
              </Link>
              <Link
                href="/pages/schedule"
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Add Schedule
              </Link>
              <Link
                href="/pages/addceleb"
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Add Celeb
              </Link>
              <Link
                href="/auth/signin"
                onClick={handlelogut}
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Logut
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="min-[900px]:hidden">
        <nav className="flex justify-between items-center px-4 py-2 bg-white shadow-md w-full">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="h-10 w-auto" />
            
          </div>
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="flex flex-col bg-white px-4 py-3 gap-2 shadow-md">
            {isadminauth ? (
              <>
                <Link
                  href="/pages/createmovie"
                  className="bg-[#f84464] text-white text-sm font-bold py-1 px-3 rounded"
                >
                  Add Movie
                </Link>
                <Link
                  href="/pages/screen"
                  className="bg-[#f84464] text-white text-sm font-bold py-1 px-3 rounded"
                >
                  Add Screen
                </Link>
                <Link
                  href="/pages/schedule"
                  className="bg-[#f84464] text-white text-sm font-bold py-1 px-3 rounded"
                >
                  Add Schedule
                </Link>
                <Link
                  href="/pages/movie/addceleb"
                  className="bg-[#f84464] text-white text-sm font-bold py-1 px-3 rounded"
                >
                  Add Celeb
                </Link>
                <Link
                href="/auth/signin"
                onClick={handlelogut}
                className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[87px] text-center rounded border border-[#f84464] block items-center justify-center"
              >
                Logut
              </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="bg-[#f84464] text-white text-sm font-bold py-1 px-3 rounded"
                >
                  Login
                </Link>
                
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

