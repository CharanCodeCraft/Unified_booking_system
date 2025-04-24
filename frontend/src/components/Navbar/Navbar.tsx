import React from "react";
import Link from "next/link";

import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Navbar=()=> {
    return (
            <nav className="bg-white text-white flex justify-between items-center px-5 py-2.5">
                <div className="left flex text-black p-4 h-15 bg-white">
                    <img src="/final-logo.jpg" alt="logo" className="h-10" />
                    <div className="searchbox  border border-gray-300 flex items-center bg-white rounded px-4 py-2 ml-2 w-[500px] h-10">
                        <Search className="searchbtn mr-1 text-lg"  />
                        <input type="text" placeholder="Search for movie or show" className="h-10 w-[500px]"/>
                    </div>
                </div>
                <div className="right flex items-center justify-end text-black p-4 h-15 bg-white">
                    <p className="dropdown flex items-center mx-5 cursor-pointer">Bengaluru <ChevronDown className="text-[4px]" /></p>
                    <Link href="/" className="theme_btn1 linkstylenone">Logout</Link> 
                </div> 
            </nav>
    );
}

export default Navbar;