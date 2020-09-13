import React, {useState, useContext} from 'react';
import CartContext from '../../../contexts/cartContext';

const LogoIcon = () => {

    const {cart} = useContext(CartContext);

    return(
        <a className="cart" href="" >
            <i className="fas fa-shopping-cart text-white"/>
            <span className="badge">{cart}</span>
        </a>
    );
}

export default LogoIcon;