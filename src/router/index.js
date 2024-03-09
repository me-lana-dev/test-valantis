import Home from "../pages/HomePage";
import Products from "../pages/ProductsPage";

export const publicRoutes = [
  { path: "/", element: Home, index: true },
  { path: "/products", element: Products },
];
