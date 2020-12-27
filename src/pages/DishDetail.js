import React from 'react';
import HeaderMenu from '../components/Headers/RedHeader';
import styled from 'styled-components';
import img1 from '../assets/images/img1-galery.jpg';
import BtnMasMenos from '../components/Buttons/MoreLessButtons';
import BtnRed from '../components/Buttons/RedButton';
import { color } from '../theme/theme';
import { fontSize } from '../theme/theme';
import { IoFastFoodSharp } from "react-icons/io5";

const DishDetail = () => {
    return (
        <>
            <HeaderMenu linkLeft="/menu" textLeft="Menú" linkRight="/mi-orden" textRight="Ver mi orden" icon={<IoFastFoodSharp />} />
            <Wrapper>
                <Img src={img1} alt="platillo" />
                <Name>
                    <p>
                        Platillo
                    </p>
                </Name>
            </Wrapper>
            <ContainerDetail>
                <p>Espacio para mostrar toda la descripción del platillo...
                Espacio para mostrar toda la descripción del platillo...
                </p>
                <p>$120.00</p>
                <hr />
                <AlightItems>
                    <p>Cantidad: <span><BtnMasMenos text="-" /><p>10</p><BtnMasMenos text="+" /></span></p>
                </AlightItems>
                <AlightItems>
                    <p>Total del platillo: <span>$240.00 </span></p>
                </AlightItems>
                <AlightItems>
                    <p>Total a pagar: <span>$580.00 </span></p>
                </AlightItems>
                <hr />
                <BtnRed text="Añadir a la lista"></BtnRed>
            </ContainerDetail>
        </>
    );
};

const Wrapper = styled.div`
    position: relative;
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 200px;
`;

const Name = styled.div`
    position: absolute;
    bottom: 4px;
    width: 100%;
    margin: 0;
    padding: 1px 0;
    background: rgb(41 41 43 / 50%);;
    height: auto;
    text-align: center;
    color: ${color.white};
    font-size: ${fontSize.fontSubTile};

    p{
        margin: 5px 0;
    }
`;

const ContainerDetail = styled.div`
    margin: 0 15px 80px 15px;

    @media(min-width: 810px){
        margin: 0 20% 80px 20%;
    }
`;

const AlightItems = styled.div`
    p{
        display: flex;
        justify-content: space-between;
    }

    p:nth-child(2){
        margin: 0;
        padding: 2px 5px 0px 5px;
    }

    span{
        display: flex;
    }
`;

export default DishDetail;