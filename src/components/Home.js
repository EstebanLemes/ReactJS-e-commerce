import React from 'react';

import Slider from './Slider';
import ItemCard from './ItemCard';
import {Mother, Impresora, Notebook, PCGamer} from '../constants/products';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <div class="row">
                <ItemCard 
                    image={Mother}
                />
                <ItemCard
                    image={Impresora}
                />
                <ItemCard
                    image={Notebook}
                />
                <ItemCard
                    image={PCGamer}
                />

                <ItemCard 
                    image={Mother}
                />
                <ItemCard
                    image={Impresora}
                />
                <ItemCard
                    image={Notebook}
                />
                <ItemCard
                    image={PCGamer}
                />
                
            </div>
            
        </div>
    );
}

export default Home;