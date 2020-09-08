import React, {useState, useContext} from 'react';
import CartContext from '../contexts/cartContext';

const Item = (props) => {

    const {cart, setCart} = useContext(CartContext);

    const [hiddeDesc, setHiddeDesc] = useState('hidden');

    const show = () => setHiddeDesc('hidden');
    const hidde = () => setHiddeDesc('');

    function cartUpdate(e){
        setCart(cart+1)
        e.preventDefault();
    }

    return(
        <>
        {
            props.data.map(item => 
                <div className="card" style={{width: 250}}>
                    <img className="card-img-top" src={item.image} alt="Cards"/>
                    <div className={"card-body", hiddeDesc}>
                        <i onClick={cartUpdate} className="cart-in-item fas fa-cart-plus"/>
                    </div>
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