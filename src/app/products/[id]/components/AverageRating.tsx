"use client";

import { Review } from "@/api/types";
import { useReviews } from "@/app/store/store";
import { useEffect, useState } from "react";

export default function AverageRating({
  reviews: initialReviews,
}: {
  reviews: Review[];
}) {
  const [reviews, setReviews] = useState<Review[] | null>(initialReviews);
  const stateReviews = useReviews();

  useEffect(() => {
    if (
      stateReviews !== null &&
      JSON.stringify(initialReviews) !== JSON.stringify(stateReviews)
    ) {
      setReviews(stateReviews);
    }
    // eslint-disable-next-line
  }, [stateReviews]);

  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
}
