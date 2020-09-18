import React from 'react';
import "./styles.css";

export default function Cart() {

    return (
        <div className="mt-10">
            <div className="row">
                <div className="col-12 cart-items">
                    <div className="row">
                        <div className="col-4">
                            Imagen del item
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
