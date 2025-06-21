"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import Movielist from "@/components/movielist/movielist";

function moviecard() {
  const pathname = usePathname();
  const movieId = pathname.split("/")[3];
  const [moviedetails, setmoviedetails] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Loader state

  const getmoviedetails = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    setLoading(true);
    getmoviedetails().then((data) => {
      console.log("Movie details fetched successfully:", data);
      setmoviedetails(data.data);
      setLoading(false);
    });
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
      <div
        className="relative bg-cover bg-center h-[20%] w-full"
        style={{
          backgroundImage: `url(${moviedetails.landscapeImgUrl})`,
          objectFit: "fill",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 p-6 text-white flex gap-10 max-[900px]:gap-5">
          <div className="img">
            <img
              src={moviedetails.portraitImgUrl}
              alt="image"
              className="border-0 rounded-2xl w-full h-auto max-w-[250px] object-cover"
            />
          </div>
          <div className="moviedetails flex flex-col gap-5 w-[50%] pt-7 max-[900px]:pt-0 max-[900px]:w-[100%] max-[900px]:gap-3">
            <h1 className="text-4xl font-bold max-[900px]:text-[16px]">
              {moviedetails.title}
            </h1>
            <div
              className="rating w-[40%] flex justify-between items-center pr-5 pl-5 p-2 gap-1 border-0 rounded-[5px] max-[900px]:w-[100%] max-[900px]:p-[8px]"
              style={{ backgroundColor: "#333333" }}
            >
              <div className="rating flex gap-1">
                <Star />
                <p>{moviedetails.rating}/10</p>
              </div>
              <button className="bg-white font-bold text-black border-0 rounded-[3px] p-[10px] max-[900px]:text-[10px] max-[900px]:w-[50%] max-[900px]:p-[2px]">
                Rate now
              </button>
            </div>
            <div className="duration flex gap-2 max-[900px]:gap-1">
              <p>{moviedetails.duration} min</p>
              <p>{moviedetails.genre.join("/")}</p>
            </div>
            <div className="bookticket bg-rose-500 w-[20%] p-2 border-0 cursor-pointer rounded-[5px] font-bold text-center max-[900px]:w-[100%]">
              <Link href={`${pathname}/buytickets`}>Book ticket</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="cast">
        <div className="desc m-5 ml-15 w-[60%] max-[900px]:ml-10 max-[900px]:w-[80%]">
          <h1 className="font-bold text-2xl">About the movie</h1>
          <p className="mt-3">{moviedetails.description}</p>
        </div>
        <hr className="w-[70%] ml-15 opacity-40 max-[900px]:ml-10 max-[900px]:w-[80%]" />

        {moviedetails.cast.length > 0 && (
          <div className="castnames ml-15 m-5 max-[900px]:ml-10">
            <h1 className="font-bold text-2xl mb-5">Cast</h1>
            <div className="imgdiv flex gap-10 max-[900px]:gap-5">
              {moviedetails.cast.map((cast: any) => (
                <div key={cast.celebName} className="imges w-36">
                  <div className="roles flex flex-col justify-center">
                    <img
                      src={cast.celebImage}
                      className="border-0 rounded-full"
                      alt={cast.celebName}
                    />
                    <p className="font-bold text-center">{cast.celebName}</p>
                    <p className="text-center text-gray-500">
                      as {cast.celebRole}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr className="w-[70%] ml-15 opacity-40 max-[900px]:ml-10 max-[900px]:w-[80%]" />

        {moviedetails.crew.length > 0 && (
          <div className="castnames ml-15 m-5 max-[900px]:ml-10">
            <h1 className="font-bold text-2xl mb-5">Crew</h1>
            <div className="imgdiv flex gap-10 max-[900px]:gap-5">
              {moviedetails.crew.map((crew: any) => (
                <div key={crew.celebName} className="imges w-36">
                  <div className="roles flex flex-col justify-center">
                    <img
                      src={crew.celebImage}
                      className="border-0 rounded-full"
                      alt={crew.celebName}
                    />
                    <p className="font-bold text-center">{crew.celebName}</p>
                    <p className="text-center text-gray-500">
                      as {crew.celebRole}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="like">
          <div className="div ml-8">
            <Movielist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default moviecard;
