import React from 'react';
import styled from 'styled-components';
import Img1 from '../../assets/images/img2-galery.jpg';
import BtnMasMenos from '../../components/Buttons/MoreLessButtons';
import BtnWhite from '../../components/Buttons/WhiteButton';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';
import { arrayListOrder } from "../../components/Arrays/Arrays";

const OrderCard = () => {
    return (
        <>
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
                                        <p><span><BtnMasMenos text="-"/><p>{item.cantidad}</p><BtnMasMenos text="+"/></span></p>
                                    </Quantity>
                                    <p>${item.price}.00</p>
                                </OrderData>
                            </InformationPlate>
                        </ItemContainer>
                        <Remove>
                            <BtnWhite text="Eliminar de la lista" />
                        </Remove>
                    </ItemPlate>
                ))
            }
        </>
    );
};

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

    p:nth-child(2){
        margin: 0;
        padding: 2px 5px 0px 5px;
    }

    span{
        display: flex;
    }
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

export default OrderCard;