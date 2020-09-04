// cart context
import React, { useState, useEffect } from 'react';
import localCart from '../utils/localCart';

const CartContext = React.createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(localCart)
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0)

    useEffect(() => {
        let newCartItems = cart.reduce((total, cartItem) => {
            return (total += cartItem.amount)
        }, 0)
        setCartItems(newCartItems);

        //cart total
        let newTotal = cart.reduce((totalPrice, cartItem) => {
            return (totalPrice += cartItem.amount * cartItem.price)
        }, 0)
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal)
    }, [cart])

    //remove item from cart
    const removeItem = (id) => {
        setCart([...cart].filter(item => item.id !== id))
    }

    //add item from cart
    const addToCart = (product) => { }

    //increase amount in cart
    const increaseAmount = (id) => { }

    //decrease amount in cart
    const decreaseAmount = (id) => { }

    //clear items from cart
    const clearCart = () => { }

    return <CartContext.Provider value={{ cart, total, cartItems, removeItem }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };