import React, { useState } from 'react';
import '../App.js';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { color } from '../theme/theme';
import { fontSize } from '../theme/theme';
import Fade from 'react-reveal/Fade';
import GoToMenu from '../containers/GoToMenu/Index';
import Footter from '../components/Footer/Index';
import Carousel from '../components/Cards/CarouselCards';

const Home = () => {

    const [menuBackground, setMenuBackground] = useState(false);
    const [click, setClick] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 150) {
            setMenuBackground(true);
        } else {
            setMenuBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const changeIconMenu = () => {
        setClick(!click);
    }

    return (
        <>
            <div className="image-fix">
                <WrapperHeader>
                    <header className={menuBackground ? "headerStyle background" : "headerStyle"}>
                        <a href="/" ><img src={logo} alt="A La Orden" /></a>
                        <MenuOptions>
                            <Hamburguesa onClick={changeIconMenu}> {click ? <AiOutlineClose style={{ color: "#E51B23" }} /> : <AiOutlineMenu style={{ color: "#E51B23" }} />} </Hamburguesa>
                        </MenuOptions>
                        <div className={click ? "ShowMenuOptions Active" : "menuOptions"}>
                            <a href="#inicio">Inicio</a>
                            <a href="#favoritos">Favoritos</a>
                            <a href="#promociones">Promociones</a>
                            <Link to="/menu">Menú</Link>
                        </div>
                    </header>
                </WrapperHeader>
                <ScrollDown id="inicio">
                    <h1>Bienvenido</h1>
                    <p>Todo nuestro menú está a su disposición como desayunos, almuerzos, cenas, postres, bebidas y más, sin hacer largas filas para pedidos ni para recogerlos, nosotros le hacemos llegar su orden hasta su mesa.</p>
                    <Fade top>
                        <BsChevronCompactDown />
                    </Fade>
                </ScrollDown>
            </div>
            <Carousel />
            <GoToMenu />
            <Footter />
        </>
    );
};

const WrapperHeader = styled.header`
    .headerStyle{
        z-index: 100;
        display: flex;
        position: fixed;
        width: 100%;
        height: 94px;
        top:0;
    }

    img{
        width: 240px;
        cursor: pointer;
    }

    .background{
        background: ${color.white};
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        transition: 0.5s ease-in-out;
        -webkit-transition: 0.5s ease-in-out;

        a{
            color: ${color.primaryColor};
        }
        a:hover{
            text-decoration-color: ${color.primaryColor};
            text-decoration: underline;
        }
    }

    .menuOptions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

    @media (max-width: 849px){
        img{
            width: 195px;
            z-index: 100;
        }

        .menuOptions{
            display: none;
        }
    }

    .ShowMenuOptions{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        height: 100vh;
        background-color: ${color.white};

            a{
                margin: 15px 0;
                color: ${color.primaryColor};
            }
        }

    .Active{
        display: flex;
    }

    a{
        font-size: ${fontSize.fontText};
        font-weight: 500;
        margin: 0 25px;
        display: flex;
        align-items: center;
        color: ${color.white};
        text-decoration: none;
        cursor: pointer;

        &:hover{
            color: ${color.primaryColor};
            text-decoration: underline;
            font-weight: 500;
        }
    }
        a:nth-child(4){
            margin-right: 25px;
        }
    
`;

const MenuOptions = styled.div`
    display: none;

    @media (max-width: 849px){
        &{
            display: flex;
            justify-content: flex-end;
            width: 100%;
            background-color: none;
            position: absolute;
            align-items: center;
            height: 94px;
        }
    }
`;

const Hamburguesa = styled.span`
    margin: 0 15px;
    font-size: 35px;
    z-index: 300;
    @media (max-width: 810px){color: ${color.whiteoscuro};}
`;

const ScrollDown = styled.div`
    color: ${color.whiteoscuro};
    font-size: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -10px;

    h1{
        font-family: 'Pinyon Script', cursive;
        font-size: 90px;
        font-weight: 600;
        background: none;
        color: ${color.white};
        margin: 120px 0 50px 0;
        text-shadow: 3px 2px 1px #aaa;
    }

    p{
        padding: 0 20%;
        font-size: ${fontSize.fontSubTile};
        font-weight: 500;
        text-shadow: 1px 1px 1px #aaa;
        margin: 5px 0 40px 0;
        text-align: center;
    }

    @media (max-width: 810px){
        h1{
            font-size: 70px;
        }
        p{
            padding: 0;
        }
    }
`;

export default Home;