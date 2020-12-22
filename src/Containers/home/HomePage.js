import React from 'react';
import ContentHome from '../../components/ContentHome/Index';
import GoToMenu from '../../components/ContentHome/GoToMenuComponent';
import Footter from '../../components/ContentHome/FooterHome';

const HomePage = () => {
    return (
        <>
            <ContentHome />
            <GoToMenu />
            <Footter />
        </>
    );
};

export default HomePage;