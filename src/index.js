import React from "react";
import ReactDOM from "react-dom/client";
import {CartContext} from "./components/Context/CartContext";
import App from "./App";
import ProductContext from "./components/Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContext>
      <CartContext>
        <App />
      </CartContext>
    </ProductContext>
  </React.StrictMode>
);

