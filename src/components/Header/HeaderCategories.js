import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { IoFastFoodSharp } from "react-icons/io5";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';
import { arrayCategories } from './ArrayCategories';
import { HeaderToHome } from '../../components/Header/HeaderBack';

const HeaderCategories = () => {
    return (
        <>
            <HeaderToHome />
            <MenuText>Menu</MenuText>
            <WrapperHeader>
                {
                    arrayCategories.map((item, index) => (
                        <p key={index}>{item.category}</p>
                    ))
                }
            </WrapperHeader>
        </>
    );
};

const WrapperHeader = styled.header`
    height: 70px;
    background-color: ${color.primaryColor};
    display: flex;
    align-items: center;
    overflow: auto;
    box-shadow: 0 4px 4px rgba(57,73,76,0.2);
    position: sticky;
    top: 33px;
    width: 100%;
    z-index: 100;
    
    p{
        color: ${color.white};
        font-size: ${fontSize.fontText};
        margin: 0 15px;
        border-radius: 25px;
        border: 1.5px solid ${color.white};
        padding: 10px 20px;
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        /* para no seleccionar el texto */
        -moz-user-select: none; 
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none; 
    }
`;

const MenuText = styled.h1`
    color: ${color.white};
    background-color: ${color.primaryColor};
    text-align: center;
    margin: 33px 0 0 0;
    z-index: 100;
`;

export default HeaderCategories;