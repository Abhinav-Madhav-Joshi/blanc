import { NavBar } from "../../components/Navbar" 
import { useCart } from "../../context/cartContext";


export const Cart = () => {
    const { cartItems, cartDispatch } = useCart();
    return(
        <>
            <NavBar />
            <div className="cart">
                <div className="checkout">
                {  
                    cartItems.length===0 ? ( <span> Your Cart is Empty! </span> ):
                    (
                        <div className="cartItems">
                        {cartItems.map(item => (
                            <div className="cartItem">
                                <img src={item.imgSrc} className="cartImg" />
                                <div style={{flexGrow:"1"}}>
                                <h3>{item.title}</h3>
                                <span style={{fontWeight:"620"}}>Price: ₹{item.buyPrice} {item.buyPrice<1000?"(Rent)":""}</span>
                                <button className="removeButton" onClick={() => cartDispatch({type: 'removeFromCart', payload: item.id})}>
                                    <span class="material-symbols-outlined"> remove_shopping_cart </span>
                                </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    )
                }
                </div>
                <div className="placeOrder">
                    {/* bas */}
                </div>
           </div>
        </>
    )
}