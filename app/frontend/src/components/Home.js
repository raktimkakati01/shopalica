import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';

function Home() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;