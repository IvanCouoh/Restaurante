import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../../theme/theme';

const MoreLessButtons = ({ text }) => {
    return (
        <Wrapper>
            <MenosMasbtn>{text}</MenosMasbtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    p{
        display: flex;
        justify-content: space-between;
    }

`;

const MenosMasbtn = styled.button`
    background: ${color.whiteoscuro};
    color: ${color.primaryColor};
    border: 1px solid ${color.primaryColor};
    border-radius: 10px;
    font-size: ${fontSize.fontSmall};
    padding: 0 10px;
    margin: 0;
    outline: none;
`;


export default MoreLessButtons;