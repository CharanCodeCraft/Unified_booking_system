"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import DatePicker from "react-horizontal-datepicker";
import Link from "next/link";
import { usePathname } from "next/navigation";
function screenslist() {
  const pathname = usePathname();
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const movie = {
    moviename: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
    screen: "4Dx",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 3",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="screencontainer m-10">
        <div className="moviedetails mb-5">
          <h1 className="text-3xl font-bold">{movie.moviename}</h1>
        </div>
        <hr />
        <div className="dateshow mt-5 mb-5">
          <DatePicker
            getSelectedDay={(date: any) => {
              setSelectedDate(date);
            }}
            endDate={5}
            selectDate={selectedDate}
            labelFormat={"MMMM"}
            color={"rgb(248, 68, 100)"}
          />
        </div>
        <hr />
      </div>
      <div
        className="screens mt-5 w-[100%] p-5"
        style={{ backgroundColor: "#F5F5F5" }}
      >
      {movie.screens.map((screen) => {
        return (
          <div className="screen1 m-auto p-3 flex justify-between items-center w-[90%] bg-white" style={{ borderBottom: "2px solid #F5F5F5"}}>
        <div className="screendetailes">
          <h1 className="text-2xl font-bold">{screen.name}</h1>
          <p>{screen.location}</p>
        </div>
        <div className="selectbtn bookticket bg-rose-500 w-[10%] h-8  border-0 cursor-pointer rounded-[5px] font-bold text-center text-white">
          <Link href={`${pathname}/${screen.name}`} className="cursor-pointer">Select</Link>
        </div>
      </div>)
      })}
      </div> 
    </div>
  );
}

export default screenslist;
