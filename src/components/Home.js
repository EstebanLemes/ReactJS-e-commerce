import React from 'react';

import Slider from './Slider';
import ItemCard from './ItemCard';

const Home = (props) => {

    return(
        <div>
            <h1>{props.greeting}</h1>
            <Slider />
            <ItemCard 
                cart={props.cart}
                setCart={props.setCart}
            />
        </div>
    );
}

export default Home;