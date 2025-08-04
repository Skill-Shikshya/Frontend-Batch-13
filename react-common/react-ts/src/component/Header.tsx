import { useState } from "react";
import type { Product, User } from "../types/api-response-types";

function Header() {
  const [products, setProducts] = useState<number[]>([]);
  const [selected, setSelected] = useState<any>();
  const [user, setUser] = useState<any>();
  async function getdata() {
    try {
      const raw = await fetch("https://fakestoreapi.com/products");
      if (!raw.ok) {
        throw new Error(await raw.text());
      }
      const data: Paginated<Product> = await raw.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function getUser() {
    try {
      const raw = await fetch("https://fakestoreapi.com/users");
      if (!raw.ok) {
        throw new Error(await raw.text());
      }
      const data: Paginated<User> = await raw.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {products}
      {selected?.category}
      {products.map((item: any) => {
        return (
          <button
            onClick={() => {
              setSelected(item);
            }}
          >
            {item.title}
          </button>
        );
      })}
      <button></button>
      {user?.map((data: any) => {
        return <>{data.address.geolocation.lat}</>;
      })}
    </div>
  );
}

export default Header;
//any

type ResultReturn<T> = { result: T };

function add(a: string, b: string): ResultReturn<string> {
  return { result: a + b };
}
function mult(a: number, b: number): ResultReturn<number> {
  return { result: a * b };
}
function div(a: number, b: number): ResultReturn<number> {
  return { result: a / b };
}
function arr(a: number, b: number): ResultReturn<number[]> {
  return { result: [a, b] };
}

add("ajg", "ah");
mult(2, 3);
div(1, 3);

type Paginated<T> = {
  count: number;
  forward: string;
  backward: string;
  result: T[];
};
