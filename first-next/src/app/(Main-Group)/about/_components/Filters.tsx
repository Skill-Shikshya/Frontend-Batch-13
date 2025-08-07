"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("search", "hello"));
        }}
      >
        Check
      </button>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("asc-desc", "dsc"));
        }}
      >
        Check
      </button>
    </div>
  );
}

export default Filters;
