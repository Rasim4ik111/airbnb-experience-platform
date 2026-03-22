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
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    location: "",
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      return (
        p.title.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= filters.minPrice &&
        p.price <= filters.maxPrice &&
        p.rating >= filters.minRating &&
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    });
  }, [properties, search, filters]);

  return (
    <div className="flex  flex-col ">
      <div className="flex items-center justify-between ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 w-50 ml-25 border rounded-full pl-4 pr-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500 border-gray-300"
          placeholder="Search destinations..."
        />
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
