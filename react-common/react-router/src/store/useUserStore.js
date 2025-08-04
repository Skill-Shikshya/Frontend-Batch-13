import { create } from "zustand";

export const useUserStore = create((set) => ({
  user:
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")),
  isLogin: localStorage.getItem("login") === "true",
  login: async (login) => {
    localStorage.setItem("login", "true");
    localStorage.setItem("user", JSON.stringify({ name: "asim" }));
    return set({ isLogin: login, user: { name: "asim" } });
  },
  changeUser: (userDetails) => set({ user: userDetails }),
  logout: () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    return set({ isLogin: false, user: {} });
  },
}));
