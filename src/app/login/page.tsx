import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";

export default function Login(): JSX.Element {
  return (
    <>
        <section className="bg-white md:w-1/2 h-full mx-auto">
          <h1 className="text-center py-3 my-6 font-semibold text-2xl">
            Welcome Back
          </h1>
          <div
            className="flex max-sm:flex-col items-center justify-center gap-2"
            id="socialMediaButton"
          >
            <button className="flex items-center border border-gray-200 rounded-md max-sm:w-4/5 max-sm:px-10 px-20 py-2 gap-2">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="flex items-center border border-gray-200 rounded-md max-sm:w-4/5 max-sm:px-10 px-20 py-2 gap-2">
              <BsApple /> Sign in with Apple
            </button>
          </div>
        <h1 className="text-center my-4">OR</h1>
          <form method="post" className="w-5/6 mx-auto">
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="border border-gray-300 bg-gray-100  p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border border-gray-300 bg-gray-100  p-2 rounded-md"
              />
            </div>
            <div className="flex items-center justify-between gap-2 my-4">
              <div>
                <input type="checkbox" name="rememberMe" id="rememberMe" className="mx-2" />
                <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
              </div>
              <Link href="/forgot-password" className="hover:underline underline-offset-1 text-sm">Forget Password?</Link>
            </div>
            <div className="flex flex-col gap-2 my-4 justify-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md" >Sign in to your account</button>
              <span className="text-sm">Don&apos;t have an account? <Link href="/sign-up" className="text-blue-600 hover:underline underline-offset-2">Sign up</Link></span>
            </div>
          </form>
        </section>
    </>
  );
}
