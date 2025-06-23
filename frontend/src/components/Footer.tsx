"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-bold">Ticktopia</h1>
          <p className="text-sm text-white/80">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {/* <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/admin" className="hover:underline">
            Admin
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
