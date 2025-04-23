"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import { Star } from 'lucide-react';
function moviecard() {
    // const pathname = usePathname()
    // const { movieid } = useParams()
    const moviedetails = {
            "_id": "65101a2acc5b257e6f2816a5",
            "title": "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
            "description": "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society.",
            "portraitImgUrl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kesari-chapter-2-the-untold-story-of-jallianwala-bagh-et00439158-1744618984.jpg",
            "landscapeImgUrl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kesari-chapter-2-the-untold-story-of-jallianwala-bagh-et00439158-1744618984.jpg",
            "rating": 8,
            "genre": [
                "Action",
                "Thriller"
            ],
            "duration": 130,
            "cast": [],
            "crew": [],
            "__v": 0
        }
  return (
    <div>
     <div
  className="relative bg-cover bg-center h-[20%] w-full"
  style={{ backgroundImage: `url(${moviedetails.landscapeImgUrl})` }}
>
  <div className="absolute inset-0 bg-black opacity-60"/>
  <div className="relative z-10 p-6 text-white flex gap-10">
    <div className="img"><img src={moviedetails.portraitImgUrl} alt="image" className='border-0 rounded-2xl'/></div>
    <div className="moviedetails flex flex-col gap-5 w-[50%] pt-7">
    <h1 className="text-4xl font-bold ">{moviedetails.title}</h1>
    <div className="rating bg-gray-700 w-[40%] flex justify-between items-center pr-5 pl-5 p-2 gap-1 border-0 rounded-[5px]" >
      <div className="rating flex gap-1">
      <Star />  
      <p>{moviedetails.rating}/10</p>
      </div>
      <button className='bg-white text-black border-0 rounded-[3px] p-[3px]'>Rate now</button>
    </div>
    </div>
  </div>
</div>
    </div>  
  )
}

export default moviecard
