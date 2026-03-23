"use client";
import { useEffect, useState } from "react";
import { Header } from "../components/layouts/Header";

interface Booking {
  id: string;
  propertyTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  price: number;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookings");
    if (saved) setBookings(JSON.parse(saved));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="opacity-50">No bookings yet</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold">
                  {booking.propertyTitle}
                </h2>
                <p>📅 Check in: {booking.checkIn}</p>
                <p>📅 Check out: {booking.checkOut}</p>
                <p>👥 Guests: {booking.guests}</p>
                <p className="text-rose-500 font-bold">
                  ${booking.price} / night
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
