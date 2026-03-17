"use client";
import React, { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
}

interface PropertyListProps {
  properties: Property[];
}

const PropertyList = ({ properties }: PropertyListProps) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((property) =>
      property.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [properties, search]);

  return (
    <div className="flex justify-center flex-col">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 w-50 ml-25 border rounded-full pl-4 pr-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300"
        placeholder="Search destinations..."
      />
      <div className="flex flex-wrap min-w-screen justify-center">
        {filtered.map((prop) => (
          <PropertyCard
            id={prop.id}
            key={prop.id}
            title={prop.title}
            location={prop.location}
            price={prop.price}
            rating={prop.rating}
            images={prop.images}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PropertyList);
