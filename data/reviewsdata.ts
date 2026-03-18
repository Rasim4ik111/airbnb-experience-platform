interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    author: "Anna",
    avatar: "/profile-1.avif",
    rating: 5,
    date: "March 2026",
    text: "Amazing place! Very clean and cozy. Host was super helpful.",
  },
  {
    id: "2",
    author: "Albert",
    avatar: "/profile-2.jpg",
    rating: 4.5,
    date: "February 2026",
    text: "Great location, close to everything. Would recommend!",
  },
  {
    id: "3",
    author: "John",
    avatar: "/profile-3.jpg",
    rating: 4,
    date: "July 2026",
    text: "Great place, i liked it. Would recommend all of my friend!",
  },
  {
    id: "4",
    author: "Orban",
    avatar: "/profile-4.jpg",
    rating: 5,
    date: "March 2026",
    text: "Amazing location, close to beach. Recommended!",
  },
  {
    id: "5",
    author: "Pele",
    avatar: "/profile-5.jpg",
    rating: 4.4,
    date: "February 2026",
    text: "Thanks for all, come back again",
  },
  {
    id: "6",
    author: "Pele",
    avatar: "/profile-6.jpg",
    rating: 4.7,
    date: "December 2026",
    text: "I love this place. Owner is friendly",
  },
  // ещё 2-3 отзыва
];
