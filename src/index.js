import React from "react";
import ReactDOM from "react-dom/client";
import CartContext from "./components/Context/CartContext";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
