import Link from "next/link";
import AboutButton from "./_components/AboutButton";
import TextTest from "./_components/TextTest";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};
async function About() {
  const raw = await fetch("https://fakestoreapi.com/products");
  const res: Product[] = await raw.json();
  return (
    <div>
      Hello i am about About <Link href={"/about/me"}>GO to me</Link>{" "}
      {res.map((item) => {
        return (
          <div key={item.id}>
            <TextTest>{item.title}</TextTest>
          </div>
        );
      })}
      <AboutButton />
    </div>
  );
}

export default About;
