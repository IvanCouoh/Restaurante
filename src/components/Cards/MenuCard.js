import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { arrayDishes } from '../../components/Arrays/Arrays';
import { color, fontSize, fontFamily } from '../../theme/theme';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/initBD';

const MenuCard = () => {

    const [platillo, setPlatillo] = useState([]);

    useEffect(() => {
        const getPlatillos = db.collection('prueba')
            .onSnapshot(function (querySnapshot) {
                const list = [];
                querySnapshot.forEach(function (doc) {
                    list.push({ ...doc.data(), id: doc.id });
                })
                setPlatillo(list);
            })
    }, [])

    return (
        <Wrapper>
            {platillo.map((item, index) => (
                <Card key={index}>
                    <Img src={item.imageURL} />
                    <NameDescr>
                        <p>{item.name}</p>
                        <p>${item.price}.00</p>
                        <p>{item.description}</p>
                    </NameDescr>
                    <Link to="/detalle" className="link">Ver platillo</Link>
                </Card>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .link{
        text-decoration: none;
        color: ${color.black};
        position: absolute;
        height: 100%;
        width: 100%;
        color: transparent;
        background: none;
    }
`;

const Card = styled.div`
    position: relative;
    z-index: 1;
    border-radius:7px;
    padding: 7px;
    width: 350px;
    height: 155px;
    margin: 15px;
    display: flex;
    flex-direction: row;
    box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
    /* para no seleccionar el texto */
    -moz-user-select: none; 
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: ${fontSize.fontMedium};
    font-family: ${fontFamily.estandar};

    p:nth-child(2){
        margin-bottom: 5px;
    }

    @media(max-width: 450px){
        &{
            display: flex;
            flex-direction: column;
            width: 350px;
            height: auto;
        }

        p:first-child{
            text-align: center;
        }
    }
`;

const Img = styled.img`
    width: 140px;
    height: 140px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;

    @media(max-width: 450px){
        &{
            width: 100%;
            height: 140px;
            object-fit: cover;
            align-self: center;
            border-radius: 7px;
            margin-bottom: 7px;
        }
    }
`;

const NameDescr = styled.div`
    margin-left: 10px;
    font-size: ${fontSize.fontMedium};

    p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
    }

    p:first-child{
        margin: 0;
        font-weight: 600;
        /* para cortar el texto que no de y lo sustituye por "..." */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        overflow: hidden;
    }
`;

export default MenuCard;