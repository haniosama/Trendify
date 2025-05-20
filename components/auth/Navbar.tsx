import Link from "next/link";
import { Button } from "../ui/button";
import { getSession } from "@/lib/session";
import { signOut } from "@/auth";

import Menu from "../menu";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;
  console.log(user);

  return (
    <nav className="p-4 bg-slate-800 fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between text-white">
          <Link href="/" className="text-xl font-bold hover:text-gray-200">
            Trendify
          </Link>

          <ul className="hidden md:flex gap-6 items-center flex-1 justify-end">
            {!user ? (
              <>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="hover:text-gray-200 transition duration-200"
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
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-gray-200 transition duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"products"}
                    className="hover:text-gray-200 transition duration-200"
                  >
                    Product
                  </Link>
                </li>
                {user?.role === "admin" && (
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className="hover:text-gray-200 transition duration-200"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
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
        <Menu user={user} />
      </div>
    </nav>
  );
};

export default Navbar;
