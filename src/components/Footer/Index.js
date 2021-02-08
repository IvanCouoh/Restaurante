import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../../theme/theme';

const Index = () => {
    return (
        <div>
            <Footer>
                <p>
                    <span>A La Orden © </span>
                Todos los derechos reservados.
            </p>
            </Footer>
        </div>
    );
};

const Footer = styled.footer`
    width: 100%;
    height: 80px;
    background-color: ${color.secundaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSize.fontSmall};

    p{
        text-align: center;
        color: ${color.white};
    }

    span{
        color: ${color.primaryColor};
    } 
`;

export default Index;