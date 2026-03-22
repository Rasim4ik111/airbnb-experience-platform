"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  rating,
  images,
}: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setisFavorite] = useState<boolean>(false);

  const handleClick = () => {
    setisFavorite((a) => !a);
  };

  if (!images.length) return null;

  return (
    <Link href={`property/${id}`}>
      <div className="m-4 w-72 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition">
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
            className="absolute top-3 right-3 text-xl "
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="p-4">
          <p className="font-semibold" style={{ color: "var(--text)" }}>
            {title}
          </p>
          <p className="text-sm" style={{ color: "var(--text)", opacity: 0.7 }}>
            {location}
          </p>
          <p className="text-rose-500 font-bold mt-1 flex items-center justify-between">
            ${price} / night{" "}
            <span
              className="text-sm"
              style={{ color: "var(--text)", opacity: 0.6 }}
            >
              ★{rating}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
