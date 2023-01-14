import { createContext, useState } from 'react';
import { productsArray } from './productsStore';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
