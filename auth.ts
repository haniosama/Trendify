import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./lib/db";
import UserModel from "./models/users";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "@auth/core/providers/google";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "hani@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "123456",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string | undefined;
          password: string | undefined;
        };

        if (!email || !password) {
          throw new CredentialsSignin("Invalid email or password");
        }
        await connectDb();
        const exsitUser = await UserModel.findOne({ email }).select(
          "+password +role"
        );

        if (!exsitUser) {
          throw new CredentialsSignin("Incorrect email or password");
        }
        if (!exsitUser.password) {
          throw new CredentialsSignin("Incorrect email or password");
        }
        const isPasswordCorrect = await bcrypt.compare(
          password,
          exsitUser.password
        );
        if (!isPasswordCorrect) {
          throw new CredentialsSignin("Incorrect email or password");
        }
        const userData = {
          id: exsitUser._id,
          firstname: exsitUser.firstname,
          lastname: exsitUser.lastname,
          email: exsitUser.email,
          role: exsitUser.role,
        };
        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.role = user.role ?? "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async signIn({ user, account }) {
      try {
        if (account?.provider !== "credentials") {
          const { email, name, id: authProviderId, image } = user;
          await connectDb();

          const existingUser = await UserModel.findOne({ email });

          if (!existingUser) {
            await UserModel.create({
              email,
              firstname: name?.split(" ")[0] || "",
              lastname: name?.split(" ")[1] || "",
              image,
              authProviderId,
              role: "user", // default role
            });
          }
        }
        return true;
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    },
  },
});
