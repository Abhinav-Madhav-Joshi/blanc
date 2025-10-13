export const cartReducer = (state, action) => {
  switch (action.type) {
    case "buyProd":
      return { ...state, cartItems: state.cartItems.some(item => item.id === action.payload.id) 
                ? state.cartItems : [...state.cartItems, action.payload]};

    case "rentProd":
      return { ...state, cartItems: state.cartItems.some(item => item.id === action.payload.id) 
                ? state.cartItems : [...state.cartItems, {...action.payload, buyPrice: Math.round(action.payload.buyPrice * 0.3)}]};

    case "removeFromCart":
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };

    case "clearCart":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
