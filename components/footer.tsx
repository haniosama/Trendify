import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Trendify</h2>
          <p className="text-sm text-gray-400">
            Discover the latest electronics, fashion, and lifestyle products at
            unbeatable prices.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/category/headphones">Headphones</Link>
            </li>
            <li>
              <Link href="/category/smartphones">Smartphones</Link>
            </li>
            <li>
              <Link href="/category/watches">Watches</Link>
            </li>
            <li>
              <Link href="/category/computers">Computers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/returns">Returns</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <Link
              href="https://www.facebook.com/hani.osama.395"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/hani_o_ghozy/"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/HaniGhozy"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hani-osama/"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Trendify. All rights reserved.
      </div>
    </footer>
  );
}
