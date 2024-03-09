import React from "react";
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";

const ProductFilter = ({ filter, setFilter, brands }) => {
  return (
    <div className="filter">
      <Input
        value={filter.product}
        onChange={(e) => setFilter({ ...filter, product: e.target.value })}
        placeholder="Искать товар..."
      />
      <Input
        value={filter.price}
        onChange={(e) => setFilter({ ...filter, price: e.target.value })}
        placeholder="Цена..."
      />
      <Select
        value={filter.brand}
        onChange={(value) => setFilter({ ...filter, brand: value })}
        options={brands}
      ></Select>
    </div>
  );
};

export default ProductFilter;
