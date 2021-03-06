import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page can not be found.</h2>
        <p>
          Go back to <Link href="/">Homepage</Link>
        </p>
      </div>
    </div>
  );
}
