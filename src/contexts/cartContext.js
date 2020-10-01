import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState([]);

    return(
        <CartContext.Provider value={[cart, setCart, item, setItem]}>
            {props.children}
        </CartContext.Provider>
    )
};