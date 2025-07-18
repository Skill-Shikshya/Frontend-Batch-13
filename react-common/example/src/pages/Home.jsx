import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Button from "../components/ui/Button";
function Home() {
  const [selected, setSelected] = useState([]);
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  console.log(selected);
  return (
    <div className="p-10 bg-amber-300">
      {/* <Main /> */}
      <h2>Selected people:</h2>
      {selected.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
      No of items in cart: {selected.length}
      Total CheckoutPrice= {}
      <br />
      <hr />
      <ul>
        {products.map((items, index) => {
          let isIncluded = selected.some((data) => {
            return data.id === items.id;
          });
          return (
            <li
              onClick={() => {
                if (isIncluded) {
                  return;
                }
                setSelected([...selected, items]);
              }}
              key={index}
              className={`py-1 transition-all duration-300 ease-in-out ${
                isIncluded ? "bg-red-300" : "bg-white"
              }`}
            >
              {items.id}) {items.title}{" "}
              <Button
                onClick={() => {
                  if (isIncluded) {
                    return;
                  }
                  setSelected([...selected, items]);
                }}
              >
                {isIncluded ? "Selected" : "Select"}
              </Button>
              {isIncluded && (
                <Button
                  onClick={() => {
                    const filteredArray = selected.filter(
                      (selectedItems) => selectedItems.id !== items.id
                    );
                    setSelected(filteredArray);
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
