"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface schedule {
  screenId: string;
  movieId: string;
  showTime: string;
  showDate: string;
}

interface Screen {
  _id: string;
  name: string;
  location: string;
  seats: any[];
  city: string;
  screenType: string;
}

interface Movie {
  _id: string;
  title: string;
  description: string;
  portraitImgUrl: string;
  portraitImg: File | null;
  landscapeImgUrl: string;
  landscapeImg: File | null;
  rating: number;
  genre: string[];
  duration: number;
}

const Page = () => {
  const [schedule, setSchedule] = React.useState<schedule>({
    screenId: "",
    movieId: "",
    showTime: "",
    showDate: "",
  });

  const [city, setCity] = React.useState("");
  const [screens, setScreens] = React.useState<Screen[]>([]);
  const [movies, setMovies] = React.useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`
    );
    const data = await res.json();
    setMovies(data.data);
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  const getScreensByCity = async () => {
    if (city === "") return toast.error("Please select a city");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screensbycity/${city.toLowerCase()}`
    );
    const data = await res.json();
    setScreens(data.data);
  };

  const createSchedule = async () => {
    if (
      !schedule.screenId ||
      !schedule.movieId ||
      !schedule.showTime ||
      !schedule.showDate
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/addmoviescheduletoscreen`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(schedule),
      }
    );

    const data = await res.json();
    if (data.ok) {
      toast.success("Schedule created successfully");
    } else {
      toast.error("Schedule creation failed");
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <ToastContainer />
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        {/* City Search */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            onClick={getScreensByCity}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {/* Screens */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Select a Screen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {screens.map((screen) => (
              <div
                key={screen._id}
                className={`border rounded p-4 cursor-pointer transition duration-300 ${
                  schedule.screenId === screen._id
                    ? "bg-red-100 border-red-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() =>
                  setSchedule({ ...schedule, screenId: screen._id })
                }
              >
                <p className="font-bold">{screen.name}</p>
                <p>{screen.location}, {screen.city}</p>
                <p className="text-sm text-gray-500">{screen.screenType}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Movies */}
        <div className="mb-6">\          <h2 className="text-xl font-semibold mb-2">Select a Movie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {movies.map((movie) => (
              <div
                key={movie._id}
                className={`border rounded p-4 cursor-pointer transition duration-300 ${
                  schedule.movieId === movie._id
                    ? "bg-red-100 border-red-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() =>
                  setSchedule({ ...schedule, movieId: movie._id })
                }
              >
                <p className="font-bold">{movie.title}</p>
                <p className="text-sm text-gray-600">{movie.description}</p>
                <p className="text-sm">Rating: {movie.rating}</p>
                <p className="text-sm">Duration: {movie.duration} min</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time & Date */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="time"
            name="showTime"
            id="showTime"
            onChange={(e) =>
              setSchedule({ ...schedule, showTime: e.target.value })
            }
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="date"
            name="showDate"
            id="showDate"
            onChange={(e) =>
              setSchedule({ ...schedule, showDate: e.target.value })
            }
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <button
          onClick={createSchedule}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Save Schedule
        </button>
      </div>
    </div>
  );
};

export default Page;
