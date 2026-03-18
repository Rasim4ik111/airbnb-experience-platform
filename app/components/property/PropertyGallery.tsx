import Image from "next/image";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  return (
    <div className="mb-4 mt-4 grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
      <Image
        src={images[0]}
        alt={title}
        width={800}
        height={500}
        className="w-full h-full object-cover hover:cursor-pointer hover:opacity-85"
      />
      <div className="grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <Image
            key={i}
            src={images[i % images.length]}
            alt=""
            width={400}
            height={250}
            className="w-full h-full object-cover hover:cursor-pointer hover:opacity-85"
          />
        ))}
      </div>
    </div>
  );
};
