import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartItem } from "./Context/CartContext";
import FormatPrice from "./singleProduct/FormatPrice";

const OrderSum = ({button}) => {
  var link;
  if(button==="Proceed To Payment"){
      link =  "/payment"
  }
  else{
link = "/billingdetails"
  }
  const { totalCartItem, totalPrice, shipping_fee } = useContext(cartItem);
  return (
    <>
      <div className="cartTotal">
        <p className="cartOrderSummary">Order Summary</p>
        <hr className="cartOrderLine" />
        <div className="cartOrderPriceDetails">
          <p className="sub-total">
            <span>Sub Total</span>
            <span>
             
              <FormatPrice price={totalPrice} />
            </span>
          </p>
          <p className="totalItem">({totalCartItem} items)</p>

          <p className="shipping">
            <span>Shipping Fee </span>
            <span>
              <FormatPrice price={shipping_fee} />
            </span>
          </p>
        </div>
        <hr className="cartOrderLine" />
        <div className="orderTotalPrice">
          <p className="total">
            <span>Total</span>
            <span>
              <FormatPrice price={shipping_fee + totalPrice} />
            </span>
          </p>
        </div>
        <div className="checkout">
          <NavLink to={link}>
          <span className="checkOutButton">{button}</span>

          </NavLink>
         
        </div>
      </div>
    </>
  );
};

export default OrderSum;
