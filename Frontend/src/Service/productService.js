// Get all products
export const fetchAllProducts = async () => {
  try {
    const response = await fetch("/api/products");
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch products");
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Fetch error:", error);
    return { success: false, message: error.message };
  }
};

// Create a new product
export const createProduct = async (product) => {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to create product");
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Create error:", error);
    return { success: false, message: error.message };
  }
};

// Delete a product by ID
export const deleteProductById = async (id) => {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to delete product");
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Delete error:", error);
    return { success: false, message: error.message };
  }
};

// edit product By Id
export const updateProductById = async (id, updatedData) => {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to update product");
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Update error:", error);
    return { success: false, message: error.message };
  }
};