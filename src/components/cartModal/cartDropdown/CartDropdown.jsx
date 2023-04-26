import CartContext from "../../../Context/Carrito/CartContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import CartItem from "../cartItem/CartItem"
import "./CartDropdown.scss"

const CartDropdown = () => {

    const navigate = useNavigate()
    const {cartItems} = useContext(CartContext)

    const goToCheckOut = ()=> {
        navigate("/checkout")
    }

  return (
    <div>
    <div className="cart-dropdown-container">
        <div className="cart-item">
            {cartItems ? (cartItems.map((cartItem) => (
                <CartItem key={cartItem._id} cartItem={cartItem}/>
            ))
            ) :
                <span className="empty-message">Empty Cart</span>
            }
        </div>
        <Button onClick={goToCheckout}>Go to checkout</Button> 
    </div>
    </div>
  )
}

export default CartDropdown