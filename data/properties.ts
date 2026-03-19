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
  coordinates: {
    latitude: number;
    longitude: number;
  };
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
    images: [
      "/img3.avif",
      "/img2.avif",
      "/img5.avif",
      "/img5.avif",
      "/img5.avif",
    ],
    owner: "Carlos",
    owner_info: "Superhost. Hosting guests for 9 years",
    owner_photo: "/profile-1.avif",
    coordinates: {
      latitude: 48.87180672370985,
      longitude: 2.3822191994069017,
    },
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
    coordinates: {
      latitude: 41.402221097277945,
      longitude: 2.184449293267691,
    },
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
    coordinates: {
      latitude: 41.893858722971586,
      longitude: 12.492164136299253,
    },
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
    coordinates: {
      latitude: 51.455767013834766,
      longitude: -0.08238732101364345,
    },
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
    coordinates: {
      latitude: 51.56365688548866,
      longitude: -0.09137376154267114,
    },
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
    coordinates: {
      latitude: 50.08873735727238,
      longitude: 14.462430992522883,
    },
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
    coordinates: {
      latitude: 52.52473239330248,
      longitude: 13.396301166739114,
    },
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
    coordinates: {
      latitude: 41.0563735137193,
      longitude: 28.9668306102633,
    },
  },
];
