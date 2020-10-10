import React, {useContext, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../../../contexts/cartContext';

export default function ItemDetail(props) {

    const [cart, setCart] = useContext(CartContext);

    //Desconstructor de la prop
    const {_id, name, imgURL, price} = props.data;

    const {amount, currency_id} = price ?? {price: []}

    const [count, setCount] = useState(1);

    const addToCart = () => {
        const items = {name, imgURL, price, count, _id};
        setCart(currentCart => [...currentCart, items])
    }

    return (
        <div className="row mb-4">
            <div className="col-8">
                <img className="card-img-top h-100" src={imgURL} alt="Ilustrative card"/>
            </div>
            <div className="col-4 border-top border-right border-bottom">
                <h1 className="card-title">{name}</h1>
                <p className="card-text">{name}</p>
                <p className="card-text">$ {amount} ({currency_id})</p>
                <ItemCount initial={1} max={10} min={0} count={count} setCount={setCount} />
                <NavLink className="btn btn-block mt-2 btn-primary" onClick={addToCart} to={`/item/${_id}`}>Agregar al carrito</NavLink>
                <NavLink className="btn btn-block mt-2 btn-info" to={`/cart`}>Cantidad a comprar: {count}</NavLink>
            </div>
        </div>
    )
}