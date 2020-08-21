import React from 'react';

const LogoIcon = (props) => {

    return(
        <a className="cart" href="" >
            <i className="fas fa-shopping-cart text-white"/>
            <span className="badge">{props.cart}</span>
        </a>
    );
}

export default LogoIcon;