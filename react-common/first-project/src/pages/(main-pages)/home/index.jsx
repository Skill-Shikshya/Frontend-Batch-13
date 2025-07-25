import { PRODUCTS } from "../../../assets/constants/apiEndpointConstants";
import { useFetch } from "../../../hooks/useFetch";

function Home() {
  const [products] = useFetch({ url: PRODUCTS });
  console.log(products);
  return <div>Home</div>;
}

export default Home;
