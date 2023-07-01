"use client";
import React, { memo } from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-gray-600 body-font border-t-2 border-[--secondary]">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <Logo />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year} —
            <Link
              href="https://instagram.com/mandorakannu"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Core Campus
            </Link>
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://github.com/Kannu-Mandora"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-500"
            >
              <AiFillGithub className="text-2xl" />
            </Link>
            <Link
              href="https://twitter.com/mandorakannu"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <AiFillTwitterCircle className="text-2xl" />
            </Link>
            <Link
              href="https://instagram.com/mandorakannu"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link
              href="https://linkedin.com/in/mandorakannu"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <AiFillLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default memo(Footer);
