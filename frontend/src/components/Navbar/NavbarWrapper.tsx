"use client";

import React from 'react';
import Navbar from "./Navbar"; // your navbar component
import LocationPopup from "@/popups/location/LocationPopup"; // your location popup component

const NavbarWrapper = () => {
  const [selectedCity, setSelectedCity] = React.useState<string>("");
  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false);

  return (
    <>
      <Navbar 
        selectedCity={selectedCity} 
        setShowLocationPopup={setShowLocationPopup} 
      />
      {showLocationPopup && (
        <LocationPopup 
          setShowLocationPopup={setShowLocationPopup} 
          setSelectedCity={setSelectedCity} 
        />
      )}
    </>
  );
};

export default NavbarWrapper;
