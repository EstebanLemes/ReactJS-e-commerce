import React, {useState, useContext} from 'react';
import CartContext from '../../../contexts/cartContext';

const Item = (props) => {

    const {cart, setCart} = useContext(CartContext);

    function cartUpdate(e){
        setCart(cart+1)
        e.preventDefault();
    }

    return(
        <>
        {
            props.data.map(item => 
                <div className="card" style={{width: 250}} key={item.id}>
                    <img className="card-img-top" src={item.image} alt="Cards"/>
                    <div className="card-body">
                        <p className="card-text p-2">{item.description}</p>
                    </div>
                </div>
            )
        }
        </>
    );
}

export default Item;