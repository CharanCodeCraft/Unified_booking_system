"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import DatePicker from "react-horizontal-datepicker";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function screenslist() {
  const pathname = usePathname();
  const params = useParams();
  const { cityname, id } = params;

  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [movie, setMovie] = React.useState<any>({});
  const [screens, setScreens] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  const getmoviedetails = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${id}`,
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

  const getscreens = async () => {
    setLoading(true); // start loader before screen fetch
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screens/${cityname}/${selectedDate}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    if (!data.ok) {
      console.log(data.error);
      setScreens([]);
    } else {
      console.log("Screens fetched successfully:", data);
      setScreens(data.data);
    }
    setLoading(false); // stop loader after screens fetched
  };

  React.useEffect(() => {
    setLoading(true); // start loader
    getmoviedetails()
      .then((data) => {
        console.log("Movie details fetched successfully:", data);
        setMovie(data.data);
      })
      .finally(() => setLoading(false)); // stop loader if no screen fetch after
  }, []);

  React.useEffect(() => {
    getscreens();
  }, [selectedDate]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-500 border-solid"></div>
        </div>
      ) : (
        <>
          <div className="screencontainer m-10">
            <div className="moviedetails mb-5">
              <h1 className="text-3xl font-bold">{movie?.title}</h1>
            </div>
            <hr />
            <div className="dateshow mt-5 mb-5">
              <DatePicker
                getSelectedDay={(date: any) => {
                  setSelectedDate(date);
                }}
                endDate={100}
                selectDate={selectedDate}
                labelFormat={"MMMM"}
                color={"rgb(248, 68, 100)"}
              />
            </div>
            <hr />
          </div>

          {screens && screens.length > 0 ? (
            <div
              className="screens mt-5 w-[100%] p-5"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              {screens.map((screen: any) => (
                <div
                  key={screen._id}
                  className="screen1 m-auto p-3 flex justify-between items-center w-[90%] bg-white"
                  style={{ borderBottom: "2px solid #F5F5F5" }}
                >
                  <div className="screendetailes">
                    <h1 className="text-2xl font-bold">{screen.name}</h1>
                    <p>{screen.location}</p>
                  </div>
                  <div className="selectbtn bookticket bg-rose-500 w-[10%] h-8  border-0 cursor-pointer rounded-[5px] pt-[2px] font-bold text-center text-white max-[900px]:w-[50%]">
                    <Link
                      href={`${pathname}/${screen._id}?date=${selectedDate}`}
                      className="cursor-pointer"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="screens mt-5 w-[100%] p-5"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <div
                className="screen1 font-bold m-auto p-3 flex justify-between items-center w-[90%] bg-white"
                style={{ borderBottom: "2px solid #F5F5F5" }}
              >
                No shows available
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default screenslist;
