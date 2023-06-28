import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@components/Navigation/Navbar";
import { Metadata } from "next";
import ChakraProviderUI from "@/components/ChakraProviderUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Management System",
  description:
    "The College Management System is a web application that allows students to register for courses, and administrators to manage courses and students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <ChakraProviderUI>{children}</ChakraProviderUI>
      </body>
    </html>
  );
}
