import React, {useState, useContext} from 'react';
import CartContext from '../contexts/cartContext';

const ItemCard = (props) => {

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
            <div className="card" style={{width: 270}}>
                <a onClick={(e) => e.preventDefault()} onMouseLeave={show} onMouseMove={hidde} class="item" href="">
                    <img className="card-img-top" src={props.image} alt="Cards"/>
                    <div className={"card-body", hiddeDesc}>
                        <i onClick={cartUpdate} className="cart-in-item fas fa-cart-plus"/>
                    </div>
                    <div className="card-body">
                    <p className="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default ItemCard;