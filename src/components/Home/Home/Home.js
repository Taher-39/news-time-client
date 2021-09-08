import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SlidingBanner from '../SlidingBanner/SlidingBanner';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <SlidingBanner></SlidingBanner>
        </section>
    );
};

export default Home;