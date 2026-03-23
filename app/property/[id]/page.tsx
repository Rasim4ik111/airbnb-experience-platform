import { BookingForm } from "@/app/components/booking/BookingForm";
import { Header } from "@/app/components/layouts/Header";
import { PropertyGallery } from "@/app/components/property/PropertyGallery";
import { PropertyReviews } from "@/app/components/property/PropertyReviews";
import { properties } from "@/data/properties";
import Image from "next/image";
import MapViewClient from "@/app/components/property/MapViewClient";

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

        <PropertyGallery images={property.images} title={property.title} />

        <p className="text-2xl">{property.title}</p>
        <p className="opacity-80">{property.description}</p>

        <div className="flex justify-between min-h-screen">
          {/* LEFT side*/}
          <div className="flex flex-col w-180">
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
            <div className="mt-4 border-b border-gray-200 pb-10">
              <PropertyReviews />
            </div>
            <div className=""></div>

            <div className="mt-10 pb-10">
              <MapViewClient
                latitude={property.coordinates.latitude}
                longitude={property.coordinates.longitude}
              />
            </div>
          </div>

          {/* Right */}
          <div className="sticky top-30 self-start">
            <BookingForm
              price={property.price}
              propertyTitle={property.title}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
