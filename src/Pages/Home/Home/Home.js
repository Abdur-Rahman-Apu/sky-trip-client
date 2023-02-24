import React from 'react';
import Facilities from '../../Facilities/Facilities';
import Benefit from '../Benefit/Benefit';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Facilities></Facilities>
            <Benefit></Benefit>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;