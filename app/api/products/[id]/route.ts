import { auth } from "@/auth";
import connectDb from "@/lib/db";
import product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  await connectDb();
  const item = await product.findById(context.params.id);
  if (!item) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
  return NextResponse.json(item);
}

export async function PUT(req: NextRequest, context: Context) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const data = await req.json();
  await connectDb();
  const updatedItem = await product.findByIdAndUpdate(context.params.id, data, {
    new: true,
  });
  if (!updatedItem) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(updatedItem);
}

export async function DELETE(req: NextRequest, context: Context) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  await connectDb();
  const deletedItem = await product.findByIdAndDelete(context.params.id);
  if (!deletedItem) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return new NextResponse("Deleted", { status: 200 });
}
