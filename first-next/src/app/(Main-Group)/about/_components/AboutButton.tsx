"use client";

import { postProd, stringSplit } from "@/server-actions/product";
import TextTest from "./TextTest";

function AboutButton() {
  return (
    <div className="text-amber-300">
      <button
        onClick={async () => {
          const res = await postProd("hello");
          console.log(await stringSplit("aoasdasdasd"));
          console.log(res);
        }}
        className="border border-white rounded-2xl p-2 hover:cursor-pointer"
      >
        Hello <TextTest />
      </button>
    </div>
  );
}

export default AboutButton;
