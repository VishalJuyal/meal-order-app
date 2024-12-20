// context/CartContext.tsx
import React, { createContext, useReducer, ReactNode } from "react";

interface CartItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (
  state: CartItem[],
  action: { type: string; payload: CartItem }
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.title !== action.payload.title);
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
