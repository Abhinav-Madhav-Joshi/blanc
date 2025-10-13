import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer"; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const initialState = {
    cartItems: [] 
  };

  const [state, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
