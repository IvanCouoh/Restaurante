import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { color, fontSize, fontFamily } from '../../theme/theme';
import { arrayCategories } from '../../components/Arrays/Arrays';
import { db } from '../../firebase/initBD';

const TabButton = () => {

    const [lista, setLista] = useState([]);

    const getListado = async () => {
        db.collection("categories").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            })
            setLista(docs);
        })
    }

    useEffect(() => {
        getListado()
    }, [])

    return (
        <WrapperHeader>
            {
                lista.map((item, index) => (
                    <button key={index}>{item.category}</button>
                ))
            }
        </WrapperHeader>
    );
};

const WrapperHeader = styled.header`
    height: 70px;
    background-color: ${color.primaryColor};
    display: flex;
    align-items: center;
    overflow: auto;
    box-shadow: 0 4px 4px rgba(57,73,76,0.2);
    position: sticky;
    top: 33px;
    width: 100%;
    z-index: 100;
    
    button{
        background-color: ${color.primaryColor};
        color: ${color.white};
        font-size: ${fontSize.fontMedium};
        font-family: ${fontFamily.estandar};
        margin: 0 15px;
        border-radius: 25px;
        border: 1.5px solid ${color.white};
        outline: none;
        padding: 10px 20px;
        box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
        /* para no seleccionar el texto */
        -moz-user-select: none; 
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none; 
    }
`;

export default TabButton;