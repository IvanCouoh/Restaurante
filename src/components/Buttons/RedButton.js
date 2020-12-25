import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const RedButton = () => {
    return (
        <div>
            <BtnRed>Boton rojo</BtnRed>
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

export default RedButton;