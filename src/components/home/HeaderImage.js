import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import logo1 from '../../assets/images/LogoAlaOrd.png';
import logo2 from '../../assets/images/segundoLogo.png';
import { BsChevronCompactDown } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const HeaderImage = () => {
    const [menu, setMenu] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 150) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <div class="image-fix">
                <WH>
                    <header className={menu ? "headerStyle background" : "headerStyle"}>
                        <a href="/" ><img src={logo2} alt="A La Orden" /></a>
                        <Options>
                            <a href="/">Inicio</a>
                            <a href="/">Favoritos</a>
                            <a href="/">Promociones</a>
                        </Options>
                    </header>
                </WH>
                <ScrollDown>
                    <h1>Bienvenido</h1>
                    <p>Todo nuestro menú está a su disposición como desayunos, almuerzos, cenas, postres, bebidas y más, sin hacer largas filas para pedidos ni para recogerlos, nosotros le hacemos llegar su orden hasta su mesa.</p>
                    <Fade top>
                        <BsChevronCompactDown />
                    </Fade>
                </ScrollDown>
            </div>
        </>
    );
};

const WH = styled.header`
    .headerStyle{
        display: flex;
        position: fixed;
        width: 100%;
        top:0;
    }

    img{
        width: 240px;
        margin: 0 25px;
        cursor: pointer;
    }

    .background{
        background: #fff;
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        /* transition: all 0.5s ease-out;
        transition: all 0.5s ease-in-out; */
        transition: 0.5s ease-in-out;
  -webkit-transition: 0.5s ease-in-out;

        a{
            color: #E51B23;
        }
        a:hover{
            text-decoration-color: #E51B23;
            text-decoration: underline;
        }
    }
`;

const Options = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    a{
        font-size: 13pt;
        font-weight: 500;
        margin: 0 25px;
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover{
        color: #E51B23;
    }
`;

const ScrollDown = styled.div`
    color: #fff;
    font-size: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -10px;
    

    h1{
        font-family: 'Pinyon Script', cursive;
        font-size: 70px;
        font-weight: 600;
        background: none;
        color: #fff;
        margin: 120px 0 50px 0;
        text-shadow: 3px 2px 1px #aaa;
    }

    p{
        width: 800px;
        font-size: 14pt;
        font-weight: 500; 
        text-shadow: 1px 1px 1px #aaa;
        margin: 5px 0 40px 0;
        text-align: center;
    }
`;

export default HeaderImage;