"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-[80dvh]">
      <h2>Please login first to view this page.</h2>
      <div className="flex gap-3 items-center my-5">
        <Link
          href="/"
          className="bg-white hover:shadow-md text-blue-600 py-2 px-6 rounded"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
