import React from 'react';
import Benefit from '../Benefit/Benefit';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Benefit></Benefit>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;