import React, { useEffect, useState } from "react";
import ProductList from "../components/Product/ProductList";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import ProductService from "../components/API/ProductService";
import ProductFilter from "../components/Product/ProductFilter";
import { useProducts } from "../hooks/useProducts";
import { uniqueElemOfArray } from "../utils/uniqueElements";
import Pagination from "../components/UI/Pagination/Pagination";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(50);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [brands, setBrands] = useState([]);
  const [filter, setFilter] = useState({
    product: "",
    price: "",
    brand: "",
  });
  const filteredProducts = useProducts(
    products,
    filter.product,
    filter.price,
    filter.brand
  );

  const [fetchProducts, isProductsLoading, productsError] = useFetching(
    async (offset, limit) => {
      const responseIds = await ProductService.getIds(offset, limit);
      const responseProducts = await ProductService.getItems(
        responseIds.data.result
      );
      const productsUnique = responseProducts.data.result.reduce((o, i) => {
        if (!o.find((v) => v.id === i.id)) {
          o.push(i);
        }
        return o;
      }, []);
      setProducts(productsUnique);
    }
  );

  async function fetchFields(offset, limit) {
    const responseFields = await ProductService.getFields(
      "brand",
      offset,
      limit
    );
    const brands = uniqueElemOfArray(responseFields.data.result);

    const brandsObj = brands.reduce((brandP, brandN, index, arr) => {
      let newObj =
        brandN === null
          ? { value: null, name: "Не указан" }
          : { value: brandN, name: brandN };
      brandP.push(newObj);
      return brandP;
    }, []);
    brandsObj.unshift({ value: "-1", name: "Показать все" });
    setBrands(brandsObj);
  }

  const changePage = (page, offset) => {
    setPage(page);
    setOffset(offset);
  };

  useEffect(() => {
    fetchProducts(offset, limit);
    fetchFields(offset, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, page]);

  return (
    <div className="page">
      <h1>Товары</h1>

      <ProductFilter filter={filter} setFilter={setFilter} brands={brands} />

      {isProductsLoading && <Loader />}

      {isProductsLoading || productsError ? null : (
        <ProductList products={filteredProducts} />
      )}

      {isProductsLoading
        ? null
        : productsError && (
            <div className="message">Ошибка ${productsError}</div>
          )}

      <Pagination
        page={page}
        changePage2={changePage}
        offset={offset}
        limit={limit}
      />
    </div>
  );
};

export default ProductsPage;
