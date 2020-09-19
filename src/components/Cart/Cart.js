import React, { useContext } from 'react';
import "./styles.css";
import cartContext from '../../contexts/cartContext';

export default function Cart() {

    const { item } = useContext(cartContext);

    console.log(item)

    return (
        <div className="mt-10">
            <div className="row">
                <div className="col-12 cart-items">
                    <div className="row">
                        <div className="col-4">
                            {item}
                            <img className="card-img-top" src={item} alt="Cards"/>
                        </div>
                        <div className="col-6">
                            Descripcion del item
                        </div>
                        <div className="col-2">
                            Botones
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
