import React, { useEffect, useState } from 'react';
import Item from '../Items/Item/Item';
import {useParams} from 'react-router-dom';
import './styles.css';

export default function CategoryById() {

    const params = useParams();

    const [List, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/categories/${params.id}`)
        .then(response =>{
            return response.json();
        })
        .then(res => {
            setList(res);
            setLoading(false);
        })
    }, [params.id])

    if(loading){
        return <div className="mt-10">Loading...</div>
    }

    const { products } = List;
    
    return (
        <div className="mt-10">
            {List != "" ? <div  className="row justify-content-center"><Item data={products}/></div> : <h1>Loading...</h1>}
        </div>
    )
}