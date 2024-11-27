"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
      <h1>Hello I am about</h1>
      <button
        onClick={() => {
          if (router) {
            router.push("/");
          }
        }}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go Home
      </button>
    </>
  );
}
