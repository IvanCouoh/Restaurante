import React from 'react';
import styled from 'styled-components';
import HeaderToHome from '../../components/Headers/RedHeader';
import Categories from '../../components/Buttons/TabButton';
import { color } from '../../theme/theme';
import { IoFastFoodSharp } from "react-icons/io5";

const Index = () => {
    return (
        <>
            <HeaderToHome linkLeft="/" textLeft="Inicio" linkRight="/mi-orden" textRight="Ver mi orden" icon={<IoFastFoodSharp />} />
            <MenuText>Menú</MenuText>
            <Categories />
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