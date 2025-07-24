import { useDataFetch } from "../../hooks/useDataFetch";

function Product() {
  const [products, fetchProducts] = useDataFetch("products", [], false);

  return <div>Product</div>;
}

export default Product;
