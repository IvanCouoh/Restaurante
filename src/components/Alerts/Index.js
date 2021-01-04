import React from 'react';
import styled from 'styled-components';
import { TiDelete } from "react-icons/ti";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Bounce from 'react-reveal/Bounce';
import HeadShake from 'react-reveal/HeadShake';
import {color, fontSize} from '../../theme/theme';

export const Error = ({ message }) => {
    return (
        <Message>
            <HeadShake top>
                <div>
                    <span><MsgError /></span>
                    <span>{message}</span>
                </div>
            </HeadShake>
        </Message>
    );
};

export const Success = ({ message }) => {
    return (
        <Message>
            <Bounce top>
                <div>
                    <span><MsgSuccess /></span>
                    <span>{message}</span>
                </div>
            </Bounce>
        </Message>
    );
};

const Message = styled.div`
    position: absolute;
    z-index: 100;
    top: 10px;
    width: 100%;
    left: 0;
    text-align: center;
    display: flex;
    justify-content: center;

    div{
        height: 30px;
        padding: 5px 10px;
        box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${color.white};
        border-radius: 3px;
    }
`;

const MsgError = styled(TiDelete)`
    color: ${color.primaryColor};
    font-size: 26px;
    margin: 3px 5px 0 0;
`;

const MsgSuccess = styled(RiCheckboxCircleFill)`
    color: green;
    font-size: 23px;
    margin: 3px 5px 0 0;
`;