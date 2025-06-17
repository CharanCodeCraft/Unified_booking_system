"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface Movie {
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

const CreateMoviePage = () => {
  const [movie, setMovie] = useState<Movie>({
    title: "",
    description: "",
    portraitImgUrl: "",
    portraitImg: null,
    landscapeImgUrl: "",
    landscapeImg: null,
    rating: 0,
    genre: [],
    duration: 0,
  });

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Science Fiction",
    "Thriller",
    "Other",
  ];

  const handleGenreChange = (genre: string) => {
    if (movie.genre.includes(genre)) {
      setMovie({
        ...movie,
        genre: movie.genre.filter((selectedGenre) => selectedGenre !== genre),
      });
    } else {
      setMovie({ ...movie, genre: [...movie.genre, genre] });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const uploadImage = async (image: File) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  const handleCreateMovie = async () => {
    try {
      if (
        movie.title === "" ||
        movie.description === "" ||
        movie.rating === 0 ||
        movie.genre.length === 0 ||
        movie.duration === 0
      ) {
        toast.error("Please fill all the fields", {
          position: "top-center",
        });
        return;
      }

      let portraitImgUrl = movie.portraitImgUrl;
      let landscapeImgUrl = movie.landscapeImgUrl;

      if (movie.portraitImg) {
        portraitImgUrl = await uploadImage(movie.portraitImg);
        if (!portraitImgUrl) {
          toast.error("Portrait Image upload failed", {
            position: "top-center",
          });
          return;
        }
      }
      if (movie.landscapeImg) {
        landscapeImgUrl = await uploadImage(movie.landscapeImg);
        if (!landscapeImgUrl) {
          toast.error("Landscape Image upload failed", {
            position: "top-center",
          });
          return;
        }
      }

      const newMovie = { ...movie, portraitImgUrl, landscapeImgUrl };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/createmovie`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovie),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Movie creation successful", data);

        toast.success("Movie Created Successfully", {
          position: "top-center",
        });
      } else {
        console.error("Movie creation failed", response.statusText);
        toast.error("Movie Creation Failed", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("An error occurred during movie creation", error);
    }
  };

 return (
  <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-500 text-center mb-6">Create Movie</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={movie.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Portrait Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setMovie({ ...movie, portraitImg: e.target.files[0] });
            }
          }}
          className="w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Landscape Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setMovie({ ...movie, landscapeImg: e.target.files[0] });
            }
          }}
          className="w-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Rating</label>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="mb-4">
        <p className="text-gray-700 font-semibold mb-2">Select Genres:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {genres.map((genre) => (
            <label key={genre} className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="genre"
                checked={movie.genre.includes(genre)}
                onChange={() => handleGenreChange(genre)}
                className="accent-red-500"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Duration (in minutes)</label>
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          value={movie.duration}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <button
        onClick={handleCreateMovie}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Create Movie
      </button>
    </div>
  </div>
);
}

export default CreateMoviePage;
