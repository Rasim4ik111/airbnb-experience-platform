"use client";
import { useReducer, useState } from "react";
import { Toast } from "../shared/Toast";
import { useBookings } from "@/app/hooks/useBookings";

interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface BookingFormProps {
  price: number;
  nights?: number;
  propertyTitle: string; // добавь
}

const initialState: BookingState = {
  checkIn: "",
  checkOut: "",
  guests: 1,
};

type Action =
  | { type: "SET_CHECKIN"; payload: string }
  | { type: "SET_CHECKOUT"; payload: string }
  | { type: "SET_GUESTS"; payload: number };

function reducer(state: BookingState, action: Action) {
  switch (action.type) {
    case "SET_CHECKIN":
      return { ...state, checkIn: action.payload };
    case "SET_CHECKOUT":
      return { ...state, checkOut: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}

interface BookingFormProps {
  price: number;
  nights?: number;
}

export const BookingForm = ({
  price,
  nights = 1,
  propertyTitle,
}: BookingFormProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toast, setToast] = useState(false);
  const { addBooking } = useBookings();

  const handleBook = () => {
    addBooking({
      id: Date.now().toString(),
      propertyTitle,
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      guests: state.guests,
      price,
    });
    setToast(true);
  };

  const getGuestLabel = (n: number) => `guest${n > 1 ? "s" : ""}`;

  return (
    <div className="border border-gray-200 rounded-2xl p-8 shadow-lg w-full">
      <p className="text-2xl font-bold mb-4">
        <span className="underline">${price}</span>
        <span className="text-base font-normal opacity-70">
          {" "}
          {`/ ${nights} ${nights > 1 ? "nights" : "night"}`}
        </span>
      </p>

      <div className="border border-gray-300 rounded-xl overflow-hidden mb-3">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3">
            <p className="text-xs font-bold uppercase tracking-wide">
              Check-In
            </p>
            <input
              type="date"
              value={state.checkIn}
              onChange={(e) =>
                dispatch({ type: "SET_CHECKIN", payload: e.target.value })
              }
              className="w-full text-sm outline-none mt-1 bg-transparent"
            />
          </div>
          <div className="p-3">
            <p className="text-xs font-bold uppercase tracking-wide">
              Check-Out
            </p>
            <input
              type="date"
              value={state.checkOut}
              onChange={(e) =>
                dispatch({ type: "SET_CHECKOUT", payload: e.target.value })
              }
              className="w-full text-sm outline-none mt-1 bg-transparent"
            />
          </div>
        </div>

        <div className="border-t border-gray-300 p-3">
          <p className="text-xs font-bold uppercase tracking-wide">Guests</p>
          <div className="flex justify-between items-center mt-1">
            <select
              value={state.guests}
              onChange={(e) =>
                dispatch({
                  type: "SET_GUESTS",
                  payload: Number(e.target.value),
                })
              }
              className="text-sm outline-none bg-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {getGuestLabel(n)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleBook}
        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl transition text-lg"
      >
        Book Now
      </button>

      {toast && (
        <Toast
          message="Booked Succesfuly!"
          type="success"
          onClose={() => setToast(false)}
        />
      )}

      <p className="text-center text-sm opacity-60 mt-2">
        You won't be charged yet
      </p>
    </div>
  );
};
