import Image from "next/image";
import reviewdata from "@/data/reviewsdata";

export const PropertyReviews = () => {
  return (
    <div className="mt-2">
      <h1 className="text-end font-bold mb-6">
        ★ 4.9 · {reviewdata.length} reviews
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {reviewdata.map((review) => (
          <div key={review.id}>
            {/* Автор */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{review.author}</p>
                  <p className="text-sm opacity-50">{review.date} </p>
                  <p className="text-yellow-500 mt-1 self-end text-xs">
                    {"★".repeat(Math.floor(review.rating))}
                  </p>
                </div>
                <div className="flex justify-end font-semibold text-xs"></div>
              </div>
            </div>
            {/* Текст */}
            <p className="opacity-80">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
