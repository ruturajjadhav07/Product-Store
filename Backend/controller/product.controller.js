import mongoose from "mongoose";
import Product from "../models/product.model.js";

// get all products
export const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});

    if (!product || product.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No product found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("Error getting products", error.message);
    res.status(500).json({ success: false, message: "No product found" });
  }
};

// create product
export const createProduct = async (req, res) => {
  const product = req.body; // adding data

  // if one of the input is missing
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all details" });
  }

  // if all inputs are filled
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deleted Succesfully" });
  } catch (error) {
    console.log("Error deleting product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  // if id is not correct
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: `No product found with id: ${id}` });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true, // Return the updated document
      runValidators: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
