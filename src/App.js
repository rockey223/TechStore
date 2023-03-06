import "./components/product.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SingleProduct from "./components/singleProduct/SingleProduct";
// import FeatureProduct from "./components/FeatureProduct";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/AllProduct";
import ErrorPage from "./components/Error/ErrorPage";
import Home from "./components/Home";
import list from "./components/list";
import Cart from "./components/Cart";
import BillingDetails from "./components/BillingDetails"
import Payment from "./components/Payment";
import ContactForm from "./components/Contact";
import Footer from "./components/footer/Footer";
// import { useState,useEffect} from "react";
// import { useContext } from "react";
// import {cartItem} from "./components/Context/CartContext";


export default function App() {
  // const [cartItems, setCartItems] = useState([]);
 

  

  //   useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem("cartItems"));
  //     if (items) {
  //       setCartItems(items);
  //     }
  //   },[cartItems]);

     
    // const addToCart = (item)=>{
    
    //   const updatedCart = [...cartItems, item];
    //   setCartItems(updatedCart);
    //   localStorage.setItem("cartItems",JSON.stringify(updatedCart));
    // }



    
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/singleproduct/:id" element={<SingleProduct list={list}  />} />
          <Route path="/cart" element={<Cart  />} />
          <Route path="/billingdetails" element={<BillingDetails  />} />
          <Route path="/payment" element={<Payment  />} />
          <Route path="/contact" element={<ContactForm  />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>




      
    </>
  );
}
