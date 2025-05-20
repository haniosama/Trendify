// models/Product.ts
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
