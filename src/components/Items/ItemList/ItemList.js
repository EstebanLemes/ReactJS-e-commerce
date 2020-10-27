import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import Loading from '../../Loading/Loading';

require('dotenv').config()

export default function ItemList() {

    const [List, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(response =>{
            return response.json();
        })
        .then(res => {
            setList(res);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <Loading/>
    }

    return (
        <>
            {List !== '' ? <div  className="row justify-content-center"><Item key={List._id} data={List}/></div> : <Loading/>}
        </>
    )
}
