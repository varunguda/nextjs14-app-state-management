"use client";

import { Review } from "@/api/types";
import React, { createContext, useContext, useState } from "react";

const useReviewState = (initialReviews: Review[]) =>
  useState<Review[]>(initialReviews);

export const ReviewContext = createContext<ReturnType<
  typeof useReviewState
> | null>(null);

export const useReviews = () => {
  const reviews = useContext(ReviewContext);
  if (!reviews) {
    throw new Error("useReviews must be within a ReviewProvider");
  }
  return reviews;
};

export const ReviewProvider = ({
  reviews: initialReviews,
  children,
}: {
  reviews: Review[];
  children: React.ReactNode;
}) => {
  const [reviews, setReviews] = useReviewState(initialReviews);
  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
      {children}
    </ReviewContext.Provider>
  );
};
