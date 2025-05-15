import React, { useState, useEffect } from "react";

export const UpdateProductModal = ({ product, onClose, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedProduct);
  };

  if (!product) return null;

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              className="form-control my-2"
              placeholder="Product Name"
            />
            <input
              type="text"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              className="form-control my-2"
              placeholder="Product Price"
            />
            <input
              type="text"
              name="image"
              value={updatedProduct.image}
              onChange={handleChange}
              className="form-control my-2"
              placeholder="Image URL"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}