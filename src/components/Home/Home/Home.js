import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import PoliticsNews from '../PoliticsNews/PoliticsNews';
// import PoliticsNews from '../PoliticsNews/PoliticsNews';
import SlidingBanner from '../SlidingBanner/SlidingBanner';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <SlidingBanner></SlidingBanner>
            <PoliticsNews></PoliticsNews>
            <Footer></Footer>
        </section>
    );
};

export default Home;