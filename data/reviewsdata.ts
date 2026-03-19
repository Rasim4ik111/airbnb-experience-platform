export interface Review {
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
    author: "John",
    avatar: "/review-profile-1.jpg",
    rating: 5,
    date: "March 2026",
    text: "I had a wonderful stay at this flat! The place was clean, modern, and exactly as shown in the pictures. The location is perfect — close to cafes, transport, and all the main attractions. The host was very welcoming and helpful throughout the stay. I would definitely recommend this apartment to anyone visiting the city!",
  },
  {
    id: "2",
    author: "Albert",
    avatar: "/review-profile-2.avif",
    rating: 4.5,
    date: "February 2026",
    text: "We loved the view from the room. the place was at a walking distance from a lot of the tourist attractions. Cleanliness, availability of everything we needed at the room, and lots of friendly cats",
  },
  {
    id: "3",
    author: "John",
    avatar: "/review-profile-3.jpg",
    rating: 4,
    date: "July 2026",
    text: "We felt like home it was so cosy and the view is gorgeous,  Aydan is a great host she was always responsive Thank you so much",
  },
  {
    id: "4",
    author: "Orban",
    avatar: "/review-profile-4.jpg",
    rating: 5,
    date: "March 2026",
    text: "A lovely, modern flat with everything you need for a comfortable stay. The view is absolutely amazing—you can even enjoy it from the bed as you wake up. Aydin is a friendly host and very easy to communicate with.",
  },
  {
    id: "5",
    author: "Pele",
    avatar: "/review-profile-5.jpg",
    rating: 4.4,
    date: "February 2026",
    text: "This was my first time ever using AIRBNB. I am glad and fortunate to use Aydan apartment for my stay. The view is amazing followed by its close proximity to all the places. Lastly, the host was super Amazing. Words can’t explain how helpful and nice of a person she is. I will recommend everyone to think no more and book your stay with her. ",
  },
  {
    id: "6",
    author: "Pele",
    avatar: "/review-profile-6.jpeg",
    rating: 4.7,
    date: "December 2026",
    text: "Location! Location! Location! that alone was the selling point for us. Every major tourist attraction is within a 30 minute walk. Another added bonus is the amazing view from the balcony. We really enjoyed our stay; the place was clean, peaceful, and safe. Our host gave us easy instructions for check in and was responsive when we had any questions. If ever in Baku again we will definitely be staying here again.",
  },
  // ещё 2-3 отзыва
];

export default mockReviews;
