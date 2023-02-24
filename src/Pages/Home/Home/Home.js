import React from 'react';
import Facilities from '../Facilities/Facilities';
import Banner from '../Banner/Banner';
import Benefit from '../Benefit/Benefit';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import TopTravelers from '../TopTravelers/TopTravelers';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <Services></Services>
            <Facilities></Facilities>
            <Benefit></Benefit>
            <TopTravelers></TopTravelers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;