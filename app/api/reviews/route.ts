import { NextResponse } from "next/server";

const reviews = [
  // PROPERTY 1
  {
    id: 1,
    propertyId: "1",
    author: "John",
    date: "March 2026",
    rating: 5,
    text: "Amazing stay! The apartment was clean and exactly like the photos.",
  },
  {
    id: 2,
    propertyId: "1",
    author: "Albert",
    date: "February 2026",
    rating: 4,
    text: "Great location and nice host. Would stay again.",
  },
  {
    id: 3,
    propertyId: "1",
    author: "Emma",
    date: "January 2026",
    rating: 5,
    text: "Super cozy place, felt like home!",
  },
  {
    id: 4,
    propertyId: "1",
    author: "David",
    date: "December 2025",
    rating: 4,
    text: "Nice view and comfortable bed.",
  },
  {
    id: 5,
    propertyId: "1",
    author: "Sophia",
    date: "November 2025",
    rating: 5,
    text: "Perfect stay, everything was amazing.",
  },

  // PROPERTY 2
  {
    id: 6,
    propertyId: "2",
    author: "Pele",
    date: "March 2026",
    rating: 4,
    text: "Very good experience, especially the location.",
  },
  {
    id: 7,
    propertyId: "2",
    author: "Lucas",
    date: "February 2026",
    rating: 5,
    text: "Loved everything about this place!",
  },
  {
    id: 8,
    propertyId: "2",
    author: "Olivia",
    date: "January 2026",
    rating: 4,
    text: "Clean and modern, would recommend.",
  },
  {
    id: 9,
    propertyId: "2",
    author: "Noah",
    date: "December 2025",
    rating: 5,
    text: "Amazing host and great communication.",
  },
  {
    id: 10,
    propertyId: "2",
    author: "Liam",
    date: "November 2025",
    rating: 4,
    text: "Good stay overall.",
  },

  // PROPERTY 3
  {
    id: 11,
    propertyId: "3",
    author: "Mia",
    date: "March 2026",
    rating: 5,
    text: "Beautiful apartment with stunning view!",
  },
  {
    id: 12,
    propertyId: "3",
    author: "Ethan",
    date: "February 2026",
    rating: 4,
    text: "Nice place, very clean.",
  },
  {
    id: 13,
    propertyId: "3",
    author: "Ava",
    date: "January 2026",
    rating: 5,
    text: "Highly recommended!",
  },
  {
    id: 14,
    propertyId: "3",
    author: "James",
    date: "December 2025",
    rating: 4,
    text: "Comfortable and well located.",
  },
  {
    id: 15,
    propertyId: "3",
    author: "Isabella",
    date: "November 2025",
    rating: 5,
    text: "Fantastic stay, will come again.",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get("propertyId");

  const filtered = propertyId
    ? reviews.filter((r) => r.propertyId === propertyId)
    : reviews;

  return NextResponse.json(filtered);
}
