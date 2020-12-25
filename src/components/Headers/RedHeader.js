import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';
import { Link } from 'react-router-dom';

export const HeaderMenu = () => {
    return (
        <Wrapper>
            <Link className="link" to="/menu">
                <span><IoIosArrowBack /><p>Atrás</p></span>
            </Link>
            <Link className="link" to="/mi-orden">
                <span><p>Ver orden</p><IoFastFoodSharp /></span>
            </Link>
        </Wrapper>
    );
}

export const HeaderToHome = () => {
    return (
        <Wrapper>
            <Link className="link" to="/">
                <span><IoIosArrowBack /><p>Inicio</p></span>
            </Link>
            <Link className="link" to="/mi-orden">
                <span><p>Ver orden</p><IoFastFoodSharp /></span>
            </Link>
        </Wrapper>
    );
}

export const HeaderToDetail = () => {
    return (
        <Wrapper>
            <Link className="link" to="/">
                <span><IoIosArrowBack /><p>Inicio</p></span>
            </Link>
            <Link className="link" to="/mi-orden">
                <span><p>Ver orden</p><IoFastFoodSharp /></span>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: auto;
    background-color: ${color.primaryColor};
    color: ${color.whiteoscuro};
    font-size: ${fontSize.fontTitle};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;

    .link{
        display: flex;
        text-decoration: none;
        font-size: ${fontSize.fontText};
        color: ${color.white};
        align-items: center;
        margin: 7px 15px;
    }

    span{
        margin-right: 7px;
        display: flex;
        align-items: center;
    }
    
    p{
        margin: 0 5px;
    }
`;
