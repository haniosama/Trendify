import { login } from "@/action/user";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { signInWithGithub, signInWithGoogle } from "@/action/authAction";
const Login = () => {
  return (
    <>
      <form action={login} className="w-full max-w-md mx-auto">
        <Label className="mb-1">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          className="mb-1"
        />
        <Label className="mb-1">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          className="mb-1"
        />

        <button
          type="submit"
          className="
              mt-4 w-full py-3 rounded-md
              bg-blue-500 hover:bg-blue-600
              text-white font-semibold
              transition-all duration-300
              active:scale-[0.98]
            "
        >
          <span className="flex items-center justify-center gap-2">
            Login
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
        <p className="mt-4 text-end text-nautal-500 dark:text-neutral-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 h-0.5 w-full my-4" />
      </form>
      <div className="space-y-2">
        <form className="w-full max-w-md mx-auto" action={signInWithGithub}>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 rounded-md bg-[#24292e] hover:bg-[#1c2126] text-white transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>Continue with Github</span>
          </button>
        </form>
        <form className="w-full max-w-md mx-auto" action={signInWithGoogle}>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 rounded-md bg-white border hover:bg-gray-50 text-gray-700 transition-colors"
          >
            <FaGoogle className="text-xl text-[#4285f4]" />
            <span>Continue with Google</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
