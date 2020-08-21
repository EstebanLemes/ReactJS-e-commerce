import React, {useState} from 'react';
import Mother from '../assets/images/motherboard.jpg';

const ItemCard = (props) => {

    const [hiddeDesc, setHiddeDesc] = useState('hidden');

    const show = () => setHiddeDesc('hidden');
    const hidde = () => setHiddeDesc('');

    return(
        <div>
            <div className="card" style={{width: 300}}>
                <a onMouseLeave={show} onMouseMove={hidde} class="item" href="">
                    <img className="card-img-top" src={Mother} alt="Cards"/>
                    <div className={"card-body", hiddeDesc}>
                        <p className="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <i 
                            onClick={(e) => {
                                props.setCart(props.cart+1)
                                e.preventDefault();
                            }} 
                            className="cart-in-item fas fa-shopping-cart"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;