import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import Img1 from '../../assets/images/img1-galery.jpg';
import { CgMathPlus } from "react-icons/cg";

const FavoritesOffers = () => {
    return (
        <>
            {/* <SubTitleFavorite>Platillos favoritos</SubTitleFavorite> */}
            <SubTitleFavorite class="galery-consumed">______ Platillos más consumidos ______</SubTitleFavorite>
            <Galery>
                <div>
                    <GaleryImage src={Img1} alt="platillo 1" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 2" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 3" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 4" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 5" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 6" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <More>
                    <CgMathPlus />
                    <p>Ver más</p>
                </More>
            </Galery>

            <SubTitleFavorite class="galery-consumed">______ Platillos en oferta ______</SubTitleFavorite>
            <Galery>
                <div>
                    <GaleryImage src={Img1} alt="platillo 1" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 2" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 3" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 4" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 5" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div>
                    <GaleryImage src={Img1} alt="platillo 6" />
                    <div>
                        <p>Title</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <More>
                    <div>
                        <CgMathPlus />
                    </div>
                    <p>Ver más</p>
                </More>
            </Galery>
        </>
    );
};

const SubTitleFavorite = styled.h1`
    text-align: center;
    font-size: 18pt;
    margin: 40px 0;
`;

const Galery = styled.div`
    display: flex;
    overflow: auto;
    margin: 0 25px 40px 25px;

    div{
        flex: 0 0 auto; 
    }

    img{
        width: 150px;
        height: 150px;
        margin: 0px 35px 0px 0px;
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

export default FavoritesOffers;