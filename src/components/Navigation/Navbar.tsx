"use client";
import Link from "next/link";
import Logo from "@components/Logo";
import { Work_Sans } from "next/font/google";
import Hambar from "./Hambar";
const work_sans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import links from "@jsons/allLinks.json";
import { useRef } from "react";
export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const scroll = (): void => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add("bg-white", "shadow-md");
    } else {
      headerRef.current?.classList.remove("bg-white", "shadow-md");
    }
  };
  window.addEventListener("scroll", scroll);

  return (
    <>
      <header className={`${work_sans.className} sticky top-0`} ref={headerRef}>
        <nav className="flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-3">
            <Logo />
            <Link href="/">Core Campus</Link>
          </div>
          <Hambar />
          <ul className="flex items-center gap-6 max-sm:hidden">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900"
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <Link
              href="/login"
              className="bg-[--main] px-3 py-1 rounded hover:bg-[--secondary] hover:text-white transition-colors delay-100"
            >
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
