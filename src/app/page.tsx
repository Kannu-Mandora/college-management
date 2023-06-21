import styles from "@styles/Home.module.css";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
const font = DM_Sans({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

function Home(): JSX.Element {
  return (
    <>
      <main className={`${font.className} ${styles.backgroundImage}`}>
        <section className="flex flex-col justify-center items-center h-[80dvh]">
          <h1 className="text-6xl text-center max-sm:text-4xl text-white">
            Boost up your skills with a new way of learning
          </h1>
          <div className="flex items-center gap-4 my-8">
            <Link
              href="/"
              className="bg-white hover:bg-gray-100 text-blue-500 py-2 px-6 rounded"
            >
              Discover
            </Link>
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
