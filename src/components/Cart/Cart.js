import React, { useContext} from 'react';
import "./styles.css";
import {CartContext} from '../../contexts/cartContext';

export default function Cart() {

    const [cart] = useContext(CartContext);

    console.log(cart)

    return (
        <div className="mt-10">
            <div className="row">
            {cart.map((item) => (
                <div className="col-12 cart-items" key={item._id}>
                    <div className="row">
                        <div className="col-2">
                            <img className="card-img-top w-100 h-100" src={item.imgURL} alt="Cards"/>
                        </div>
                        <div className="col-3">
                            Nombre: {item.name}
                        </div>
                        <div className="col-2">
                            Cantidad: {item.count}
                        </div>
                        <div className="col-2">
                            U.Price: ${item.price.amount} ({item.price.currency_id})
                        </div>
                        <div className="col-3">
                            Sub-Total: ${item.price.amount * item.count} ({item.price.currency_id})
                        </div>
                    </div>
                </div>
            ))}
            </div>

            <div className="text-right">
                {cart.length > 0 ? <input className="btn btn-success" defaultValue="Finalizar compra"/> : ""}
            </div>
        </div>
    )
}
