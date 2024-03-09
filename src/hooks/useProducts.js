import { useMemo } from "react";

export const useProductsByPriceAndBrand = (products, price, brand) => {
  const sortedProducts = useMemo(() => {
    if (brand !== "" && price !== "") {
      return products
        .filter((item) => parseInt(item.price) === parseInt(price))
        .filter((item) => item.brand === brand);
    }
    if (brand !== "" && brand !== "-1") {
      let brandValue = brand === "Не указан" ? null : brand;
      return products.filter((item) => item.brand === brandValue);
    }
    if (brand === "-1") {
      return products;
    }
    if (price !== "") {
      return products.filter(
        (item) => parseInt(item.price) === parseInt(price)
      );
    }
    return products;
  }, [price, brand, products]);

  return sortedProducts;
};

export const useProducts = (products, query, price, brand) => {
  const sortedProductsByPrice = useProductsByPriceAndBrand(
    products,
    price,
    brand
  );

  const searchedProducts = useMemo(() => {
    return sortedProductsByPrice.filter((item) =>
      item.product.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedProductsByPrice]);

  return searchedProducts;
};
