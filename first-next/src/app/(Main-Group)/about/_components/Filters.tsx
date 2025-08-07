"use client";
import Link from "next/link";
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
      <Link href={pathname + "?" + createQueryString("asc-desc", "dsc")}>
        Check
      </Link>
    </div>
  );
}

export default Filters;
