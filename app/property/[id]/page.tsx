import { BookingForm } from "@/app/components/booking/BookingForm";
import { Header } from "@/app/components/layouts/Header";
import { properties } from "@/data/properties";
import Image from "next/image";

interface paramsInterface {
  params: {
    id: string;
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <h1 className="flex justify-center mt-50 text-6xl">Page not found</h1>
    );
  }

  return (
    <div>
      <Header />

      <main className=" max-w-6xl mx-auto flex flex-col px-4 mt-2 relative">
        <h1 className="p-2 text-3xl ">{property.page_title}</h1>

        <div className="mb-4 mt-4 max-w-12/12 mx-auto grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={800}
            height={500}
            className="w-full h-full max-w-2xl object-cover hover:cursor-pointer hover:opacity-85 bg-black"
          />
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={property.images[i % property.images.length]}
                alt=""
                width={400}
                height={250}
                className="w-full h-full object-cover hover:cursor-pointer hover:opacity-85"
              />
            ))}
          </div>
        </div>
        <p className="text-2xl">{property.title}</p>
        <p className="opacity-80">{property.description}</p>

        <div className="flex justify-between min-h-screen">
          {/* LEFT side*/}
          <div className="flex flex-col w-160">
            {/* Owner*/}
            <div className="flex items-center border-t border-b border-gray-200 mt-4 pt-5 pb-5">
              <Image
                src={property.owner_photo}
                alt="owner photo"
                width={150}
                height={150}
                className="rounded-full shadow-lg object-cover w-16 h-16"
              />
              <div className="ml-8">
                <p>Owner: {property.owner}</p>
                <p className="opacity-50">{property.owner_info}</p>
              </div>
            </div>

            <div className="mt-4">
              <p>Здесь доп. информация</p>
            </div>
          </div>

          {/* Right */}
          <div className="sticky top-30 self-start">
            <BookingForm price={property.price} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
