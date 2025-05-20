"use client";

interface DeleteButtonProps {
  productId: number;
}

export function DeleteButton({ productId }: DeleteButtonProps) {
  const deleteItem = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete data");
    await res.json();
  };
  console.log(productId);
  return (
    <button
      onClick={() => deleteItem(productId)}
      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
    >
      Delete
    </button>
  );
}
