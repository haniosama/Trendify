import CarouselComponent from "@/components/carousel";
import DisplayCategory from "@/components/category";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
interface product {
  _id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}
const Home = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  const products = res.data;

  return (
    <div>
      <div className="mt-16">
        <CarouselComponent />
      </div>
      <div>
        <DisplayCategory />
      </div>
      <div className="flex flex-col  justify-center md:px-16 lg:px-20 bg-gray-50 py-3 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-start">
          Recommended Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {products.map((product: product) => (
            <div
              key={product._id}
              className="bg-white mx-5 md:mx-2 lg:mx-1 rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-lg group relative"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-110  transition-transform duration-300"
                />
              </div>

              <Link href={`products/${product._id}`}>
                <h2 className="text-lg font-semibold mb-1 line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-blue-600 font-medium mb-2">
                  ${product.price}
                </p>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.description}
                </p>
              </Link>
              <button
                aria-label="Add to favorites"
                className="absolute top-5 right-5 border border-gray-300 px-3 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
