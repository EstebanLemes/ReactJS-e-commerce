import React from 'react';
import Mother from '../assets/images/motherboard.jpg';

const ItemCard = (props) => {

    return(
        <div>
            <div className="card" style={{width: 300}}>
                <a href="" onClick={(e) => {
                    props.setCart(props.cart+1)
                    e.preventDefault();
                }}>
                    <img className="card-img-top" src={Mother} alt="Cards"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;