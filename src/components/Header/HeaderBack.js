import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';
import { Link } from 'react-router-dom';

const HeaderBack = () => {
    return (
        <Wrapper>
            <Link to="/menu">
                <IoIosArrowBack />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    height: 30px;
    background-color: ${color.primaryColor};
    color: ${color.whiteoscuro};
    font-size: ${fontSize.fontTitle};
    display: flex;
    align-items: center;
`;

export default HeaderBack;