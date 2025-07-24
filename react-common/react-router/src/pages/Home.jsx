import { useContext } from "react";
import { useDataFetch } from "../hooks/useDataFetch";
import { UserContext } from "../context/UserContext";

function Home() {
  const [products, productLoading, productError, fetchProducts] = useDataFetch({
    url: "products",
    initialData: [],
    runOnInit: false,
  });
  const [users, usersLoading, usersError] = useDataFetch({
    url: "users",
    initialData: [],
  });
  const { cart, addToCart } = useContext(UserContext);
  async function postUsers(data) {
    try {
      await fetch("", {
        method: "POST",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  }

  const [_, __, ___, postUsersCuston] = useDataFetch({
    url: "users",
    method: "POST",
    body: JSON.stringify({}),
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      fetchProducts();
    },
  });

  const [
    productResponse,
    productPostLoading,
    productPostError,
    postCustomProduct,
  ] = useDataFetch({
    url: "users",
    method: "POST",
  });

  if (productLoading || usersLoading) {
    return <>Loading......</>;
  }
  if (usersError || productError) {
    return <>Something went wrong.....</>;
  }
  return (
    <>
      <button onClick={fetchProducts}>fetch products again</button>
      <div>Home</div>
    </>
  );
}

export default Home;
