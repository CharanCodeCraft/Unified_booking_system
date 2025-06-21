"use client";
import React from "react";
import { useRouter } from "next/navigation";

function movielist() {
  const router = useRouter();
  const [movies, setMovies] = React.useState<any[]>([]);
  const [city, setCity] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true); // loader state

  const getmovies = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      console.error("Failed to fetch movies");
      return [];
    }
    const data = await response.json();
    console.log("Movies fetched successfully:", data);
    setMovies(data.data);
  };

  const getuser = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API + "/auth/getuser",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      setCity(data.data.city);
    } catch {
      console.log("Error fetching user data");
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getmovies(), getuser()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mt-6 ml-6">Recommended Movies</h1>
      <div className="moviecontainer flex gap-4 m-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
        {movies.map((movie: any, key: number) => (
          <div
            key={key}
            className="moviecard snap-start flex-shrink-0 w-[30%] sm:w-[45%] md:w-[30%] lg:w-[20%] cursor-pointer"
            onClick={() => {
              router.push(`/${city}/movies/${movie._id}`);
            }}
          >
            <div className="cardimg">
              <img
                src={movie.portraitImgUrl}
                alt="Movie Image"
                className="border-0 rounded-2xl w-full object-cover aspect-[2/3]"
              />
            </div>
            <div className="cardcontent flex flex-col mt-2">
              <h2 className="cardtitle font-bold text-lg">{movie.title}</h2>
              <p className="cardtext font-light text-sm">
                {movie.genre.join(" / ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default movielist;
