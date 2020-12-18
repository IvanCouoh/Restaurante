import React from 'react';
import HeaderImage from '../../components/home/HeaderImage';
import FavoritesOffers from '../../components/home/FavoritesOffers';
import Footter from '../../components/home/FooterHome';

const Home = () => {
    return (
        <>
            <HeaderImage />
            <FavoritesOffers />
            <Footter />
        </>
    );
};

export default Home;