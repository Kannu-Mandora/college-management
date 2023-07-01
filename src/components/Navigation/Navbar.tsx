"use client";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Logo from "@components/Logo";
import { Work_Sans } from "next/font/google";
import Hambar from "./Hambar";
import AvatarButton from "./AvatarButton";
import { getSession } from "next-auth/react";
const work_sans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import links from "@jsons/allLinks.json";
import { Session } from "next-auth";

export default function Navbar() {
  // Get Session of User for Navbar Login Button
  const [session, setSession] = useState<Session | null>();
  const getSessionData = async () => {
    const session = await getSession();
    setSession(session);
  };
  useLayoutEffect(() => {
    getSessionData();
  }, []);

  return (
    <>
      <header
        className={`${work_sans.className} sticky top-0 bg-white shadow-md`}
      >
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
            {session ? (
              <AvatarButton />
            ) : (
              <Link
                href="/login"
                className="bg-[--main] px-3 py-1 rounded hover:bg-[--secondary] hover:text-white transition-colors delay-100"
              >
                Login
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
