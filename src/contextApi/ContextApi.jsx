// ContextApi.js
import React, { createContext, useState } from 'react';
import { PRODUCTs } from '../util/data';

export const ProductApi = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTs.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ContextApi = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

         const getTotalAmount = () => {
            let toTal = 0 ;
            for ( const item in cartItems){
                if (cartItems[item] > 0){
                    let itemInfo = PRODUCTs.find((prod) => prod.id === Number(item));
                  toTal += cartItems[item] * itemInfo.productPrice;
                }
            }
            return toTal;
         };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, getTotalAmount };
    console.log(cartItems);

    return (
        <>
        <ProductApi.Provider value={contextValue}>
            {props.children}
        </ProductApi.Provider>
        </>
    )
}
