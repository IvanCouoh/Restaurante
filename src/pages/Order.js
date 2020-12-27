import React from 'react';
import styled from 'styled-components';
import HeaderMenu from '../components/Headers/RedHeader';
import { color } from '../theme/theme';
import { fontSize } from '../theme/theme';
import BtnRed from '../components/Buttons/RedButton';
import OrderCard from '../components/Cards/OrderCard';
import { IoFastFoodSharp } from "react-icons/io5";

const Order = () => {
    return (
        <div>
            <HeaderMenu linkLeft="/detalle" textLeft="Atrás" linkRight="/mi-orden" textRight="Ver mi orden" icon={<IoFastFoodSharp />} />
            <WrapperOrder>
                <OrderCard />
            </WrapperOrder>
            <TotalToPay>
                <p>Total a pagar </p>
                <p>$6,248.00</p>
            </TotalToPay>
            <BtnRed text="Enviar orden" />
        </div>
    );
};

const WrapperOrder = styled.div`
    margin: 48px 15px 140px 15px;
    @media(min-width: 810px){
        margin: 48px 20% 140px 20%;
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

export default Order;