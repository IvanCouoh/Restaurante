import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const Index = () => {
    return (
        <div>
            <BtnRed>Añadir a la lista</BtnRed>
        </div>
    );
};

const BtnRed = styled.button`
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

export default Index;