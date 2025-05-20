"use client";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "./ui/button";
import Link from "next/link";
import { signOut } from "@/auth";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Menu = ({ user }: { user: any }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button
        variant={"ghost"}
        className="absolute top-4 right-4 text-white"
        onClick={() =>
          setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen)
        }
      >
        <CiMenuBurger />
      </Button>
      <div className={`mt-4 ${isMobileMenuOpen ? "" : "hidden"}`}>
        <div id="mobile-menu" className=" md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-white">
            {!user ? (
              <>
                <li>
                  <Link
                    href="/login"
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/home"
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/products"}
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/private/dashboard"
                    className="block hover:text-gray-200 transition duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <form
                    action={async () => {
                      signOut();
                    }}
                  >
                    <Button
                      type="submit"
                      variant={"ghost"}
                      className="text-white hover:text-gray-200"
                    >
                      Logout
                    </Button>
                  </form>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
