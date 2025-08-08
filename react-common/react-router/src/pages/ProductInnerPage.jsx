import { useParams } from "react-router";
import { useDataFetch } from "../hooks/useDataFetch";

function ProductInnerPage() {
  const params = useParams();
  console.log(params.slug);
  const [data] = useDataFetch({ url: "/products/" + params.slug });
  console.log(data);
  return (
    <div>
      {data && (
        <>
          <img src={data.image} alt="test" className="w-[200px] h-auto" />
          {data.title}, {data.price}
        </>
      )}
    </div>
  );
}

export default ProductInnerPage;
