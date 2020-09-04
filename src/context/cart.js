// cart context
import React, { useState, useEffect } from 'react';
import localCart from '../utils/localCart';

function getCartFromLocalStorage() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState(getCartFromLocalStorage())
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
        //local storage
        localStorage.setItem('cart', JSON.stringify(cart))

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
    const addToCart = (product) => {
        const { id, title, price, image: { url } } = product
        const item = cart.find(item => item.title.toLowerCase() === title.toLowerCase());
        if (item) {
            increaseAmount(item.id);
            return;
        } else {
            let item = { id, title, price, image: url, amount: 1 }
            setCart([...cart, item])
            return;
        }
    }

    //increase amount in cart 
    const increaseAmount = (id) => {
        let newCart = [...cart];
        let item = newCart.find(item => item.id === id);
        item.amount += 1;
        setCart(newCart)
    }

    //decrease amount in cart
    const decreaseAmount = (id) => {
        let newCart = [...cart];
        let item = newCart.find(item => item.id === id);
        item.amount -= 1;
        if (item.amount <= 0) {
            item.amount = 0;
        }
        setCart(newCart)
    }

    //clear items from cart
    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };