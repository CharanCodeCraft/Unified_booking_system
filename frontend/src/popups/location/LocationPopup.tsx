"use client"
import React from 'react'
import Select from 'react-select'
import '../popup.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const LocationPopup = (
   { setShowLocationPopup,
    setSelectedCity,
  }: {
    setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedCity: React.Dispatch<React.SetStateAction<string>>;}
) => {

    const [cities, setCities] = React.useState<any[]>([])


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
            "Vadodara"
        ];

        const cities = indianCities.map((city) => {
            return {
                label: city,
                value: city
            }

        })

        setCities(cities)
    }

    React.useEffect(() => {
        getcities()
    }, [])

    const handleSave = () => {


         setShowLocationPopup(false)
        
    }

    return (
        <div className='popup-bg'>
            <div className='popup-cont'>
                <select
                    className='select'
                    onChange={(e) => {
                        setSelectedCity(e.target.value)
                    }}
                >
                    <option value="" disabled selected>Select your city</option>
                    {
                        cities.map((city: any) => {
                            return <option key={city.value} value={city.value}>{city.label}</option>
                        })
                    }
                </select>

                <div className='font-bold bg-red-500 text-white text-xs h-[25px]  w-[67px] text-center rounded '>
                    <button className='btn text-white text-[15px] '
                    onClick={handleSave}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default LocationPopup