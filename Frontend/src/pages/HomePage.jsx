import React, { useEffect, useState } from "react";
import { fetchAllProducts, deleteProductById, updateProductById } from "../Service/productService";
import { UpdateProductModal } from "../components/UpdateProductModal";

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchAllProducts();
      if (response.success) {
        setProduct(response.data);
      } else {
        setError(response.message);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const res = await deleteProductById(id);
      if (res.success) {
        setProduct((prev) => prev.filter((p) => p._id !== id));
      } else {
        alert(res.message || "Failed to delete product");
      }
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = async (updatedProduct) => {
    const res = await updateProductById(updatedProduct._id, updatedProduct);
    if (res.success) {
      setProduct((prev) =>
        prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
      );
      setEditProduct(null);
    } else {
      alert(res.message || "Failed to update product");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Available Products</h1>

      {loading ? (
        <h2 className="text-center">Loading products...</h2>
      ) : product.length === 0 ? (
        <p className="text-center">No products available</p>
      ) : (
        <div className="row mt-4">
          {product.map((item) => (
            <div key={item._id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price}</p>
                  </div>
                  <div className="d-flex flex-column">
                    <i
                      className="bi bi-trash3-fill"
                      style={{ fontSize: "1.4rem", cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(item._id)}
                    ></i>
                    <i
                      className="bi bi-pencil-square"
                      style={{ fontSize: "1.4rem", cursor: "pointer" }}
                      onClick={() => handleEditClick(item)}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editProduct && (
        <UpdateProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};
