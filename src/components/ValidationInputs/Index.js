import React from 'react';
import styled from 'styled-components';

const Index = ({ text }) => {
    return (
        <InputMessage>{text}</InputMessage>
    );
};

const InputMessage = styled.p`
    text-align-last: left;
    font-size: 10pt!important;
    margin: -28px 0px 27px 0px!important;
    padding-left: 15px!important;
    color: #ff0000;
`;
export default Index;