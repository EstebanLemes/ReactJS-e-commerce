import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Item = (props) => {

    return(
        <>
        {
            props.data.map(item => 
                <NavLink className="text-decoration-none text-black-50" key={item._id} to={`/item/${item._id}`}>
                    <div className="card max-h" style={{width: 250}} key={item._id}>
                        <img className="card-img-top" src={item.imgURL} alt="Cards"/>
                        <div className="card-body">
                            <p className="card-text p-2">{item.name}</p>
                        </div>
                    </div>
                </NavLink>
            )
        }
        </>
    );
}

export default Item;