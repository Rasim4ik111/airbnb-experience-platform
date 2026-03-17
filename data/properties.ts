export type Property = {
  id: string;
  title: string;
  page_title?: string;
  description?: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  owner: string;
  owner_info: string;
  owner_photo: string;
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Room in Paris",
    page_title: "Private room near the town hall of the 11th district of Paris",
    description: "1 single bed. Shared bathroom",
    location: "Paris",
    price: 35,
    rating: 5.0,
    images: ["/img3.avif", "/img2.avif"],
    owner: "Carlos",
    owner_info: "Superhost. Hosting guests for 9 years",
    owner_photo: "/profile-1.avif",
  },
  {
    id: "2",
    title: "Villa in Barcelona",
    page_title: "Fully equipped apartment with a cozy large terrace and a VIEW",
    description: "1 single bed. Shared bathroom",
    location: "Barcelona",
    price: 120,
    rating: 3.9,
    images: ["/img2.avif", "/img2.avif"],
    owner: "Ronaldo",
    owner_info: "Superhost. Hosting guests for 5 years",
    owner_photo: "/profile-2.jpg",
  },
  {
    id: "3",
    title: "Apartment in Rome",
    page_title: "Rome-Montmartre Apartments",
    description: "1 single bed. Shared bathroom",
    location: "Rome",
    price: 85,
    rating: 4.6,
    images: ["/img5.avif", "/img2.avif"],
    owner: "Messi",
    owner_info: "Superhost. Hosting guests for 3 years",
    owner_photo: "/profile-3.jpeg",
  },
  {
    id: "4",
    title: "Apartment in London",
    page_title: "Peaceful Pied-à-Terre for 2 next to Eiffel Tower",
    description: "1 single bed. Large bathroom",
    location: "London",
    price: 95,
    rating: 4.5,
    images: ["/img3.avif", "/img2.avif"],
    owner: "Elqiz",
    owner_info: "Superhost. Hosting guests for 12 years",
    owner_photo: "/profile-4.jpg",
  },
  {
    id: "5",
    title: "Room in London",
    page_title: "20 minutes to the London Eye and Big Ben",
    description: "1 single bed. Bathroom",
    location: "London",
    price: 350,
    rating: 4.7,
    images: ["/img2.avif", "/img2.avif"],
    owner: "Rasim",
    owner_info: "Superhost. Hosting guests for 7 years",
    owner_photo: "/profile-5.jpeg",
  },
  {
    id: "6",
    title: "Cottage in Prague",
    page_title: "Double room + private bathroom",
    description: "1 single bed. Shared bathroom",
    location: "Prague",
    price: 60,
    rating: 4.5,
    images: ["/img5.avif", "/img2.avif"],
    owner: "Firenqiz",
    owner_info: "Superhost. Hosting guests for 2 years",
    owner_photo: "/profile-6.jpeg",
  },
  {
    id: "7",
    title: "Loft in Berlin",
    page_title: "Beautiful room in the center of Berlin",
    description: "1 single bed. Shared bathroom",
    location: "Berlin",
    price: 75,
    rating: 4.2,
    images: ["/img3.avif", "/img2.avif"],
    owner: "Serqey",
    owner_info: "Superhost. Hosting guests for 1 year",
    owner_photo: "/profile-7.jpeg",
  },
  {
    id: "8",
    title: "Villa in Istanbul",
    page_title: "Double room + private bathroom",
    description: "1 single bed. Shared bathroom",
    location: "Istanbul",
    price: 110,
    rating: 4.6,
    images: ["/img2.avif", "/img2.avif"],
    owner: "Perera",
    owner_info: "Superhost. Hosting guests for 7 years",
    owner_photo: "/profile-1.avif",
  },
];
