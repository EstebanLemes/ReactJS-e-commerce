import React, {useState, useEffect} from 'react'
import { getFirebase } from '../../firebase';
import Item from '../Items/Item/Item';
import Loading from '../Loading/Loading';
import { getFirestore } from '../../firebase';

export default function HotProducts() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items")
        itemCollection.get()
        .then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("No data!");
            }
            setItems(querySnapshot.docs.map(doc => {
                return ({id: doc.id, ...doc.data() });
            }));
        })
        .catch((error) => {
            console.log("There was an error trying to get items: ", error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    if(loading){
        return <Loading/>
    }

    return (
        <>
            {items !== '' ? <div  className="row justify-content-center"><Item key={items.id} data={items}/></div> : <Loading/>}
        </>
    )
}
