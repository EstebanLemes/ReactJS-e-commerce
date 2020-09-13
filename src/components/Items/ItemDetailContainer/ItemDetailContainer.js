import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {PCGamer} from '../../../constants/products';

export default function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://book-container.herokuapp.com/api/e-commerce/5f4fb2e99ebe402eccde3ccb')
            .then(response =>{
                return response.json();
            })
            .then(res => {
                setItem(res);
                setLoading(false);
            })
        }, 3000)
    }, [])

    useEffect(() => {
        console.log(item);
    }, [item])

    if(loading){
        return <div>Loading...</div>
    }
    
    return (
        <div>
            {item ? <ItemDetail image={PCGamer} data={item}/> : <ItemDetail>Loading...</ItemDetail>}
        </div>
    )
}
