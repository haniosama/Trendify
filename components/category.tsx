// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axios from "axios";

// const DisplayCategory = () => {
//   const [categories, setCategories] = useState<string[]>([]);

//   useEffect(() => {
//     axios.get("/api/category").then((res) => {
//       setCategories(res.data);
//     });
//   }, []);
//   console.log(categories);
//   return (
//     <div className="p-6 lg:px-20 md:px-16 ">
//       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {categories.map((category) => (
//           <Link
//             key={category}
//             href={`/category/${category}`}
//             className="bg-gray-200 text-center py-3 rounded hover:bg-gray-300"
//           >
//             {category}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default DisplayCategory;
"use client";
export const categoryList = [
  {
    name: "headphones",
    image:
      "https://m.media-amazon.com/images/I/61kFL7ywsZS.__AC_SX300_SY300_QL70_FMwebp_.jpghttps://m.media-amazon.com/images/I/61kFL7ywsZS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "tablets",
    image:
      "https://m.media-amazon.com/images/I/81IjVvOXGdL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "speakers",
    image:
      "https://m.media-amazon.com/images/I/81-YRA6tQqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "computers",
    image: "https://m.media-amazon.com/images/I/51TbRJ7YSTL._SL1500_.jpg",
  },
  {
    name: "watches",
    image:
      "https://m.media-amazon.com/images/I/61uC5wH8-QL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "gaming",
    image: "https://m.media-amazon.com/images/I/41TnqQ0prBL._SX522_.jpg",
  },
  {
    name: "smartphones",
    image:
      "https://m.media-amazon.com/images/I/71KGkQ+KOKL._AC_SY300_SX300_.jpg",
  },
];

import Link from "next/link";
import Image from "next/image";

export default function Category() {
  return (
    <div className="p-6 lg:px-20 md:px-16">
      <h1 className="text-3xl font-bold mb-6">Browse by Category</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-center items-center">
        {categoryList.map((cat) => (
          <Link
            key={cat.name}
            href={`/category/${cat.name}`}
            className="group block  overflow-hidden  transition"
          >
            <div>
              <Image
                src={cat.image}
                alt={cat.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
