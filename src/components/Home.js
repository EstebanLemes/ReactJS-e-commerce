import React from 'react';

import Slider from './Slider';
import ItemList from './ItemList';
import Footer from './Footer';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <div className="row justify-content-center">
                <ItemList/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;