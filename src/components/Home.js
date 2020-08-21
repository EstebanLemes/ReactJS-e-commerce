import React from 'react';

import Slider from './Slider';
import ItemCard from './ItemCard';
import {Mother, Impresora, Notebook, PCGamer} from '../constants/products';

const Home = (props) => {

    return(
        <div>
            <h1>{props.greeting}</h1>
            <Slider />
            <div class="row">
                <ItemCard 
                    image={Mother}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={Impresora}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={Notebook}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={PCGamer}
                    cart={props.cart}
                    setCart={props.setCart}
                />

<ItemCard 
                    image={Mother}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={Impresora}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={Notebook}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                <ItemCard
                    image={PCGamer}
                    cart={props.cart}
                    setCart={props.setCart}
                />
                
            </div>
            
        </div>
    );
}

export default Home;