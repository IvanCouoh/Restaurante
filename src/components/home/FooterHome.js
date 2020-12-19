import React from 'react';
import styled from 'styled-components';

const FooterHome = () => {
    return (
        <Footer>
            <p>
                <span>A La Orden. </span>
                Todos los derechos reservados.
            </p>
        </Footer>
    );
};

const Footer = styled.footer`
    width: 100%;
    height: 80px;
    background-color: #22272d;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        text-align: center;
    }

    span{
        color: #E51B23;
    } 
`;

export default FooterHome;