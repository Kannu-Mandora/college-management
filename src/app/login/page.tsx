"use client";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

export default function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  const onCredentialsSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/welcome",
      });
    }
  };

  return (
    <>
      <section className="bg-white md:w-1/2 h-full mx-auto">
        <h1 className="text-center py-3 my-6 font-semibold text-2xl">
          Welcome Back
        </h1>
        <div
          className="flex flex-col items-center justify-center gap-2"
          id="socialMediaButton"
        >
          <button
            onClick={() => signIn("google", { callbackUrl: "/welcome" })}
            className="flex justify-center items-center border border-gray-200 rounded-md w-10/12 py-2 gap-2"
          >
            <FcGoogle /> Sign in with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/welcome" })}
            className="flex justify-center items-center border border-gray-200 rounded-md w-10/12 py-2 gap-2"
          >
            <BsGithub /> Sign in with GitHub
          </button>
        </div>
        <h1 className="text-center my-4">OR</h1>
        <form
          onSubmit={onCredentialsSubmit}
          method="post"
          className="w-5/6 mx-auto"
        >
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300 bg-gray-100  p-2 rounded-md"
              ref={emailRef}
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
              ref={passwordRef}
            />
          </div>
          <div className="flex items-center justify-between gap-2 my-4">
            <div className="flex items-center justify-between gap-2 my-4">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="mx-2"
                ref={rememberRef}
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember Me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="hover:underline underline-offset-1 text-sm"
            >
              Forget Password?
            </Link>
          </div>
          <div className="flex flex-col gap-2 my-4 justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              Sign in to your account
            </button>
            <span className="text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 hover:underline underline-offset-2"
              >
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </section>
    </>
  );
}
