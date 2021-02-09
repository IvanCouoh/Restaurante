import React, { useState, useEffect } from 'react';
import HeaderMenu from '../components/Headers/RedHeader';
import styled from 'styled-components';
import img1 from '../assets/images/img1-galery.jpg';
import BtnMasMenos from '../components/Buttons/MoreLessButtons';
import BtnRed from '../components/Buttons/RedButton';
import { color, fontSize } from '../theme/theme';
import { IoFastFoodSharp } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/initBD';

const DishDetail = () => {
    const { name } = useParams();

    const [detalle, setDetalle] = useState([]);

    useEffect(() => {
        const getPlatillos = db.collection('prueba')
            .onSnapshot(function (querySnapshot) {
                const list = [];
                querySnapshot.forEach(function (doc) {
                    list.push({ ...doc.data(), id: doc.id });
                })
                setDetalle(list);
            })
    }, [])
    return (
        <>
            <HeaderMenu linkLeft="/menu" textLeft="Menú" linkRight="/mi-orden" textRight="Ver mi orden" icon={<IoFastFoodSharp />} />
            {detalle.filter(detail => detail.name === name).map((detail, index) => (
                <>
                    <Wrapper>
                        <Img src={detail.imageURL} alt={detail.imageURL} />
                        <Name>
                            <p>
                                {detail.name}
                            </p>
                        </Name>
                    </Wrapper>
                    <ContainerDetail>
                        {/* <p>ID:{match.params.id}</p> */}
                        <p>{detail.description}</p>
                        
                        <p>${detail.price}.00</p>
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
                        <JEJE />
                        <BtnRed text="Añadir a la lista"></BtnRed>
                    </ContainerDetail>
                </>
            ))}


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
    bottom: 0px;
    width: 100%;
    margin: 0;
    padding: 1px 0;
    background: rgb(41 41 43 / 50%);;
    height: auto;
    text-align: center;
    color: ${color.white};
    font-size: ${fontSize.fontBig};

    p{
        margin: 5px 0;
    }
`;

const ContainerDetail = styled.div`
    margin: 5px 15px 80px 15px;
    font-size: ${fontSize.fontMedium};
    
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

const JEJE = styled.div`
    height: 90px;
`;

export default DishDetail;