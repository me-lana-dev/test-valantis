import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="product-col product-col-1">
        <div className="product-id">{product.id}</div>
        <div className="product-title">{product.product}</div>
      </div>
      <div className="product-col product-col-2">
        <div className="product-brand">Бренд: {product.brand}</div>
        <div className="product-price">Цена: {product.price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
