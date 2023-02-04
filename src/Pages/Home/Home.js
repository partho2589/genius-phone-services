import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div> 
            <Banner/>
            <Services></Services>
            <Reviews/>
        </div>
    );
};

export default Home;