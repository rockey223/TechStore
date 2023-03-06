// import "./product.css";
import { NavLink } from "react-router-dom";
import FormatPrice from "./singleProduct/FormatPrice";
const Product = ({products}) => {
  // console.log(products)
  // const { id, img, name, price } = products;



  return (
    <>
    <NavLink className="productLink" to={`/singleproduct/${products.id}`}>
    <div className="productItem" >
        <img src={products.img} className="productImage" alt="" />
        <div className="produtDetails">
          <div className="productName">{products.name}</div>
          <div className="productPrice"><FormatPrice price ={products.price}/></div>
        </div>
      </div>
    </NavLink>
      
    </>
  );
};
export default Product;
