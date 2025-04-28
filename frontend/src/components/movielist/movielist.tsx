"use client"
import { title } from 'process'
import React from 'react'
import { useRouter } from 'next/navigation';
function movielist() {
  const router = useRouter();
  const cityname = "delhi"
  const movielist:any =[
    {
      id:1,
      title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
      genre: "Drama/Historical",
    },
    {
      id:2,
      title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
      genre: "Drama/Historical",
    },
    {
      id:3, 
        title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
        genre: "Drama/Historical",
      }
  ] 
  return (
    <div>
      <h1 className='text-3xl font-bold mt-6 ml-6'>Recommended Movies</h1>
      <div className="moviecontainer flex gap-0.5 m-6 max-[900px]:overflow-x-scroll max-[900px]:gap-3" >
        {movielist.map((movie:any,key:number) => (
          <div className="moviecard flex flex-col cursor-pointer min-[900px]:w-[25%]" onClick={()=>{
            router.push(`/${cityname}/movies/${movie.id}`)
          }}>
          <div className="cardimg "><img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kesari-chapter-2-the-untold-story-of-jallianwala-bagh-et00439158-1744618984.jpg" alt="Movie Image" className='border-0 rounded-2xl' /></div>
          <div className="cardcontent flex flex-col mt-2 max-[900px]:w-[80%]">
              <h2 className="cardtitle font-bold">{movie.title}</h2>
              <p className="cardtext font-light">{movie.genre}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
export default movielist
