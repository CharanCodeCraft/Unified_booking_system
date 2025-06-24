"use client"; 

import Image from "next/image";
import Movielist from "@/components/movielist/movielist";
import Navbar from "@/components/Navbar/Navbar";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import { useState } from "react";
import React from "react";
import LocationPopup from "@/popups/location/LocationPopup";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";


export default function Home() {

  const [selectedCity, setSelectedCity] = useState<string>('');
  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col min-h-screen">
       {/* <Navbar selectedCity={selectedCity} setShowLocationPopup={setShowLocationPopup} />
      
      {showLocationPopup && (
        <LocationPopup setShowLocationPopup={setShowLocationPopup} setSelectedCity={setSelectedCity} />
      )} */}
     
      <HomeSlider/>
      <Movielist/>
    </div>
  );
}
