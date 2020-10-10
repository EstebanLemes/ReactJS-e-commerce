import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../../firebase';
import './styles.css';

export default function ItemDetailContainer() {

    const params = useParams();

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://e-commerce-sss.herokuapp.com/api/products/${params.id}`)
        .then(response =>{
            return response.json();
        })
        .then(res => {
            setItem(res);
            setLoading(false);
        })
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
