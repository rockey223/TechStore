// import { useState } from "react";
import Product from "./Product";
// import { Container } from "react-bootstrap";
// import list from "./list";
import { useContext } from "react";
import { productContext } from "./Context/ProductContext";
const FeatureProduct = () => {
  const { list } = useContext(productContext);

  return (
    <>
      <div className="feature container">
        <h1>Our Feature Product</h1>
        <div className="featuredItemWrapper">
          {list.map((data) => {
            const { feature, id } = data;
            if (feature === "true") {
              return <Product products={data} key={id} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
