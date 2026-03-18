import reviewdata from "@/data/reviewsdata";

export const PropertyReviews = () => {
  return (
    <div className="mt-2">
      <h1 className="text-end font-bold mb-6">
        ★ 4.9 · {reviewdata.length} reviews
      </h1>
      <div className="grid grid-cols-2 gap-2">
        {reviewdata.map((review) => (
          <div key={review.id}>
            {/* Автор */}
            <div></div>
            {/* Текст */}
            <p></p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};
