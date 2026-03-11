"use client";
import { useState } from "react";
import Image from "next/image";

interface PropertyCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
}

const PropertyCard = ({
  title,
  location,
  price,
  rating,
  images,
}: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((a) => !a);
  };

  if (!images.length) return null;

  return (
    <div className="m-8 w-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer">
      <div className="relative">
        <Image
          src={images[currentImage]}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleClick}
          className="absolute top-3 right-3 text-xl"
        >
          {toggle ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="p-4">
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="text-gray-400 text-sm">Rating: {rating}</p>
        <p className="text-rose-500 font-bold mt-1">Price: {price} / ночь</p>
      </div>
    </div>
  );
};

export default PropertyCard;
