import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const MoreLessButtons = () => {
    return (
        <Wrapper>
            <MenosMasbtn>-</MenosMasbtn>
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
    font-size: ${fontSize.fontSubTile};
    padding: 0 10px;
    margin: 0;
    outline: none;
`;


export default MoreLessButtons;