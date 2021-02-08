import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import { color, fontSize } from '../../theme/theme';
import { Link } from 'react-router-dom';

const Header = ({ linkLeft, linkRight, textLeft, textRight, icon }) => {
    return (
        <Wrapper>
            <Link className="link" to={linkLeft}>
                <span><IoIosArrowBack /><p>{textLeft}</p></span>
            </Link>
            <Link className="link" to={linkRight}>
                <span><p>{textRight}</p>{icon}</span>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: auto;
    background-color: ${color.primaryColor};
    color: ${color.whiteoscuro};
    font-size: ${fontSize.fontMedium};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;

    .link{
        display: flex;
        text-decoration: none;
        font-size: ${fontSize.fontMedium};
        color: ${color.white};
        align-items: center;
        margin: 7px 15px;
    }

    span{
        margin-right: 7px;
        display: flex;
        align-items: center;
    }
    
    p{
        margin: 0 5px;
    }
`;

export default Header;