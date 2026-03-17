"use client";
import { useReducer } from "react";

interface BookingState {
  step: number;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const initialState: BookingState = {
  step: 1,
  checkIn: "",
  checkOut: "",
  guests: 1,
};

type Action =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_CHECKIN"; payload: string }
  | { type: "SET_CHECKOUT"; payload: string }
  | { type: "SET_GUESTS"; payload: number };

function reducer(state: BookingState, action: Action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      if (state.step === 1) {
        return { ...state, step: (state.step = 1) };
      }
      return { ...state, step: state.step - 1 };
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

export const BookingForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-md border border-gray-200 rounded-2xl p-6 shadow-sm w-100 h-70 relative min-h-64">
      {state.step === 1 && (
        <div className="space-y-4 ">
          <h2 className="text-lg font-semibold">Step 1 — Date</h2>
          <input
            type="date"
            value={state.checkIn}
            onChange={(e) =>
              dispatch({ type: "SET_CHECKIN", payload: e.target.value })
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
          />
          <input
            type="date"
            value={state.checkOut}
            onChange={(e) =>
              dispatch({ type: "SET_CHECKOUT", payload: e.target.value })
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
          />
        </div>
      )}
      {state.step === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 2 — Guests</h2>
          <input
            type="number"
            value={state.guests}
            onChange={(e) =>
              dispatch({ type: "SET_GUESTS", payload: Number(e.target.value) })
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-rose-400"
          />
        </div>
      )}
      {state.step === 3 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Step 3 — Accept</h2>
          <p>📅 Check In: {state.checkIn}</p>
          <p>📅 Check Out: {state.checkOut}</p>
          <p>👥 Guests: {state.guests}</p>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-8">
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Back
        </button>
        <button
          onClick={() => dispatch({ type: "NEXT_STEP" })}
          className="px-4 py-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};
