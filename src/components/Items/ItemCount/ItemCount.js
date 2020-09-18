import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../../contexts/cartContext';

function ItemCount(props){

    const {setCant} = useContext(CartContext);
    const [count, setCount] = useState(props.initial);

    function onAdd(){
        return count >= props.max ? null : setCount(count+1);
    }

    function onRest(){
        return count <= props.min ? null : setCount(count-1);
    }

    useEffect(() => {
        setCant(count)
    }, [count])

    return(
        <>
        <div className="input-group">
                <button onClick={onRest} className="btn btn-primary input-group-prepend">-</button>
                <span className="form-control">{count}</span>
                <button onClick={onAdd} className="btn btn-primary input-group-apend">+</button>
            </div>
        </>
    );
}

export default ItemCount;