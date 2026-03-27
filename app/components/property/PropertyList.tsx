"use client";
import React, { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";
import { SearchFilters } from "../search/SearchFilters";

interface Filters {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  location: string;
}

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
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    location: "",
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      return (
        p.price >= filters.minPrice &&
        p.price <= filters.maxPrice &&
        p.rating >= filters.minRating &&
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    });
  }, [properties, filters]);

  return (
    <div className="flex  flex-col ">
      <div className="flex items-center justify-end m-3">
        <SearchFilters onFilterChange={setFilters} />
      </div>
      <div className="flex flex-wrap justify-start px-20 w-[1440] mx-auto ">
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
