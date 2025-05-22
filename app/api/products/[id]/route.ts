import { auth } from "@/auth";
import connectDb from "@/lib/db";
import product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

// // Get item by ID
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   await connectDb();
//   const item = await product.findById(params.id);

//   if (!item) {
//     return NextResponse.json({ error: "Item not found" }, { status: 404 });
//   }

//   return NextResponse.json(item);
// }

// Update item (admin only)
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const data = await req.json();
  await connectDb();

  const updatedItem = await product.findByIdAndUpdate(params.id, data, {
    new: true,
  });

  if (!updatedItem) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(updatedItem);
}

// Delete item (admin only)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  await connectDb();
  const deletedItem = await product.findByIdAndDelete(params.id);

  if (!deletedItem) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return new NextResponse("Deleted", { status: 200 });
}
