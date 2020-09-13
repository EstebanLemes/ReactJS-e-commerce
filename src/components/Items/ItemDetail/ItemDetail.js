import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail(props) {

    //Desconstructor de la prop
    const {title, description} = props.data;

    return (
        <div className="card" style={{width: 250}}>
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <ItemCount initial={1} max={10} min={0} />
                <a href="#" className="btn btn-primary">Comprar ahora</a>
                <a href="#" className="btn btn-info">Agregar al carrito</a> 
            </div>
        </div>
    )
}