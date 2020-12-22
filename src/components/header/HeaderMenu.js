import React from 'react';
import styled from 'styled-components';
import logo2 from '../../assets/images/segundoLogo.png';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

const HeaderMenu = () => {
    return (
        <>
            <Wrapper>
                <LinkToHome>
                    <Link to="/"><AiFillHome /> Inicio</Link>
                </LinkToHome>
                <h1>MENÚ</h1>
                <WrapperHeader>
                    <p>Desayunos</p>
                    <p>Almuerzos</p>
                    <p>Cenas</p>
                    <p>Postres</p>
                    <p>Bebidas</p>
                    <p>Desayunos</p>
                    <p>Almuerzos</p>
                    <p>Cenas</p>
                    <p>Postres</p>
                </WrapperHeader>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E51B23;
    position: fixed;
    top: 0;
    width: 100%;
    
    h1{
        color: #fff;
        margin: 13px 0 5px 0;
        text-align: center;
    }
`;

const LinkToHome = styled.div`
    color: #fff;
    text-align: center;
    margin-top: 10px;
    
    a:nth-child(1){
        color: #fff;
        text-decoration: none;
    }
`;

const WrapperHeader = styled.header`
    height: 75px;
    background-color: #E51B23;
    display: flex;
    align-items: center;
    overflow: auto;
    box-shadow: 0 4px 4px rgba(57,73,76,0.2);
    
    p{
        color: #fff;
        margin: 0 15px;
        border-radius: 25px;
        border: 1.5px solid #fff;
        padding: 10px 20px;
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        /* para no seleccionar el texto */
        -moz-user-select: none; 
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none; 
    }
`;

export default HeaderMenu;