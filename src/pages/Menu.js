import React from 'react';
import Header from '../containers/HeaderMenu/Index';
import Dishes from '../components/Cards/MenuCard';

const Menu = () => {
    return (
        <>
            <Header />
            <Dishes />
        </>
    );
};

export default Menu;