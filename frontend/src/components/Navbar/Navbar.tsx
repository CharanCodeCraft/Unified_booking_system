import React from "react";
import Link from "next/link";

import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Navbar=()=> {
    return (
            <nav className="bg-white text-white flex justify-between items-center px-5 py-1.5">
                <div className="left justify-center items-center flex text-black p-4 h-15 bg-white">
                    <img src="/final-logo.jpg" alt="logo" className="h-25 w-auto" />
                    <div className="searchbox  border border-gray-300 flex items-center bg-white rounded px-4 py-2 ml-2 w-[600px] h-9 gap-x-1.5">
                        <Search className="searchbtn mr-1 text-lg" size={15}  />
                        <input type="text" placeholder="Search for movies, events or shows" className="h-9 w-[600px] outline-none"/>
                    </div>
                </div>
                <div className="right flex items-center justify-end text-black p-4 h-15 bg-white gap-x-2">
                    <p className="dropdown flex items-center mx-5 cursor-pointer text-sm gap-x-3">Bengaluru<ChevronDown height={15} /></p>
                    <Link href="/" className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[67px] text-center rounded border border-[#f84464] block items-center justify-center">Logout</Link> 
                    <Link href="/profile" className='linkstylenone'>
                    <CircleUserRound className='theme_icon1' />
                </Link>
                </div> 
            </nav>
    );
}

export default Navbar;