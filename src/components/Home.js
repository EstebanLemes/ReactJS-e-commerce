import React from 'react';

import Slider from './Slider';
import ItemCard from './ItemCard';
import {Mother, Impresora, Notebook, PCGamer} from '../constants/products';
import ItemCount from './ItemCount';

const Home = (props) => {

    return(
        <div>
            <Slider />
            {/* <div class="row">
                <ItemCard image={Mother} />
                <ItemCard image={Impresora} />
                <ItemCard image={Notebook} />
                <ItemCard image={PCGamer} />

                <ItemCard image={Mother} />
                <ItemCard image={Impresora} />
                <ItemCard image={Notebook} />
                <ItemCard image={PCGamer} />
                
            </div> */}
            <ItemCount 
                initial={5}
                min={0}
                max={50}
            />

        </div>
    );
}

export default Home;