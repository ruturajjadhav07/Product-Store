import express from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

// get all products
router.get("/", getProduct);

// create products
router.post("/", createProduct);

// delete product
router.delete("/:id", deleteProduct);

// Update product
router.put("/:id", updateProduct);

export default router
