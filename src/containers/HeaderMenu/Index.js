import React from 'react';
import styled from 'styled-components';
import { HeaderToHome } from '../../components/Headers/RedHeader';
import Categories from '../../components/Buttons/TabButton';
import { color } from '../../theme/theme';
import Dishes from '../../components/Cards/MenuCard';

const Index = () => {
    return (
        <>
            <HeaderToHome />
            <MenuText>Menu</MenuText>
            <Categories />
            <Dishes />
        </>
    );
};

const MenuText = styled.h1`
    color: ${color.white};
    background-color: ${color.primaryColor};
    text-align: center;
    margin: 33px 0 0 0;
    z-index: 100;
`;

export default Index;