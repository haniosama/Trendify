"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { register } from "@/action/user";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user", // Add default role
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstname, lastname, email, password, role } = form;

    if (!firstname || !lastname || !email || !password || !role) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError(null);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await register(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="flex flex-col gap-4 md:flex-row space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col flex-1">
            <Label htmlFor="firstname" className="mb-2 ">
              First Name:
            </Label>
            <Input
              id="firstname"
              name="firstname"
              type="text"
              value={form.firstname}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex flex-col flex-1">
            <Label htmlFor="lastname" className="mb-2">
              Last Name:
            </Label>
            <Input
              id="lastname"
              name="lastname"
              type="text"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <Label htmlFor="email" className="my-2">
          Email:
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />

        <Label htmlFor="password" className="my-2">
          Password:
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <Label htmlFor="role" className="my-2">
          Role:
        </Label>
        <select
          title="Select a role"
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {error && (
          <div className="mt-2 text-sm text-red-600 bg-red-100 rounded p-2">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="mt-4 w-full py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
        >
          <span className="flex items-center justify-center gap-2">
            Sign Up
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
      </form>
      <p className="mt-4 text-center text-neutral-500 dark:text-neutral-300">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Register;
