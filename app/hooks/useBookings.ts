import { useState } from "react";

interface Booking {
  id: string;
  propertyTitle: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  price: number;
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bookings");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const addBooking = (booking: Booking) => {
    const updated = [...bookings, booking];
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return { bookings, addBooking };
};
