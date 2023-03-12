import { createContext } from "react";
import list from "../list";

export const productContext = createContext();



const ProductContext = ({ children }) => {
  return (
    <productContext.Provider value={{ list }}>
      {children}
     
    </productContext.Provider>
  );
};

export default ProductContext;
