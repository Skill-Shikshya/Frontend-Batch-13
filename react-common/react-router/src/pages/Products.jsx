import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router";

function Products() {
  const { cart, addToCart } = useCartStore();
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then(
        async (raw) => await raw.json()
      ),
  });
  if (isLoading) return <>Loading....</>;
  console.log(cart);

  return (
    <div className="">
      Products
      <br />
      Items in cart: {cart.length}
      <br />
      <br />
      <ul className="flex flex-col gap-2">
        {data.map((item) => {
          const isIncart =
            cart.filter((cartItem) => cartItem.id === item.id).length > 0;
          return (
            <li
              key={item.id}
              className="text-black flex justify-between bg-black/10 p-2 rounded-xl"
            >
              <Link to={"/products/" + item.id}>{item.title}</Link>

              {isIncart && (
                <span className="flex gap-2 ">
                  <span className="p-1 h-fit bg-gray-100">+</span>
                  <span className="p-1 h-fit bg-gray-100">-</span>
                </span>
              )}
              <button
                disabled={isIncart}
                onClick={() => addToCart(item)}
                className={
                  "bg-blue-400 p-2 border rounded-xl disabled:bg-blue-100 disabled:text-black/50 "
                }
              >
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
