import { useSearchParams } from "react-router";
import { useCartStore } from "../store/useCartStore";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchId = searchParams.get("id");
  const searchName = searchParams.get("name");
  console.log(searchId, searchName);
  const { cart } = useCartStore();
  return (
    <>
      {cart.length}
      <div>Home</div>
      <div>
        <button
          onClick={() => {
            setSearchParams({ id: "30", name: searchName });
          }}
        >
          Change id
        </button>
      </div>
      <button
        onClick={() => {
          setSearchParams({ id: searchId, name: "changed name" });
        }}
      >
        Change Name
      </button>
      <div>
        {searchId}, {searchName}
      </div>
      <select
        onChange={(e) => {
          setSearchParams({ category: e.target.value });
        }}
        value={searchParams.get("category")}
      >
        <option value="clothes">Clothes</option>
        <option value="phone">Phone</option>
        <option value="laptop">Laptop</option>
        <option value="charger">Charger</option>
      </select>
    </>
  );
}

export default Home;
