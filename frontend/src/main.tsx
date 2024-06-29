import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Category from "./category/Category.tsx";
import Products from "./products/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/products" element={<Products/>} />

      </Route>
      
    </Routes>
  </BrowserRouter>
);
