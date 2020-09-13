import React, {useState, useEffect} from 'react'
import Item from '../Item/Item';
import {TangoGestion, PCGamer, Sistemas, Windows, SoftwareAMedida} from '../../../constants/products';

export default function ItemList() {

    const [List, setList] = useState([]);
    const [loading, setLoading] = useState('true');
    const [data, setData] = useState([]);

    const task = new Promise((res, rej) => {
        setTimeout(() => {
            const data = [
                {id: 1, image: `${TangoGestion}`, description: 'Motherboard Gigabyte Aorus Z390'},
                {id: 2, image: `${PCGamer}`, description: 'Impresoras de cartucho'},
                {id: 3, image: `${Sistemas}`, description: 'Notebooks a pedido'},
                {id: 5, image: `${SoftwareAMedida}`, description: 'CPUs armadas a medida del cliente'}

            ]
            res(data)
        }, 2000)
    });

    task.then((result) => {
        setList(result)
    }, (err) => {
        console.log('Rejected: '+ err);
      });

    return (
        <>
            {List != '' ? <div  className="row justify-content-center"><Item data={List}/></div> : <h1>Loading...</h1>}
        </>
    )
}
