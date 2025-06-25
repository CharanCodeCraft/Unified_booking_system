"use client";
import React from "react";
import Select from "react-select";
//import '../popup.css'
import axios from "axios";
import { toast } from "react-toastify";
const LocationPopup = ({
  setShowLocationPopup,
  setSelectedCity,
}: {
  setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [cities, setCities] = React.useState<any[]>([]);

  // const [selectedCity, setSelectedCity] = React.useState<any>(null)

  const getcities = async () => {
    const indianCities = [
      "Jabalpur",
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Surat",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
      "Bhopal",
      "Visakhapatnam",
      "Pimpri-Chinchwad",
      "Patna",
      "Vadodara",
    ];

    const cities = indianCities.map((city) => {
      return {
        label: city,
        value: city,
      };
    });

    setCities(cities);
  };

  React.useEffect(() => {
    getcities();
  }, []);
  const changecity = async (selectedCity: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/changecity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ city: selectedCity }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        toast.success("City changed successfully", {
          position: "top-center",
        });
      } else {
        toast.error("City change failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error during city change:", error);
    }
  };
  function handleSave(selectedCity: string) {
    setSelectedCity(selectedCity);
    changecity(selectedCity);
    setShowLocationPopup(false);
  }

  return (
    <div className="popup-bg fixed top-0 left-0 w-full h-full bg-opacity-50 z-100 flex justify-center items-center">
      <div className="popup-cont w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[15%] bg-white rounded-lg shadow-md border-0 flex flex-col justify-center items-center gap-5 py-6 relative">
        <button
          onClick={() => setShowLocationPopup(false)}
          className="absolute top-0 right-3 text-4xl text-gray-500 hover:text-black"
        >
          ×
        </button>
        <select
          className="select text-black w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] rounded-2xl shadow-md border-0 outline-none py-2 px-5 text-base sm:text-lg md:text-xl cursor-pointer"
          onChange={(e) => {
            handleSave(e.target.value);
          }}
        >
          <option className="text-[1.2rem]" value="" disabled selected>
            Select your city
          </option>
          {cities.map((city: any) => {
            return (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            );
          })}
        </select>

        {/* <div className='font-bold bg-red-500 text-white text-xs sm:text-sm md:text-base h-[25px] sm:h-[30px] md:h-[35px] w-[67px] sm:w-[80px] md:w-[100px] text-center rounded'>
                <button className='btn text-white text-[15px] sm:text-[16px] md:text-[18px]'
                    onClick={handleSave}
                >Save</button>
            </div> */}
      </div>
    </div>
  );
};

export default LocationPopup;
