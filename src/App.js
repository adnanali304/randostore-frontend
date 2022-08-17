
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux";

import MainLayout from "./layouts/main";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import AddItemPage from "./pages/addItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="addItem" element={<AddItemPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
