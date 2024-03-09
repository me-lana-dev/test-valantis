import About from "../pages/AboutPage";
import Products from "../pages/ProductsPage";

export const publicRoutes = [
  { path: "/", element: Products, index: true },
  { path: "/about", element: About },
];
