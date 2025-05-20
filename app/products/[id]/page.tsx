// app/product/[id]/page.tsx
// import axios from "axios";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
    cache: "no-store",
  });
  console.log(params);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await res.json();
  console.log(product);

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white my-8 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12  rounded-lg shadow-lg p-8 group relative">
        <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <div className="flex gap-4"></div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
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
      </div>
    </div>
  );
};
export default ProductPage;
