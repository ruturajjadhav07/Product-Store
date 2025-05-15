import mongoose from "mongoose";

const productScehema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // for created at and updated at
  }
);

const Product = mongoose.model("Product", productScehema);  
export default Product;
