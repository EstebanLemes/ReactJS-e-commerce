import React, {useState, useContext} from 'react';
import CartContext from '../../../contexts/cartContext';
import { NavLink } from 'react-router-dom';

const LogoIcon = () => {

    const {cart} = useContext(CartContext);

    return(
        <NavLink className="cart" to="/cart" >
            <i className="fas fa-shopping-cart text-white"/>
            <span className="badge">{cart}</span>
        </NavLink>
    );
}

export default LogoIcon;