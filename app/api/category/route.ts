import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import product from "@/models/product";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    await connectDb();

    const categories = await product.distinct("category");

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
