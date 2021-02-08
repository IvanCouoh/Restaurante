import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { color, fontSize } from '../../theme/theme';
import GoToMenuImg from '../../assets/images/LogoAlaOrd.png';
import LinkButtom from '../../components/Buttons/WhiteButton';

const Index = () => {
    return (
        <GoToMenu>
            <img src={GoToMenuImg} alt="Ir al menú" />
            <div>
                <p>Estamos A La Orden, ve al menú y ordena ahora </p>
                <LinkButtom pathLink="/menu" text="Ir al menú" />
            </div>
        </GoToMenu>
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
        font-size: ${fontSize.fontMedium};
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

export default Index;