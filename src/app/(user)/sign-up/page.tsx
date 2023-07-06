"use client";
import { FormEvent, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import ErrorModal from "@components/ErrorModal";

export default function SignUp() {
  const router = useRouter();
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const [InternalError, setInternalError] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      emailRef.current?.value &&
      passwordRef.current?.value &&
      confirmPasswordRef.current?.value &&
      passwordRef.current.value === confirmPasswordRef.current.value
    ) {
      if (!termsRef.current?.checked) return alert("Please accept the terms");
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      try {
        const response = await axios.post("/api/getUser", {
          email,
          password,
        });
        if (response.data.message === "User already exists") {
          return setUserAlreadyExist(true);
        } else return router.push("/user-details");
      } catch (error: any) {
        if (error.response.status === 409) {
          return setUserAlreadyExist(true);
        }
        if (error.response.status === 500) {
          return setInternalError(true);
        }
      }
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <>
      {userAlreadyExist && (
        <ErrorModal
          heading="Error"
          content="User is already registered."
          isTrue={userAlreadyExist}
        />
      )}
      {InternalError && (
        <ErrorModal
          heading="Error"
          content="Internal server error. Please try again later."
          isTrue={InternalError}
        />
      )}
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-20">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            Core Campus
          </Link>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <button
                onClick={() =>
                  signIn("google", { callbackUrl: "/user-details" })
                }
                className="flex items-center border border-gray-200 rounded-md w-11/12 mx-auto max-sm:px-5 px-20 py-2 gap-2"
              >
                <FcGoogle /> Sign in with Google
              </button>
              <button
                onClick={() =>
                  signIn("github", { callbackUrl: "/user-details" })
                }
                className="flex items-center border border-gray-200 rounded-md w-11/12 mx-auto max-sm:px-5 px-20 py-2 gap-2"
              >
                <BsGithub /> Sign in with GitHub
              </button>
              <h3 className="text-center">OR</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    ref={passwordRef}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    ref={confirmPasswordRef}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      ref={termsRef}
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <span className="font-medium text-primary-600 hover:underline">
                        Terms and Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
