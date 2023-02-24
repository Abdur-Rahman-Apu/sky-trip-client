import React from 'react';
import Facilities from '../../Facilities/Facilities';
import Banner from '../Banner/Banner';
import Benefit from '../Benefit/Benefit';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Facilities></Facilities>
            <Benefit></Benefit>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;