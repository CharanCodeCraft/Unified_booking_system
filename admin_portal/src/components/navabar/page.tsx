"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  const [isadminauth, setisadminauth] = useState(false);
  useEffect(() => {
    checkadminauth();
  }, []);
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
  return (
    <div>
      <nav className="bg-white text-white flex justify-between items-center px-5 py-1.5 w-[100%] max-[900px]:hidden">
        <div className="left text-black bg-white w-[70%] ">
          <img src="/final-logo.jpg" alt="logo" className="h-20" />
        </div>
        <div className="right flex items-center justify-end text-black p-4 h-15 bg-white gap-x-2 max-[900px]:hidden">
          {!isadminauth ? (
            <Link
              href="/auth/signin"
              className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[67px] text-center rounded border border-[#f84464] block items-center justify-center"
            >
              Login
            </Link>
          ) : (
            <>
            <Link
              href="/auth/signin"
              className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[67px] text-center rounded border border-[#f84464] block items-center justify-center"
            >
              Logout
            </Link>
            <Link href="/profile" className="linkstylenone">
              <CircleUserRound className="theme_icon1" />
            </Link></>
          )}
        </div>
      </nav>

      {/*Mobile Navbar */}
      <div className="nav min-[900px]:hidden flex justify-between items-center px-3 py-2 bg-white shadow-md w-full">
        <div className="left flex  items-center gap-3">
          <div className="flex flex-col items-center gap-x-3">
            <Link
              href="/"
              className="text-lg font-bold justify-between items-center text-gray-800"
            >
              Tictopia
            </Link>
          </div>
        </div>

        <div className="right flex items-center gap-3">
          <Link
            href="/auth/signin"
            className="bg-[#f84464] text-white text-xs font-bold py-1 px-3 rounded-md "
          >
            Login
          </Link>

          <Link href="/profile" className="text-gray-600">
            <CircleUserRound size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
