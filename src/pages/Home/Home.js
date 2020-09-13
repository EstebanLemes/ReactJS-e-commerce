import React from 'react';

import Slider from '../../components/Sliders/Slider';
import ItemList from '../../components/Items/ItemList/ItemList';
import Footer from '../../components/Footer/Footer';
import ItemDetailContainer from '../../components/Items/ItemDetailContainer/ItemDetailContainer';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <>
                <ItemList/>
                <ItemDetailContainer />
            </>
        </div>
    );
}

export default Home;