"use client";

import { type Cart } from "@/api/types";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { StoreType, createStore, setCart } from "./store";

type Props = {
  children: React.ReactNode;
  cart: Cart;
};

export default function StoreProvider({ children, cart }: Props) {
  const storeRef = useRef<StoreType | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setCart(cart));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
