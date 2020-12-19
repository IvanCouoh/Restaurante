import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import logo1 from '../../assets/images/LogoAlaOrd.png';
import logo2 from '../../assets/images/segundoLogo.png';
import { BsChevronCompactDown } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Img1 from '../../assets/images/img1-galery.jpg';
import { CgMathPlus } from "react-icons/cg";
import { arrayMenu } from './arrayMenu';

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
                            <a href="#inicio">Inicio</a>
                            <a href="#favoritos">Favoritos</a>
                            <a href="#promociones">Promociones</a>
                            <a href="#">Menú</a>
                        </Options>
                    </header>
                </WH>
                <ScrollDown id="inicio">
                    <h1>Bienvenido</h1>
                    <p>Todo nuestro menú está a su disposición como desayunos, almuerzos, cenas, postres, bebidas y más, sin hacer largas filas para pedidos ni para recogerlos, nosotros le hacemos llegar su orden hasta su mesa.</p>
                    <Fade top>
                        <BsChevronCompactDown />
                    </Fade>
                </ScrollDown>
            </div>
            <Wrapper>
                <Espacio id="favoritos" />
                {/* <SubTitleFavorite>Platillos favoritos</SubTitleFavorite> */}
                <SubTitleFavorite class="galery-consumed"> Platillos más consumidos </SubTitleFavorite>
                <Galery>
                    {arrayMenu.map(item => (
                        <div key={item.id}>
                            <GaleryImage src={item.platillo} alt="imagen" />
                            <div>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* <More>
                        <div>
                            <CgMathPlus />
                        </div>
                        <p>Ver más</p>
                    </More> */}
                </Galery>
                <Espacio id="promociones" />
                <SubTitleFavorite class="galery-consumed"> Platillos en oferta </SubTitleFavorite>
                <Galery>
                    {arrayMenu.map(item => (
                        <div>
                            <GaleryImage src={item.platillo} alt="imagen" />
                            <div>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    <More>
                        <div>
                            <CgMathPlus />
                        </div>
                        <p>Ver más</p>
                    </More>
                </Galery>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    margin: 0 15px;
`;

const WH = styled.header`
    .headerStyle{
        z-index: 1000;
        display: flex;
        position: fixed;
        width: 100%;
        height: 94px;
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
    align-items: center;
    width: 100%;

    a{
        font-size: 13pt;
        font-weight: 500;
        margin: 0 25px;
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        height: 50px;
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
        font-size: 90px;
        font-weight: 600;
        background: none;
        color: #fff;
        margin: 120px 0 50px 0;
        text-shadow: 3px 2px 1px #aaa;
    }

    p{
        padding: 0 20%;
        font-size: 14pt;
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
            /* margin: 0 15px; */
        }
    }
`;

const SubTitleFavorite = styled.h1`
    text-align: center;
    font-size: 18pt;
    margin: 40px 0;
`;

const Galery = styled.div`
    display: flex;
    overflow: auto;
    margin: 0 25px 40px 25px;
    /* justify-content: center; */
    position: relative;

    img{
        width: 150px;
        height: 150px;
        margin: 0px 50px 0px 0px;
        border-radius: 50%;
    }

    p{
        width: 150px;
        text-align: center;
    }


`;

const GaleryImage = styled.img`
    text-align: center;
`;

const More = styled.div`
    border: 1px solid none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0px 35px 0px 0px;
    width: auto;
    height: 150px;
    width: 150px;
    border-radius: 50%;

    &:hover{
        background: #E51B23;
        cursor: pointer;
        color: #f3f3f3;
        font-weight: 500;
    }
`;

const Espacio = styled.div`
    height: 94px;
`;

export default HeaderImage;