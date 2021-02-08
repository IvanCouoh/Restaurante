import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { color, fontSize, fontFamily } from '../../theme/theme';

const WhiteButton = ({pathLink, text}) => {
    return (
        <div>
            <Link to={pathLink}><BtnGoToMenu>{text}</BtnGoToMenu></Link>
        </div>
    );
};

const BtnGoToMenu = styled.button`
    padding: 10px;
    background: ${color.white};
    color: ${color.primaryColor};
    font-size: ${fontSize.fontMedium};
    font-family: ${fontFamily.estandar};
    font-weight: 500;
    width: 250px;
    border: none;
    border-radius: 10px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
`;

export default WhiteButton;