import React from 'react';
import styled from 'styled-components';
import { arrayMenu } from '../../components/Arrays/Arrays';
import { CgMathPlus } from "react-icons/cg";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const CarouselCards = () => {
    return (
        <Wrapper>
            <Espacio id="favoritos" />
            <SubTitleFavorite className="galery-consumed"> Platillos más consumidos </SubTitleFavorite>
            <Galery>
                {arrayMenu.map((item, index) => (
                    <div key={index}>
                        <GaleryImage src={item.img} alt="imagen" />
                        <div>
                            <p>{item.name}</p>
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
            <Espacio id="promociones" />
            <SubTitleFavorite className="galery-consumed"> Platillos en oferta </SubTitleFavorite>
            <Galery>
                {arrayMenu.map((item, index) => (
                    <div key={index}>
                        <GaleryImage src={item.img} alt="imagen" />
                        <div>
                            <p>{item.name}</p>
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
    );
};

const Wrapper = styled.div`
    margin: 0 15px;
`;

const Espacio = styled.div`
    height: 94px;
`;

const SubTitleFavorite = styled.h1`
    text-align: center;
    font-size: ${fontSize.fontTitle};
    margin: 40px 0;
`;

const Galery = styled.div`
    display: flex;
    overflow: auto;
    margin: 0 25px 40px 25px;
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
        font-size: ${fontSize.fontText};
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
        background: ${color.primaryColor};
        cursor: pointer;
        color: ${color.white};
        font-weight: 500;
    }
`;

export default CarouselCards;