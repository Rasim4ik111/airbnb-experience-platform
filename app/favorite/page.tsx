"use client";
import { useEffect, useState } from "react";
import { Header } from "../components/layouts/Header";
import { properties } from "@/data/properties";
import PropertyCard from "../components/property/PropertyCard";

export default function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavoriteIds(JSON.parse(saved));
  }, []);

  const favoriteProperties = properties.filter((p) =>
    favoriteIds.includes(p.id),
  );

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main className="max-w-6xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        {favoriteProperties.length === 0 ? (
          <p className="opacity-50">No favorites yet</p>
        ) : (
          <div className="flex flex-wrap">
            {favoriteProperties.map((p) => (
              <PropertyCard
                key={p.id}
                id={p.id}
                title={p.title}
                location={p.location}
                price={p.price}
                rating={p.rating}
                images={p.images}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
