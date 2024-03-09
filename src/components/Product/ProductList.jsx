import React from "react";
import ProductItem from "./ProductItem";
import "../../assests/styles/products.css";

const ProductList = ({ products }) => {
  if (!products.length) {
    return <div className="message">Товары не найдены!</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
