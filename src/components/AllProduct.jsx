import Product from "./Product";
// import list from "./list";
import { useContext } from "react";
import { productContext } from "./Context/ProductContext";
const ProductList = () => {
  const {list} = useContext(productContext)
  return (
    <>
      <div className="productWrapper">
        {list.map((data,index) => {
          return <Product products={data} key={index}/>;
        })}
      </div>
    </>
  );
};
export default ProductList;
