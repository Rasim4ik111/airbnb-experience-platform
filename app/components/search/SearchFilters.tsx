"use client";

import { useEffect, useState } from "react";

interface SearchFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  location: string;
}

export const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [location, setLocation] = useState("");

  useEffect(() => {
    onFilterChange({ minPrice, maxPrice, minRating, location });
  }, [minPrice, maxPrice, minRating, location]);

  return (
    <div>
      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="border border-gray-400 rounded-2xl p-2 w-30"
      >
        <option value={0}>All rating</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={4.5}>4.5+</option>
      </select>

      <input
        type="text"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        placeholder="Min price"
        className="border border-gray-400 rounded-2xl p-2 w-30"
      />
      <input
        type="text"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        placeholder="Max price"
        className="border border-gray-400 rounded-2xl p-2 w-30"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="border border-gray-400 rounded-2xl p-2 w-30"
      />
    </div>
  );
};
