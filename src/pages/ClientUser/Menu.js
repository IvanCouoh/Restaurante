import React from 'react';
import Header from '../../components/Header/HeaderCategories';
import Dishes from '../../components/DishesCard/Index';
import { HeaderToHome } from '../../components/Header/HeaderBack';

const Menu = () => {
    return (
        <div>
            
            <Header />
            <Dishes />
        </div>
    );
};

export default Menu;