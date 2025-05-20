"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
}

type PriceRange = {
  min: number;
  max: number;
};

const priceRanges: PriceRange[] = [
  { min: 0, max: 50 },
  { min: 50, max: 100 },
  { min: 100, max: 200 },
  { min: 200, max: Infinity },
];

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<PriceRange | null>(null);

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:3000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  // Filter products based on search query and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice = selectedPriceRange
      ? product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max
      : true;
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="container mx-auto p-4 py-20 lg:px-20 md:px-16">
      <div className="mb-6 flex flex-col md:flex-row gap-4">
   
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <select
          aria-label="Filter by price range"
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const index = parseInt(e.target.value);
            setSelectedPriceRange(index === -1 ? null : priceRanges[index]);
          }}
          defaultValue="-1"
        >
          <option value="-1">All Prices</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={index}>
              ${range.min} - ${range.max === Infinity ? "+" : range.max}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredProducts.map((product: Product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
            className="border rounded-lg p-4 shadow"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {product.description}
            </p>
            <button
              type="button"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch products when component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await axios.get("http://localhost:3000/api/products");
//       setProducts(res.data);
//     };
//     fetchProducts();
//   }, []);

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4 py-20 lg:px-20 md:px-16">
//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <h1 className="text-2xl font-bold mb-4">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {filteredProducts.map((product: Product) => (
//           <Link
//             key={product._id}
//             href={`/products/${product._id}`}
//             className="border rounded-lg p-4 shadow"
//           >
//             <div className="w-full h-48 relative mb-4">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <h2 className="text-lg font-semibold">{product.title}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <p className="text-gray-500 text-sm mt-2 line-clamp-2">
//               {product.description}
//             </p>
//             <button
//               type="button"
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add to Cart
//             </button>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default ProductsPage;
