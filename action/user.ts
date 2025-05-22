"use server";
import user from "../models/users";
import { redirect } from "next/navigation";
import connectDb from "@/lib/db";
import { hash } from "bcryptjs";
import { signIn } from "../auth";

const login = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const result = await signIn("credentials", {
    email: email.toString(),
    password: password.toString(),
    redirect: false,
    callbackUrl: "/",
  });

  if (!result) {
    throw new Error("Authentication failed");
  }

  if (result.error) {
    throw new Error(result.error);
  }

  // if successful
  redirect(result.url ?? "/");
};

const register = async (FormData: FormData): Promise<void> => {
  const firstname = FormData.get("firstname") as string;
  const lastname = FormData.get("lastname") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;
  const role = FormData.get("role") as string;
  await connectDb();
  if (!firstname || !lastname || !email || !password || !role) {
    console.log("All fields are required");
  }

  const existUser = await user.findOne({ email });
  if (existUser) {
    throw new Error("User already exists");
  }
  const hashPassword = await hash(password, 10);
  console.log(hashPassword);
  await user.create({
    firstname,
    lastname,
    email,
    password: hashPassword,
    role,
  });

  console.log("user added successfully");
  redirect("/login");
};

const getAllUser = async () => {
  await connectDb();
  const users = await user.find();
  return users;
};
const deleteUser = async (id: string) => {
  await connectDb();
  await user.findByIdAndDelete(id);
};
export { register, login, getAllUser, deleteUser };
