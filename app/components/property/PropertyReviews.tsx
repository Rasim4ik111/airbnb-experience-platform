"use client";
import { useReviews } from "@/app/hooks/useReviews";
import Loading from "@/app/property/[id]/loading";

export const PropertyReviews = ({ propertyId }: { propertyId: string }) => {
  const { reviews, loading } = useReviews(propertyId);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="mt-2">
      <h1 className="text-end font-bold mb-6">
        ★ 4.9 · {reviews.length} reviews
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {reviews.map((r: any) => (
          <div key={r.id}>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <p className="font-semibold text-sm">{r.author}</p>
                  <p className="text-sm opacity-50">{r.date} </p>
                  <p className="text-yellow-500 mt-1 self-end text-xs">
                    {"★".repeat(Math.floor(r.rating))}
                  </p>
                </div>
                <div className="flex justify-end font-semibold text-xs"></div>
              </div>
            </div>
            <p className="opacity-80">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
