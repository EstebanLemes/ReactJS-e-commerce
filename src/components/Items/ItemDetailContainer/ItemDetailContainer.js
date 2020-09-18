import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import './styles.css';

export default function ItemDetailContainer() {

    const params = useParams();

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(`https://e-commerce-sss.herokuapp.com/api/products/${params.id}`)
            .then(response =>{
                return response.json();
            })
            .then(res => {
                setItem(res);
                setLoading(false);
            })
        }, 3000)
    }, [params.id])

    if(loading){
        return <div className="mt-10">Loading...</div>
    }
    
    return (
        <div className="mt-10">
            <ItemDetail data={item}/>
        </div>
    )
}
