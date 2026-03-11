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
    <>
      {filtered.map((prop) => (
        <PropertyCard
          title={prop.title}
          location={prop.location}
          price={prop.price}
          rating={prop.rating}
          images={prop.images}
        />
      ))}
    </>
  );
};

export default React.memo(PropertyList);
