import React, { useState } from 'react';

function ItemCount(props){

    const [count, setCount] = useState(props.initial);

    function onAdd(){
        return count >= props.max ? null : setCount(count+1);
    }

    function onRest(){
        return count <= props.min ? null : setCount(count-1);
    }

    return(
        <>
            <button onClick={onAdd} className="btn btn-primary">+</button>
            <span className="form-control">{count}</span>
            <button onClick={onRest} className="btn btn-primary">-</button>
        </>
    );
}

export default ItemCount;