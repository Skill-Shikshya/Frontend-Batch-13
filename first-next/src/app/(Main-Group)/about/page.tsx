import { Product } from "@/types/ProductTypes";
import Link from "next/link";
import AboutButton from "./_components/AboutButton";
import TextTest from "./_components/TextTest";
import Filters from "./_components/Filters";
type SearchParamsAbout = {
  searchParams: Promise<{ price?: string; category?: string }>;
};
async function About({ searchParams }: SearchParamsAbout) {
  const awaitedParams = await searchParams;
  console.log(awaitedParams);

  const raw = await fetch(
    `https://fakestoreapi.com/products?category=${awaitedParams.category}`
  ); //this runs on server so this is nextjs fetch
  const res: Product[] = await raw.json();

  return (
    <div>
      <Filters />
      <div className="flex gap-4">
        categories:{" "}
        <ul className="flex gap-2">
          <Link href={"/about?category=" + "clothes"}>
            <li>Clothes</li>
          </Link>
          <Link href={"/about?category=" + "phone"}>
            <li>Phone</li>
          </Link>
          <Link href={"/about?category=" + "pc"}>
            <li>pc</li>
          </Link>
        </ul>
      </div>
      <div>Price filter = {awaitedParams.price}</div>
      <div>Category filter = {awaitedParams.category}</div>

      {res.map((item) => {
        return (
          <Link href={"/about/" + item.id} key={item.id}>
            <TextTest>{item.title}</TextTest>
          </Link>
        );
      })}
      <AboutButton />
    </div>
  );
}

export default About;
