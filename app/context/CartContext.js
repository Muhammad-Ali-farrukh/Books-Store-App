"use client"
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();

export function CartProvider({ children }) {
  const {data:session}=useSession()
  const userid=session?.user?.email
  const storagekey=`cart_${userid}`
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(storagekey);
    if (storedCart) setCart(JSON.parse(storedCart));
  }, [userid]);

  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(cart));
  }, [cart,userid])

  const addToCart = (book) => {
    const exists = cart.find((item) => item.id === book.id);
    if (exists) return;

    setCart([...cart, { ...book, quantity: 1 }]);
  };


  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((cart) =>
      cart.map((item) => {
        if (item.id === id) {
          const currentQty = Number(item.quantity) || 1;
          const newQuantity = currentQty + amount;
          return {
            ...item,
            quantity: newQuantity < 1 ? 1 : newQuantity,
          };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
