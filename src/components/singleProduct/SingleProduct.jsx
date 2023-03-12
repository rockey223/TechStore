import "./single.css";
import { useParams } from "react-router-dom";
import Star from "./Star";
import { useContext } from "react";
import { productContext } from "../Context/ProductContext";
// import { useState, useEffect } from "react";
import FormatPrice from "./FormatPrice";
import { cartItem } from "../Context/CartContext";

const SingleProduct = () => {
  const { addToCart } = useContext(cartItem);
  const quantity = 1;

  const { list } = useContext(productContext);

  const { id } = useParams();

  const product = list.find((product) => product.id === id);



  

  const { name, img, price, desc, star, qty } = product;

  return (
    <>
      <div className="singleProductPage">
        <div className="singleProductWrapper">
          <div className="singleImage">
            <img src={img} alt={name} className="singleProductImage" />
          </div>

          <div className="singleProductDetails">
            <div className="singleProductName">{name}</div>
            <div className="singleProductPrice">
              <FormatPrice price={price} />
            </div>
            <div className="singleProductDesc">{desc}</div>
            <div className="singleService"></div>
            <div className="stars">
              <Star star={star} />
            </div>
            <div className="singleProductButtons">
              <button>Buy now</button>
              <button
                onClick={() => addToCart(id, img, name, price, qty, quantity)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
