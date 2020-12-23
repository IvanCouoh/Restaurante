import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import GoToMenuImg from '../../assets/images/LogoAlaOrd.png';
import { Link } from "react-router-dom";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const GoToMenuComponent = () => {
    return (
        <>
            <GoToMenu>
                <img src={GoToMenuImg} alt="Ir al menú" />
                <div>
                    <p>Estamos A La Orden, ve al menú y ordena ahora </p>
                    <Link to="/menu"><BtnGoToMenu>Ir al menú</BtnGoToMenu></Link>
                </div>
            </GoToMenu>
        </>
    );
};

const GoToMenu = styled.div`
    background: ${color.primaryColor};
    width: 100%;
    height: 150px;
    margin: 150px  0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img{
        background: ${color.white};
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        position: absolute;
        display: flex;
        left:  25px;
        border-radius: 10px;
    }

    p{
        text-align: center;
        color: ${color.white};
        font-size: ${fontSize.fontText};
    }

    @media(max-width: 1080px){
        flex-flow: column-reverse;
        height: 430px;

        img{
            position:static;
            margin-top: 20px;
        }
    }
`;

const BtnGoToMenu = styled.button`
    padding: 10px;
    background: ${color.white};
    color: ${color.primaryColor};
    font-size: ${fontSize.fontText};
    font-weight: 500;
    width: 250px;
    border: none;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
`;

export default GoToMenuComponent;