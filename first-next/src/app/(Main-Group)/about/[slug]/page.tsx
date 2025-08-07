import { Product } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const raw = await fetch(
    "https://fakestoreapi.com/products/" + awaitedParams.slug
  );
  if (isNaN(parseInt(awaitedParams.slug))) {
    return <>Invalid params</>;
  }
  const res: Product = await raw.json();
  return (
    <div>
      <Image
        src={res.image}
        alt="prodcut"
        width={200}
        height={200}
        className="w-[200px] h-auto object-contain"
      />
      Product Name : {res.title}
      <Link href={"/about"}>Go to about</Link>
    </div>
  );
}

export default page;
