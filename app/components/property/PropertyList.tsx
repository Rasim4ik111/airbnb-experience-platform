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
  onSelect: (id: string) => void; // добавь
}

const PropertyList = ({ properties, onSelect }: PropertyListProps) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((property) =>
      property.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }, [properties, search]);

  return (
    <>
      {filtered.map((prop) => (
        <div key={prop.id} onClick={() => onSelect(prop.id)}>
          <PropertyCard
            title={prop.title}
            location={prop.location}
            price={prop.price}
            rating={prop.rating}
            images={prop.images}
          />
        </div>
      ))}
    </>
  );
};

export default React.memo(PropertyList);
