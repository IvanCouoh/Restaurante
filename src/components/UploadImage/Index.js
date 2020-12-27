import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme/theme';
import { fontSize } from '../../theme/theme';

const Index = () => {
    return (
        <Wrapper>
            <input type="file" id="file" />
            <button>Selecciona una imagen</button>
            <span>o</span>
            <span>Arrastra y suelta una aquí</span>
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
    
    input{
        width: 100%;
        height: 100%;
        position: absolute;
        background: red;
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

export default Index;