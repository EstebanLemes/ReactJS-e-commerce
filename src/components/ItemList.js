import React, {useState} from 'react'
import Item from './Item';
import {Mother, Impresora, Notebook, PCGamer} from '../constants/products';

export default function ItemList() {

    const [List, setList] = useState([]);

    const task = new Promise((res, rej) => {
        setTimeout(() => {
            const data = [
                {image: `${Mother}`, description: 'Motherboard Gigabyte Aorus Z390'},
                {image: `${Impresora}`, description: 'Impresoras de cartucho'},
                {image: `${Notebook}`, description: 'Notebooks a pedido'},
                {image: `${PCGamer}`, description: 'CPUs armadas a medida del cliente'}

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
            {List != '' ? <Item data={List}/> : <h1>Loading...</h1>}
        </>
    )
}
