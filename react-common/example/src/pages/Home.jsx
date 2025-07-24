import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { useCart } from "../hooks/useCart";

function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const { cart, addToCart, removeFromCart } = useCart();
  async function fetchData() {
    try {
      let raw = await fetch("https://fakestoreapi.com/products");
      if (!raw.ok) {
        throw new Error(await raw.text());
      }
      let data = await raw.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUsers() {
    try {
      let raw = await fetch("https://fakestoreapi.com/users");
      if (!raw.ok) {
        throw new Error(await raw.text());
      }
      let data = await raw.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    fetchUsers();
    return () => {};
  }, []);
  return (
    <div className="p-10 bg-amber-300">
      {/* <Main /> */}
      <h2>Selected people:</h2>
      {cart.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
      No of items in cart: {cart.length}
      Total CheckoutPrice= {}
      <br />
      <hr />
      <ul>
        {products.map((items, index) => {
          return (
            <li
              onClick={() => {
                addToCart(DataTransferItemList);
              }}
              key={index}
              className={`py-1 transition-all duration-300 ease-in-out ${
                isIncluded ? "bg-red-300" : "bg-white"
              }`}
            >
              {items.id}) {items.title}{" "}
              <Button
                onClick={() => {
                  addToCart(items);
                }}
              >
                {isIncluded ? "Selected" : "Select"}
              </Button>
              {isIncluded && (
                <Button
                  onClick={() => {
                    removeFromCart(items);
                  }}
                >
                  Remove item
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
