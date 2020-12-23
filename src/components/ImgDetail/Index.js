import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/images/img1-galery.jpg';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const Index = () => {
    return (
        <>
            <Wrapper>
                <Img src={img1} alt="platillo" />
                <Name>
                    <p>
                        Platillo
                    </p>
                </Name>
            </Wrapper>
            <ContainerDetail>
                <p>Espacio para mostrar toda la descripción del platillo...</p>
                <p>$120.00</p>
                <hr />
                <AlightItems>
                    <p>Cantidad: <span><MenosMasbtn className="menos">-</MenosMasbtn>2<MenosMasbtn className="mas">+</MenosMasbtn></span></p>
                </AlightItems>
                <AlightItems>
                    <p>Total del platillo: <span>$240.00 </span></p>
                </AlightItems>
                <AlightItems>
                    <p>Total a pagar: <span>$580.00 </span></p>
                </AlightItems>
                <hr />
                <AddOrder>Añadir a la lista</AddOrder>
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

const AddOrder = styled.button`
    height: 60px;
    background: ${color.primaryColor};
    color: ${color.white};
    font-size: ${fontSize.fontText};
    border: none;
    outline: none;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const AlightItems = styled.div`
    p{
        display: flex;
        justify-content: space-between;

    }
    .mas{
        margin-left: 10px;
    }

    .menos{
        margin-right: 10px;
    }
`;

const MenosMasbtn = styled.button`
    background: ${color.whiteoscuro};
    color: ${color.primaryColor};
    border: 1px solid ${color.primaryColor};
    border-radius: 10px;
    font-size: ${fontSize.fontSubTile};
    padding: 0 10px;
    margin: 0;
    outline: none;
`;

export default Index;