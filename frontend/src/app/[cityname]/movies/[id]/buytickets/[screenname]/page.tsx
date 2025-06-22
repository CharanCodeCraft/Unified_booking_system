"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script';
declare global {
  interface Window {
    Razorpay: any;
  }
}

function page() {
  const [selectedtime, setselectedtime] = useState<any>(null);
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [screen, setScreen] = useState<any>({});
  const [movie, setMovie] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Example: /Bangalore/movies/6852a5f8af931ed8e3289d4a/buytickets/68544e19cf9a46db82ba39f1
  const parentPath = "/" + pathname.split("/").slice(1, 5).join("/");
  const { cityname, id, screenname } = useParams();
  const searchparams = useSearchParams();
  const date = searchparams.get("date");
  console.log("date", date);

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

  const getschedules = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/movie/schedules/${screenname}/${date}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log("Schedules fetched successfully:", data);
    setScreen(data.data);
    setselectedtime(data.data.movieschedulefordate[0]);
  };

  const handleSeatClick = (seat: {
    seat_id: string;
    row: string;
    col: number;
    price: number;
  }) => {
    setSelectedSeats((prev) => {
      const exists = prev.some(
        (s) =>
          s.seat_id === seat.seat_id &&
          s.row === seat.row &&
          s.col === seat.col &&
          s.price === seat.price
      );

      if (exists) {
        return prev.filter(
          (s) =>
            !(
              s.seat_id === seat.seat_id &&
              s.row === seat.row &&
              s.col === seat.col &&
              s.price === seat.price
            )
        );
      } else {
        return [...prev, seat];
      }
    });
  };

  const generateLayout = () => {
    if (!screen?.screen?.seats) return null;

    const seats = screen.screen.seats;
    const index = screen.movieschedulefordate?.findIndex(
      (schedule: any) => schedule.showTime === selectedtime?.showTime
    );

    const notAvailableSeats =
      screen.movieschedulefordate[index]?.notAvailableSeats || [];

    return (
      <div className="layout w-[60%] m-auto max-[900px]:m-0">
        {seats.map((type: any) => (
          <div key={type.type} className="seat flex flex-col gap-5 p-5">
            <h1 className="text-xl font-semibold">
              {type.type} - ₹{type.price}
            </h1>

            <div className="rows flex flex-col gap-3">
              {type.rows.map((row: any) => (
                <div key={row.rowname} className="row flex items-center gap-2">
                  <h1 className="text-[18px]">{row.rowname}</h1>

                  <div className="rownumbers flex gap-14 items-center">
                    {row.cols.map((col: any, colIndex: number) => (
                      <div key={colIndex} className="col flex gap-2">
                        {col.seats.map((seat: any, seatIndex: number) => {
                          const seatData = {
                            seat_id: seat.seat_id,
                            row: row.rowname,
                            col: colIndex,
                            price: type.price,
                          };

                          const isBooked = notAvailableSeats.some(
                            (s: any) =>
                              s.seat_id === seat.seat_id &&
                              s.row === row.rowname &&
                              s.col === colIndex &&
                              s.price === type.price
                          );

                          const isSelected = selectedSeats.some(
                            (s: any) =>
                              s.seat_id === seat.seat_id &&
                              s.row === row.rowname &&
                              s.col === colIndex &&
                              s.price === type.price
                          );

                          return (
                            <div
                              key={seatIndex}
                              onClick={() => {
                                if (!isBooked) handleSeatClick(seatData);
                              }}
                              className={`
                                seat border w-[30px] h-[30px] flex items-center justify-center text-sm cursor-pointer
                                ${
                                  isBooked
                                    ? "bg-gray-300 text-white cursor-not-allowed"
                                    : isSelected
                                    ? "bg-green-500 text-white"
                                    : "bg-white text-green-700"
                                }
                              `}
                            >
                              {seat.seat_id}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleBooking =async () => {
    try{
      let keyVal: string = "";
      let orderVal: any = null;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/payment/getkey`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((res) => res.json()).then((data) => {
          keyVal = data.key;
          console.log("key:", data);
      })
      const resp= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/payment/process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          amount: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
        })
        }
      ).then((res) => res.json()).then((response) => {
        if (response.ok) {
          orderVal = response.order;
          console.log("order:", response);
        } else {
          toast.error("Booking Failed");
        }
      })
      .catch((err) => console.log(err));
      console.log(keyVal)
      console.log(orderVal)
       // Open Razorpay Checkout
       if(!keyVal || !orderVal){
        return
       }
       const options = {
        key: keyVal, // Replace with your Razorpay key_id
        amount: orderVal.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Tictopia',
        description: 'Test Transaction',
        order_id: orderVal.id, // This is the order_id created in the backend
        handler: async function (response: any) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
      
          // ✅ Verify signature via backend (optional but recommended)
          const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/payment/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            }),
          });
      
          const verifyData = await verifyRes.json();
          if (!verifyData.ok) {
            toast.error("Payment verification failed");
            return;
          }
      
          // ✅ Now call your original /bookticket API with paymentId
          const bookRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/bookticket`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              showTime: selectedtime.showTime,
              showDate: date,
              movieId: id,
              screenId: screenname,
              seats: selectedSeats,
              totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
              paymentId: razorpay_payment_id,
              paymentType: "online",
            }),
          });
      
          const result = await bookRes.json();
          if (result.ok) {
            window.location.href = "/profile";
            toast.success("Booking Successful");
          } else {
            toast.error("Booking Failed");
          }
        },
        prefill: {
          name: 'charan',
          email: 'charangowak911@gmail.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };
      console.log(options);
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
    catch(err){
      console.log(err);
    }

    //  
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     showTime: selectedtime.showTime,
    //     showDate: date,
    //     movieId: id,
    //     screenId: screenname,
    //     seats: selectedSeats,
    //     totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
    //     paymentId: "123456789",
    //     paymentType: "online",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     if (response.ok) {
    //       toast.success("Booking Successful");
    //     } else {
    //       toast.error("Booking Failed");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    setLoading(true);
    Promise.all([getmoviedetails(), getschedules()])
      .then(([movieData]) => {
        setMovie(movieData.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="afterInteractive"
/>
      <ToastContainer />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid"></div>
        </div>
      ) : (
        <>
          {screen && (
            <div className="detils gap-2 items-center m-6 flex">
              <div className="icon">
                <Link href={parentPath}>
                  <ChevronLeft className=" cursor-pointer" />
                </Link>
              </div>
              <div className="mvdet">
                <h1>{movie.title}</h1>
                <h6 className="text-[14px] font-bold text-gray-600">
                  {screen.screen?.name}:{screen.screen?.location}
                </h6>
              </div>
            </div>
          )}

          <div className="screendet">
            <div
              className="timeslots w-[100%] p-4 flex gap-3"
              style={{ backgroundColor: "#F5F5FA" }}
            >
              {screen.movieschedulefordate?.map((schedule: any) => {
                return (
                  <div
                    key={schedule._id}
                    className="timeslot w-[10%] max-[900px]:w-[30%] p-2 text-center border-1 border-green bg-white text-green-600"
                    style={{
                      backgroundColor:
                        selectedtime === schedule ? "green" : "white",
                      color: selectedtime === schedule ? "white" : "green",
                    }}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setselectedtime(schedule);
                        setSelectedSeats([]);
                      }}
                    >
                      {schedule.showTime}
                    </button>
                  </div>
                );
              })}
            </div>

            <div
              className="genseatslayout p-5 max-[900px]:overflow-x-scroll"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="indicators flex gap-4 justify-center">
                <div className="not-ava flex items-center gap-2">
                  <div
                    className="box w-3 h-3"
                    style={{ backgroundColor: "#D1D5DC" }}
                  ></div>
                  <h1>Not Available</h1>
                </div>
                <div className="not-ava flex items-center gap-2">
                  <div className="box w-3 h-3 border border-green-500"></div>
                  <h1>Available</h1>
                </div>
                <div className="not-ava flex items-center gap-2">
                  <div className="box w-3 h-3 bg-green-500"></div>
                  <h1>Selected</h1>
                </div>
              </div>
              {generateLayout()}
            </div>

            <div className="btn flex justify-center gap-3 items-center p-5">
              <div className="total flex gap-2">
                <h2>Total</h2>
                <h3 className="text-[#F84464]">
                  Rs. {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}
                </h3>
              </div>
              <div className="btn">
                <button
                  className="bg-[#F84464] cursor-pointer text-white p-3"
                  onClick={handleBooking}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default page;
