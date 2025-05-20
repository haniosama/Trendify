import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import product from "@/models/product";

export async function GET(req: NextRequest) {
  await connectDb();
  const category = req.nextUrl.searchParams.get("category");

  let items;
  if (category) {
    items = await product.find({
      category: { $regex: new RegExp(`^${category}$`, "i") },
    });
  } else {
    items = await product.find();
  }

  return NextResponse.json(items);
}
