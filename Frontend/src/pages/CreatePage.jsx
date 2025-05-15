import { useState } from "react";
import { createProduct } from "../Service/productService";

export const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createProduct(product);

    if (result.success) {
      alert("Product added succesfully");
      setProduct({ name: "", price: "", image: "" });
    } else {
      alert(result.message || "Failed to create product.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container  col-10 col-sm-8 col-md-6 col-lg-4">
        <form className="border rounded p-3">
          <h2 className="text-center">Add Product Details</h2>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Product Name"
              name="name"
              onChange={handleChange}
              value={product.name}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Product Price"
              name="price"
              onChange={handleChange}
              value={product.price}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Product image"
              name="image"
              onChange={handleChange}
              value={product.image}
              required
            />
          </div>
          <div>
            <button onClick={handleSubmit} className="btn btn-primary w-100">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
