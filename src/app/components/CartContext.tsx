"use client";

import { Cart } from "@/api/types";
import React, { createContext, useContext, useState } from "react";

const useCartState = (initialCart: Cart) => useState<Cart>(initialCart);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be within a CartProvider");
  }
  return cart;
};

export const CartProvider = ({
  children,
  cart: initialCart,
}: {
  children: React.ReactNode;
  cart: Cart;
}) => {
  const [cart, setCartState] = useCartState(initialCart);

  return (
    <CartContext.Provider value={[cart, setCartState]}>
      {children}
    </CartContext.Provider>
  );
};
