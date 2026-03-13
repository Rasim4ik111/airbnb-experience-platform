export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Комната в Париже",
    location: "Париж",
    price: 35,
    rating: 5.0,
    images: ["/img3.avif", "/img2.avif"],
  },
  {
    id: "2",
    title: "Вилла в Барселоне",
    location: "Барселона",
    price: 120,
    rating: 3.9,
    images: ["/img.avif", "/img2.avif"],
  },
  {
    id: "3",
    title: "Апартаменты в Риме",
    location: "Рим",
    price: 85,
    rating: 4.6,
    images: ["/img5.avif", "/img2.avif"],
  },
  {
    id: "4",
    title: "Студия в Лондоне",
    location: "Лондон",
    price: 95,
    rating: 4.5,
    images: ["/img3.avif", "/img2.avif"],
  },
  {
    id: "5",
    title: "Пентхаус в Дубае",
    location: "Дубай",
    price: 350,
    rating: 4.7,
    images: ["/img2.avif", "/img2.avif"],
  },
  {
    id: "6",
    title: "Коттедж в Праге",
    location: "Прага",
    price: 60,
    rating: 4.5,
    images: ["/img5.avif", "/img2.avif"],
  },
  {
    id: "7",
    title: "Лофт в Берлине",
    location: "Берлин",
    price: 75,
    rating: 4.2,
    images: ["/img.avif", "/img2.avif"],
  },
  {
    id: "8",
    title: "Вилла в Стамбуле",
    location: "Стамбул",
    price: 110,
    rating: 4.6,
    images: ["/img2.avif", "/img2.avif"],
  },
];
