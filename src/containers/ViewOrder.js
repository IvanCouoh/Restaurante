import React from 'react';
import { HeaderMenu } from '../components/Header/HeaderBack';
import Order from '../components/Button/Index';
import styled from 'styled-components';
import Img1 from '../assets/images/img2-galery.jpg';
import { color } from '../theme/theme';
import { fontSize } from '../theme/theme';
import { arrayListOrder } from "./ArrayListOrder";

const ViewOrder = () => {
    return (
        <div>
            <HeaderMenu />
            <WrapperOrder>
                {
                    arrayListOrder.map((item, index) => (
                        <ItemPlate key={index}>
                            <ItemContainer>
                                <Img src={Img1} />
                                <InformationPlate>
                                    <NamePlate>{item.name}</NamePlate>
                                    <OrderData>
                                        <Quantity>
                                            <p>Cantidad</p>
                                            <p><span><MenosMasbtn className="menos">-</MenosMasbtn>{item.cantidad}<MenosMasbtn className="mas">+</MenosMasbtn></span></p>
                                        </Quantity>
                                        <p>${item.price}.00</p>
                                    </OrderData>
                                </InformationPlate>
                            </ItemContainer>
                            <Remove>
                                <button>Eliminar de la lista</button>
                            </Remove>
                        </ItemPlate>
                    ))
                }
            </WrapperOrder>
            <TotalToPay>
                <p>Total a pagar </p>
                <p>$6,248.00</p>
            </TotalToPay>
            <Order>Ordenar</Order>
        </div>
    );
};

const WrapperOrder = styled.div`
    margin: 48px 15px 140px 15px;
    @media(min-width: 810px){
        margin: 48px 20% 140px 20%;
    }
`;

const ItemPlate = styled.div`
    border-top: 1px solid rgba(0,0,0,.07);
    margin-top: 15px;
    margin-bottom: 4px;
`;

const ItemContainer = styled.div`
    padding: 15px;
    display: flex;
`;

const Img = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 5px;
`;

const InformationPlate = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const NamePlate = styled.p`
    margin: 0 0 5px 0;
    text-align: center;
`;

const OrderData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Quantity = styled.div`
    p{
        margin: 5px;
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

const Remove = styled.div`
    button{
        text-align: center;
        color: ${color.primaryColor};
        background: ${color.white};
        font-size: ${fontSize.fontText};
        border: 1px solid ${color.primaryColor};
        border-radius: 10px;
        outline: none;
        width: 100%;
        height: 40px;
    }
`;

const TotalToPay = styled.div`
    border-top: 1px solid rgba(0,0,0,.07);
    display: flex;
    justify-content: space-between;
    font-size: ${fontSize.fontText};
    background: ${color.white};
    position: absolute;
    width: 100%;
    bottom: 65px;
    z-index: 100;
    position: fixed;
    bottom: 60px;
    width: 100%;

    p{
        font-weight: 600;
        margin-right: 15px;
        margin-left: 15px;
    }   
`;

export default ViewOrder;