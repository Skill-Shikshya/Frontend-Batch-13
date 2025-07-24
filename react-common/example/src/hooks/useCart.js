import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(cartData) {
    let isIncluded = cart.some((data) => {
      return data.id === cartData.id;
    });
    if (isIncluded) {
      return;
    }
    setCart((data) => [...data, cartData]);
  }
  function removeFromCart(cartData) {
    const filteredArray = cart.filter(
      (selectedItems) => selectedItems.id !== cartData.id
    );
    setCart(filteredArray);
  }

  return { cart, addToCart, removeFromCart };
}
