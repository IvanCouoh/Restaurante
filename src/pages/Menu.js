import React from 'react';
import Header from '../components/header/HeaderMenu'
import Dishes from '../components/menuContent/DishesCards';

const Menu = () => {
    return (
        <div>
            <Header />
            <Dishes />
        </div>
    );
};

export default Menu;