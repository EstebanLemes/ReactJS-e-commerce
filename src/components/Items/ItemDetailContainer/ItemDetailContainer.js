import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../../firebase';
import './styles.css';

export default function ItemDetailContainer() {

    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(id);

        item.get()
        .then((doc) => {
            if(!doc.exists){
                console.log("Item does not exist!");
                return true;
            }
            setProduct({id: doc.id, ...doc.data()});
        })
        .catch((error) => {
            console.log('Error searching item: ', error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [id]);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
        .then(response =>{
            return response.json();
        })
        .then(res => {
            setItem(res);
            setLoading(false);
        })
    }, [id])

    if(loading){
        return <div className="mt-10">Loading...</div>
    }

    const itemToView = () => {
        let send = {};
        item.message === "The product doesnt exists" ? (send = product) : (send = item)

        return send;
    }
    
    return (
        <div className="mt-10">
            
            <ItemDetail data={itemToView()}/>
        </div>
    )
}
