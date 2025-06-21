"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const ProfilePage = () => {
  const [bookings, setBookings] = React.useState<any>(null);
  const [user, setUser] = React.useState<any>(null);
  const [enrichedBookings, setEnrichedBookings] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true); // loader state

  const getBookings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/getuserbookings`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await res.json();
      if (!data.ok) return console.log(data);

      const bookings = data.data;

      const enriched = await Promise.all(
        bookings.map(async (booking: any) => {
          const movieRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${booking.movieId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const movieData = await movieRes.json();
          const movieTitle = movieData?.data?.title || "Unknown Movie";

          const screenRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screens/${booking.screenId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const screenData = await screenRes.json();
          const screenName = screenData?.data?.name || "Unknown Screen";

          return { ...booking, movieTitle, screenName };
        })
      );

      setEnrichedBookings(enriched);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      if (data.ok) setUser(data.data);
      else console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await Promise.all([getUserData(), getBookings()]);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
<div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
        </div>    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Profile</h1>

      {/* User Info Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm text-gray-500">Name</h3>
            <p className="text-lg font-medium">{user?.name}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Email</h3>
            <p className="text-lg font-medium">{user?.email}</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-500">City</h3>
            <p className="text-lg font-medium">{user?.city}</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Bookings</h2>

        {enrichedBookings?.length === 0 ? (
          <p className="text-gray-500">No bookings available.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {enrichedBookings?.map((booking: any) => (
              <div
                key={booking._id}
                className="border rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500">Movie</h3>
                    <p className="text-base font-medium">{booking.movieTitle}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Screen</h3>
                    <p className="text-base font-medium">{booking.screenName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Seats</h3>
                    <p className="text-base font-medium">
                      {booking.seats.map((seat: any, index: number) => (
                        <span key={index}>
                          {seat.seat_id}
                          {index !== booking.seats.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Total Price</h3>
                    <p className="text-base font-medium">₹{booking.totalPrice}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Payment Type</h3>
                    <p className="text-base font-medium">{booking.paymentType}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Payment ID</h3>
                    <p className="text-base font-medium">{booking.paymentId}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Show Date</h3>
                    <p className="text-base font-medium">
                      {new Date(booking.showDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Show Time</h3>
                    <p className="text-base font-medium">{booking.showTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
