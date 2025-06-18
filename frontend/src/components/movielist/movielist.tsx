"use client"
import { title } from 'process'
import React from 'react'
import { useRouter } from 'next/navigation';
function movielist() {
  const router = useRouter();
  // const cityname = "delhi"
  const [movies, setMovies] = React.useState<any[]>([]);
  const [city, setCity] = React.useState<any>(null);
  // const movielist:any =[
  //   {
  //     id:1,
  //     title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
  //     genre: "Drama/Historical",
  //   },
  //   {
  //     id:2,
  //     title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
  //     genre: "Drama/Historical",
  //   },
  //   {
  //     id:3, 
  //       title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
  //       genre: "Drama/Historical",
  //     }
  // ] 
  const getmovies = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
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
      console.log("error");
    }
  };
  React.useEffect(() => {
    getmovies();
    getuser();
  }, []);
  
  if (!movies) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg font-semibold">Loading movies...</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className='text-3xl font-bold mt-6 ml-6'>Recommended Movies</h1>
      <div className="moviecontainer flex gap-3 m-6 max-[900px]:overflow-x-scroll max-[900px]:gap-3" >
        {movies.map((movie:any,key:number) => (
          <div className="moviecard flex flex-col cursor-pointer min-[900px]:w-[25%]" onClick={()=>{
            router.push(`/${city}/movies/${movie._id}`)
          }}>
          <div className="cardimg "><img src={movie.portraitImgUrl} alt="Movie Image" className='border-0 rounded-2xl' /></div>
          <div className="cardcontent flex flex-col mt-2 max-[900px]:w-[80%]">
              <h2 className="cardtitle font-bold">{movie.title}</h2>
              <p className="cardtext font-light">{movie.genre.join("/")}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
export default movielist
