"use client";

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Screen {
  name: string;
  location: string;
  seats: any[];
  city: string;
  screenType: string;
}

const cities = [
  "Jabalpur", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore",
  "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara"
];

const CreateScreenPage: React.FC = () => {

  const tempseatlayout = [ {
    // platinum
    type: 'platinum',
    rows: [
      {
        // row 2
        rowname: 'H',
        cols: [
          // col 1
          {
            seats: [
              {
                seat_id: '1'
              },
              {
                seat_id: '2'
              },

              {
                seat_id: '3'
              },
              {
                seat_id: '4'
              },
              {
                seat_id: '5'
              },
              {
                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      },
      {
        rowname: 'G',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      },
      {
        // row 2
        rowname: 'F',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      }
    ],
    price: 500
  },
  {
    // gold
    type: 'gold',
    rows: [
      {
        // row 2
        rowname: 'E',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      },
      {
        rowname: 'D',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      },
      {
        // row 2
        rowname: 'C',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      }
    ],
    price: 300
  },
  {
    // silver - 20 objects
    type: 'silver',
    rows: [
      {
        rowname: 'B',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      },
      {
        // row 2
        rowname: 'A',
        cols: [
          // col 1
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
          // col 2
          {
            seats: [
              {


                seat_id: '1'
              },
              {


                seat_id: '2'
              },

              {


                seat_id: '3'
              },
              {


                seat_id: '4'
              },
              {


                seat_id: '5'
              },
              {

                seat_id: '6'
              },
              {


                seat_id: '7'
              },
              {


                seat_id: '8'
              },
              {


                seat_id: '9'
              },
              {


                seat_id: '10'
              }
            ]
          },
        ]
      }
    ],
    price: 150
  }] 

  const [screen, setScreen] = useState<Screen>({
    name: '',
    location: '',
    seats: tempseatlayout,
    city: '',
    screenType: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setScreen({ ...screen, [name]: value });
  };

  const handleScreenTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScreen({ ...screen, screenType: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!screen.name || !screen.location || !screen.city || !screen.screenType || screen.seats.length === 0) {
        toast.error('Please fill all the fields', { position: "top-center" });
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createscreen`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(screen),
      });

      if (response.ok) {
        toast.success('Screen Created Successfully', { position: "top-center" });
      } else {
        toast.error('Screen Creation Failed', { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!', { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">Create Screen</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={screen.name}
          onChange={handleInputChange}
          className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={screen.location}
          onChange={handleInputChange}
          className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <select
          name="city"
          value={screen.city}
          onChange={handleInputChange}
          className="mb-4 w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Screen Type:</p>
          <div className="flex flex-wrap gap-4">
            {['2D', '3D', '4D', 'IMAX'].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="screenType"
                  value={type}
                  checked={screen.screenType === type}
                  onChange={handleScreenTypeChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
        >
          Create Screen
        </button>
      </form>
    </div>
  );
};

export default CreateScreenPage;
