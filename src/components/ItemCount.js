import React, { useState } from 'react';

function ItemCount(props){

    const [count, setCount] = useState(props.initial);

    function onAdd(){
        if(count >= props.max){
            return;
        } else {
            setCount(count+1);
        }
    }

    function onRest(){
        if(count <= props.min){
            return;
        } else {
            setCount(count-1);
        }
    }

    return(
        <>
            <button onClick={onAdd} className="btn btn-primary">+</button>
            <span>{count}</span>
            <button onClick={onRest} className="btn btn-primary">-</button>
        </>
    );
}

export default ItemCount;