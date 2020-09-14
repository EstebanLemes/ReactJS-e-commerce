import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink, useParams } from 'react-router-dom';

export default function ItemDetail(props) {

    //Desconstructor de la prop
    const {title, description} = props.data;

    return (
        <div className="row mb-4">
            <div className="col-8">
                <img className="card-img-top h-100" src={props.image} alt="Card image cap"/>
            </div>
            <div className="col-4 border-top border-right border-bottom">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{description}</p>
                <ItemCount initial={1} max={10} min={0} />
                <NavLink className="btn btn-info" to={`/cart`}>Comprar ahora</NavLink>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    )
}