import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';

const Item = (props) => {

    return(
        <>
        {
            props.data.map(item => 
                <NavLink className="text-decoration-none text-black-50" to={`/item/${item.id}`}>
                    <div className="card" style={{width: 250}} key={item.id}>
                        <img className="card-img-top" src={item.image} alt="Cards"/>
                        <div className="card-body">
                            <p className="card-text p-2">{item.description}</p>
                        </div>
                    </div>
                </NavLink>
            )
        }
        </>
    );
}

export default Item;