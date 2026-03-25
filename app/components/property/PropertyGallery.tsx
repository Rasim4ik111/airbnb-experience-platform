"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  // ESC закрытие
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* ТВОЯ ГАЛЕРЕЯ */}
      <div className="mb-4 mt-4 grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          width={800}
          height={500}
          onClick={() => {
            setCurrent(0);
            setIsOpen(true);
          }}
          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-85"
        />

        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, i) => {
            const index = (i + 1) % images.length;

            return (
              <Image
                key={i}
                src={images[index]}
                alt=""
                width={400}
                height={250}
                onClick={() => {
                  setCurrent(index);
                  setIsOpen(true);
                }}
                className="w-full h-full object-cover hover:cursor-pointer hover:opacity-85"
              />
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Остановить закрытие при клике на картинку */}
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[current]}
              alt="fullscreen"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
          </div>

          {/* Закрыть */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* Назад */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            className="absolute left-5 text-white text-3xl"
          >
            ←
          </button>

          {/* Вперед */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-5 text-white text-3xl"
          >
            →
          </button>
        </div>
      )}
    </>
  );
};
