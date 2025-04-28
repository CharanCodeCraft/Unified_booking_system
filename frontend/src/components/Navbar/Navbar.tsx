"use client";   

import React, { useState } from "react";
import Link from "next/link";

import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import LocationPopup from "@/popups/location/LocationPopup";

const Navbar=({ selectedCity, setShowLocationPopup }: { selectedCity: string, setShowLocationPopup: (value: boolean) => void })=> {
    
    

    return (
           <div>
             <nav className="bg-white text-white flex justify-between items-center px-5 py-1.5 w-[100%] max-[900px]:hidden">
                <div className="left justify-around items-center flex text-black p-4 h-15 bg-white w-[70%] ">
                    <img src="/final-logo.jpg" alt="logo" className="h-20"  />
                    <div className="searchbox  border border-gray-300 flex items-center bg-white rounded px-4 py-2 ml-2 w-[600px] h-9 gap-x-1.5">
                        <Search className="searchbtn mr-1 text-lg" size={15}  />
                        <input type="text" placeholder="Search for movies, events or shows" className="h-9 w-[600px] outline-none "/>
                    </div>
                </div>
                <div className="right flex items-center justify-end text-black p-4 h-15 bg-white gap-x-2 max-[900px]:hidden">
                    <p className="dropdown flex items-center cursor-pointer text-sm md:text-base gap-2 md:gap-3 mx-2 md:mx-5"
                    onClick={() => setShowLocationPopup(true)}
                    >
                        {selectedCity ? selectedCity : "Select City"}
                    <ChevronDown height={15} /></p>
                    <Link href="/auth/signin" className="theme_btn1 linkstylenone no-underline text-white font-bold bg-[#f84464] text-xs h-[25px] leading-[25px] w-[67px] text-center rounded border border-[#f84464] block items-center justify-center">Login</Link> 
                    <Link href="/profile" className='linkstylenone'>
                        <CircleUserRound className='theme_icon1' />
                     </Link>
                </div> 
                {
                /* {
                    showLocationPopup && 
                    <LocationPopup 
                        setShowLocationPopup={setShowLocationPopup}
                        setSelectedCity={setSelectedCity}
                    />
                } */
                }
            </nav>
            
            {/*Mobile Navbar */}
            <div className="nav min-[900px]:hidden flex justify-between items-center px-3 py-2 bg-white shadow-md w-full">
                <div className="left flex  items-center gap-3">
                   
                    <div className="flex flex-col items-center gap-x-3">
                    <Link href="/" className="text-lg font-bold justify-between items-center text-gray-800">Tictopia</Link>
                    <p className="dropdown flex items-center cursor-pointer text-[10px] font-medium text-red-500 "
                         onClick={() => setShowLocationPopup(true)}
    >
                         {selectedCity ? selectedCity : "Select City"}
                        <ChevronDown height={10} className="" />
                    </p>    
                    </div>                   
                    

                    <div className="searchbox flex items-center border border-gray-300 rounded-md px-2 py-1 bg-white w-[150px]">
                        <Search className="text-gray-400" size={14} />
                        <input type="text" placeholder="Search" className="ml-2 text-xs text-gray-600 bg-transparent focus:outline-none w-full"
                        />
                    </div>
                </div>

                <div className="right flex items-center gap-3">
                    <Link href="/auth/signin" className="bg-[#f84464] text-white text-xs font-bold py-1 px-3 rounded-md ">Login</Link>

                    <Link href="/profile" className="text-gray-600">
                        <CircleUserRound size={20} />
                    </Link>
                </div>
            </div>

           </div>
    );
}

export default Navbar;