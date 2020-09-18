import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';

export default function ItemList() {

    const [List, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://e-commerce-sss.herokuapp.com/api/products')
            .then(response =>{
                return response.json();
            })
            .then(res => {
                setList(res);
                setLoading(false);
            })
        }, 3000)
    }, [])

    if(loading){
        return <div className="mt-10">Loading...</div>
    }

    return (
        <>
            {List !== '' ? <div  className="row justify-content-center"><Item key={List._id} data={List}/></div> : <h1>Loading...</h1>}
        </>
    )
}
