import React from 'react';

import Slider from '../../components/Sliders/Slider';
import ItemList from '../../components/Items/ItemList/ItemList';
import HotProducts from '../../components/HotProducts/HotProducts';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <>
                <HotProducts/>
                <ItemList/>
            </>
        </div>
    );
}

export default Home;