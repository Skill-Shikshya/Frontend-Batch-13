import { NavLink, Outlet } from "react-router";
import { AboutContext } from "../context/AboutContext";
import { useUserStore } from "../store/useUserStore";
import { useQuery } from "@tanstack/react-query";

function About() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then(
        async (raw) => await raw.json()
      ),
  });
  console.log(data);
  const storeData = useUserStore();
  console.log(storeData);
  return (
    <>
      <button
        onClick={() => {
          storeData.login(true);
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          storeData.changeUser({ name: "test" });
        }}
      >
        Change User
      </button>
      <button
        onClick={() => {
          storeData.logout();
        }}
      >
        Log out
      </button>
    </>
  );
}

export default About;
