import CartContext from './CartContext';
import { useReducer } from 'react';
import cartReducer from './cartReducer';
import { addCartItem, removeCartItem, clearCartItem } from "./cartFunction"

const CartProvider = ({children}) => {

const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, initialState);

//* Funcion que actualiza los productos en mi reducer del carrito (funcion acumuladora)

const updateCartItemReducer = (newCartItems) => {
    // reduce es un metodo de array que sirve para acumular valores
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.precio, 0);


    dispatch({
        type: "SET_CART_ITEMS",
        payload: {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }
    })
}

const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems)
}

const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItems)
}

const clearItemToCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems)
}

const clearItemFromCheckout = () => {
    dispatch({
        type: "CLEAR_CHECKOUT"
    })
}

const setIsCartOpen = (bool) => {
    dispatch({type: "SET_IS_CART_OPEN", payload: bool})
}


  return (
    <CartContext.Provider value={{addItemToCart, removeItemToCart, clearItemToCart, clearItemFromCheckout, isCartOpen, cartItems, cartCount, cartTotal, setIsCartOpen}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;