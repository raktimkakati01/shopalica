import React, { useState } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct'; // Ensure this is imported correctly

function AdminPanel() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <AddProduct addProduct={addProduct} />
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <EditProduct product={product} /> {/* Ensure this is used correctly */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel; // Ensure this is exported as default