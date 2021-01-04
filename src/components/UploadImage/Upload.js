import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../../theme/theme';

const Upload = ({ id, type, onChange, TextBtn, segundoTexto, imagePreview, onClick }) => {
    return (
        <Wrapper>
            <input type={type} id={id} onChange={onChange} onClick={onClick} />
            <button>{TextBtn}</button>
            <span>o</span>
            <span>{segundoTexto}</span>
            {imagePreview}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 2px dashed #dadce0;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 203px;
    height: 203px;
    
    input{
        width: 100%;
        height: 100%;
        position: absolute;
        background: ${color.primaryColor};
        opacity: 0;
        cursor: pointer;
    }

    button{
        height: 40px;
        border: none;
        border-radius: 10px;
        background: ${color.primaryColor};
        font-size: ${fontSize.fontText};
        color: ${color.white};
    }

    span{
        margin-top: 10px;
    }

    @media(max-width: 790px){
        &{
            margin-top: 20px;
        }
    }

    @media(max-width: 490px){
        &{
            margin-top: 20px;
        }
    }
`;

export default Upload;