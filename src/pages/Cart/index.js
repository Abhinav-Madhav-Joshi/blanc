import { NavBar } from "../../components/Navbar" 
import { useCart } from "../../context/cartContext";

export const Cart = () => {
    const { cartItems, cartDispatch } = useCart();

    const orderPlaced = () => {
        cartDispatch({ type: "clearCart" })
        setTimeout(() => {alert("Your order has been placed!\nHope you have a great day!");}, 10);
    };

    const s1 = () => { alert("We'll try to provide with better next time"); };

    const s2 = () => { alert("We'll try to provide with better next time"); };

    const s3 = () => { alert("We'll try to provide with better next time"); };

    const s4 = () => { alert("Thanks for 4 stars"); };

    const s5 = () => { alert("Thanks, we'll try to keep that up"); };

    return(
        <>
            <NavBar />
            <div className="cart">
                <div className="checkout">
                {  
                    cartItems.length===0 ? ( <div className="checkoutCartEmpty"> 
                                            Oops! Your Cart is Empty 
                                            <span class="material-symbols-outlined emoji">                    
                                                 sentiment_dissatisfied </span> </div> ):
                    (
                        <>
                        <span className="feedbackText"> 
                            <span>Please Rate us</span>
                            <div className="star">
                                <span class="material-symbols-outlined individualStar" onClick={s1}>star</span>
                                <span class="material-symbols-outlined individualStar" onClick={s2}>star</span>
                                <span class="material-symbols-outlined individualStar" onClick={s3}>star</span>
                                <span class="material-symbols-outlined individualStar" onClick={s4}>star</span>
                                <span class="material-symbols-outlined individualStar" onClick={s5}>star</span>
                            </div>
                        </span>
                        <div className="cartItems">
                        {cartItems.map(item => (
                            <div className="cartItem">
                                <img src={item.imgSrc} className="cartImg" alt={item.title} />
                                <div style={{flexGrow:"1"}}>
                                <h3 className="itemTitle">{item.title}</h3>
                                <span className="itemPrice">Price: ₹{item.buyPrice} {item.buyPrice<1000?"(Rent)":""}</span>
                                <button className="removeButton" onClick={() => cartDispatch({type: 'removeFromCart', payload: item.id})}>
                                    <span class="material-symbols-outlined"> remove_shopping_cart </span>
                                </button>
                                </div>
                            </div>
                        ))}
                        </div>
                        </>
                    )
                }
                </div>
                <div className="placeOrder">
                {  
                    cartItems.length===0 ? ( <div className="placeOrderCartEmpty"> Looks like you forgot to add something... </div> ):
                    (
                        <>
                            <div className="bill">
                                <div className="cartPrices">{cartItems.map(item => ( <div> ₹{item.buyPrice} </div> ))} </div>
                                <span className="finalTotal">Total: ₹{cartItems.reduce((sum, item) => sum + item.buyPrice, 0)}</span>
                                <button className="orderButton" onClick={orderPlaced}> Place Order </button>
                            </div>
                            <div className="note"> 
                                <span className="checkoutText"> 
                                    <span>Shopping Cart</span>
                                    <span class="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </span>
                                <span>*Rental charges apply per day </span>
                            </div>
                        </>
                    )
                }
                </div>
           </div>
        </>
    )
}