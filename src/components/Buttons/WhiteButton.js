import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const WhiteButton = () => {
    return (
        <div>
            <Link to="/menu"><BtnGoToMenu>Ir al menú</BtnGoToMenu></Link>
        </div>
    );
};

const BtnGoToMenu = styled.button`
    padding: 10px;
    background: ${color.white};
    color: ${color.primaryColor};
    font-size: ${fontSize.fontText};
    font-weight: 500;
    width: 250px;
    border: none;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
`;

export default WhiteButton;