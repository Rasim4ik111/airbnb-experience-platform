"use client";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./MapView").then((mod) => mod.MapView), {
  ssr: false,
});

export default function MapViewClient({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  return <MapView latitude={latitude} longitude={longitude} />;
}
