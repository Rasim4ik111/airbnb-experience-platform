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
        <h1 className="text-2xl">{property.title}</h1>
        <p className="opacity-80">{property.description}</p>

        <div className="flex align-center border-t border-b border-gray-300 w-150 mt-4 pt-5 pb-5  ">
          <img
            src={property.owner_photo}
            alt="owner photo"
            className="rounded-full shadow-lg object-cover w-16 h-16"
          />

          <div className="ml-8 ">
            <h1>Owner: {property.owner}</h1>
            <p className="opacity-50">{property.owner_info}</p>
          </div>
        </div>
        <div className="absolute left-184.5 top-140">
          <BookingForm />
        </div>
      </main>
    </div>
  );
};

export default Page;
