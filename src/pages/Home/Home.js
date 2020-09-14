import React from 'react';

import Slider from '../../components/Sliders/Slider';
import ItemList from '../../components/Items/ItemList/ItemList';

const Home = (props) => {

    return(
        <div>
            <Slider />
            <>
                <ItemList/>
            </>
        </div>
    );
}

export default Home;