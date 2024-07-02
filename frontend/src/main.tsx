import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Category from "./category/Category.tsx";
import Products from "./products/Products.tsx";
import TestJS from "./TestJS.tsx";
import ProductsByCategory from "./products/ProductsByCategory.tsx";
import { Provider } from 'react-redux';
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(

  //Step 6 -> wrap the application using the Provider tag from react-redux
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>

          <Route index element={<Home/>} />

          <Route path="/category"> 
            <Route index element={<Category/>}/>
            <Route path=":categoryId" element={<ProductsByCategory/>} />
          </Route>

          <Route path="/products" element={<Products/>} />

          <Route path="/test" element={<TestJS/>} />
       
      </Route>      
    </Routes>
  </BrowserRouter>
  </Provider>
);
