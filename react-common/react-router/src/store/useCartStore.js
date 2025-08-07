import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  test: true,
  addToCart: (item) =>
    set((prev) => {
      const prevCartData = prev.cart;
      const alreadyExists =
        prevCartData.filter((prev) => prev.id === item.id).length > 0;
      if (alreadyExists) {
        return { cart: prevCartData };
      }
      return { cart: [...prev.cart, { ...item, quantity: 1 }] };
    }),
  addQuantity: (item) =>
    set((prev) => {
      const prevCartData = prev.cart;
      const newCartData = prevCartData.map((cartObj) => {
        if (cartObj.id === item.id) {
          return { ...cartObj, quantity: cartObj.quantity + 1 };
        }
        return cartObj;
      });
      return { cart: newCartData };
    }),
  decreaseQuantity: (items) => set(),
  removeFromCart: (items) => set(),
  resetCart: (items) => set({ cart: [] }),
}));
