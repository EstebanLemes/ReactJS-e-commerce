import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {CartContext} from '../../../contexts/cartContext';

function ItemCount(props){

    const {setCount, count, min, max} = props;

    const [setCant] = useContext(CartContext);

    function onAdd(e){
        return count >= max ? null : setCount(count+1);
    }

    function onRest(){
        return count <= min ? null : setCount(count-1);
    }

    return(
        <>
            <div className="input-group">
                <div className="input-group-prepend">
                    <button onClick={onRest} className="btn btn-primary input-group-prepend">-</button>
                </div>
                <span className="form-control text-center">{count}</span>
                <div className="input-group-append">
                    <button onClick={onAdd} className="btn btn-primary input-group-apend">+</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount;