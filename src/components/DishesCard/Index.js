import React from 'react';
import styled from 'styled-components';
import { arrayDishes } from './ArrayDishes';
import { fontSize } from '../../theme/theme';

const Index = () => {
    return (
        <Wrapper>
            {arrayDishes.map((item, index) => (
                <Card key={index}>
                    <Img src={item.img} />
                    <NameDescr>
                        <p>{item.name}</p>
                        <p>${item.price}.00</p>
                        <p>{item.description}</p>
                    </NameDescr>
                </Card>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 170px 15px 15px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Card = styled.div`
    border-radius:7px;
    padding: 7px;
    width: 350px;
    height: 140px;
    margin: 15px;
    display: flex;
    flex-direction: row;
    box-Shadow: 0 3px 6px rgba(57,73,76,0.4);
    /* para no seleccionar el texto */
    -moz-user-select: none; 
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media(max-width: 450px){
        &{
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 275px;
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
            align-self: center;
            border-radius: 7px;
            margin-bottom: 7px;
        }
    }
`;

const NameDescr = styled.div`
    margin-left: 10px;
    font-size: ${fontSize.fontText};

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

export default Index;