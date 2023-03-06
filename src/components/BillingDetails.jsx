import React from "react";
import OrderSum from "./OrderSum";

const BillingDetails = () => {
  return (
    <>
      <div className="billing-Wrapper">
        <p className="Billing_Title">Billing Detail</p>
        <div className="billingDetails">
          <div className="billingFormDetails">
            <div className="details">
              <p className="name">Receiver's Name:</p>
              <p className="contact">Contact No.:</p>
              <p className="delivery">Delivery Address:</p>
              <p className="order">Order Date:</p>
              {/* <p className="location">Delivery Location</p> */}
            </div>
            <div className="details-filled">
              <p className="name">Prashant Maharjan</p>
              <p className="contact">+977-9864221478</p>
              <p className="delivery">Sunakothi, Lalitpur</p>
              <p className="order">22th Jan, 2023</p>
              {/* <p className="location">Delivery Location</p> */}
            </div>
          </div>
          <OrderSum button="Proceed To Payment" />
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
