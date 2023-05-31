"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import styles from "@styles/Hambar.module.css";
import hambarJson from "@jsons/allLinks.json";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

export default function Hambar(): JSX.Element {
  const [hambar, setHambar] = useState("hidden");
  const hambarMenu = (): void => {
    setHambar(hambar === "hidden" ? "" : "hidden");
  };

  useEffect(() => {
    if (hambar === "") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  }, [hambar]);
  return (
    <>
      <Link href="/login" className="bg-[--main] px-3 py-1 rounded hover:bg-[--secondary] hover:text-white transition-colors delay-100 sm:hidden" >Login</Link>
      <RxHamburgerMenu className="text-2xl sm:hidden" onClick={hambarMenu} />
      <div
        className={`${hambar} ${outfit.className} flex flex-col justify-start items-end fixed top-16 left-0 px-3 z-40 w-full h-full bg-blue-300 transition-all delay-150 ease-in-out `}
        onClick={hambarMenu}
      >
        {hambarJson.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`${styles.slide} p-4 border-b border-[--secondary] w-full text-end text-white`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </>
  );
}
