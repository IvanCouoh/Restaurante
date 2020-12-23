import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';
import { arrayCategories } from './ArrayCategories';

const HeaderCategories = () => {
    return (
        <>
            <Wrapper>
                <LinkToHome>
                    <Link to="/"><AiFillHome /> Inicio</Link>
                </LinkToHome>
                <h1>MENÚ</h1>
                <WrapperHeader>
                    {
                        arrayCategories.map((item, index) => (
                            <p>{item.category}</p>
                        ))
                    }
                </WrapperHeader>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.primaryColor};
    position: fixed;
    top: 0;
    width: 100%;
    
    h1{
        color: ${color.white};
        margin: 10px 0 5px 0;
        text-align: center;
    }
`;

const LinkToHome = styled.div`
    color: ${color.white};
    text-align: center;
    margin-top: 10px;
    
    a:nth-child(1){
        color: ${color.white};
        font-size: ${fontSize.fontText};
        text-decoration: none;
    }
`;

const WrapperHeader = styled.header`
    height: 75px;
    background-color: ${color.primaryColor};
    display: flex;
    align-items: center;
    overflow: auto;
    box-shadow: 0 4px 4px rgba(57,73,76,0.2);
    
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

export default HeaderCategories;