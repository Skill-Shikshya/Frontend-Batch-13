import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Link href={"/about"}>Go to about</Link>
    </div>
  );
}

export default page;
