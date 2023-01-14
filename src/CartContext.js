import { createContext, useState } from 'react';
import { productsArray } from './productsStore';

const CartContext = createContext({});

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
