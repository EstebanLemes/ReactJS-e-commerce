import React from 'react';

import Slider from './Slider';
import ItemCard from './ItemCard';
import Footer from './Footer';
import {Mother, Impresora, Notebook, PCGamer} from '../constants/products';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <div className="row justify-content-center">
                <ItemCard image={Mother} />
                <ItemCard image={Impresora} />
                <ItemCard image={Notebook} />
                <ItemCard image={PCGamer} />
                <ItemCard image={Mother} />
                <ItemCard image={Impresora} />
                <ItemCard image={Notebook} />
                <ItemCard image={PCGamer} />
            </div>
            <Footer/>
        </div>
    );
}

export default Home;