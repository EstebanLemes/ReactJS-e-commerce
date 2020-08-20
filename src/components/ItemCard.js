import React from 'react';
import Mother from '../assets/images/motherboard.jpg';

function ItemCard() {
    return(
        <div>
            <div className="card" style={{width: 300}}>
                <a href="#">
                    <img className="card-img-top" src={Mother} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ItemCard;