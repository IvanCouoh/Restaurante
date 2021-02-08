import React from 'react';
import styled from 'styled-components';
import { color, fontSize, fontFamily} from '../../theme/theme';

const RedButton = ({text}) => {
    return (
        <div>
            <BtnRed>{text}</BtnRed>
        </div>
    );
};

const BtnRed = styled.button`
    height: 60px;
    background: ${color.primaryColor};
    color: ${color.white};
    font-size: ${fontSize.fontMedium};
    font-family: ${fontFamily.estandar};
    border: none;
    outline: none;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
`;

export default RedButton;