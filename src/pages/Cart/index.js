import { NavBar } from "../../components/Navbar" 
import { ProductCard } from "../../components/Card"

export const Cart = () => {
    return(
        <>
            <NavBar />
            <div className="cart">
                <div className="checkout"></div>
                <div className="placeOrder"></div>
           </div>
        </>
    )
}