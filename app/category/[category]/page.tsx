import axios from "axios";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
}

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products?category=${params.category}`
  );
  const products: Product[] = res.data;

  return (
    <div className="p-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Category: {params.category}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-semibold">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
