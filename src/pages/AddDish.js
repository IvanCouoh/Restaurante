import React from 'react';
import Input from '../components/Input/Index';
import styled from 'styled-components';
import { fontSize } from '../theme/theme';
import { color } from '../theme/theme';
import img1 from '../assets/images/img2-galery.jpg';
import UploadImage from '../components/UploadImage/Index';

const AddDish = () => {
    return (
        <Wrapper>
            <ContainerForm>
                <p>
                    Nuevo platillo
                </p>
                <Form>
                    <InputsSection>
                        <Input />
                    </InputsSection>
                    <Divider />
                    <UploadImage />
                </Form>
                    <Button>Guardar platillo</Button>
            </ContainerForm>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #f6f7f9;
    height: 100vh;
    padding-top: 10%;
`;

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 40px 40px 20px 40px;
    width: 651px;
    height: auto;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;

    p{
        margin: -10px 0 20px 0;
        text-align: center;
        font-size: ${fontSize.fontTitle};
    }

    @media(max-width: 790px){
       &{
            width: 342px;
        }
    }

    @media(max-width: 490px){
       &{
            width: 240px;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;

    @media(max-width: 790px){
       &{
            display: flex;
            flex-direction: column;
        }
    }
`;

const Divider = styled.span`
    border: 1px solid #DADCE0;
    height: auto;
    margin: 0 40px;;

    @media(max-width: 790px){
       &{
            display: none;
        }
    }
`;

const ImageULSection = styled.div`
    width: 100%;

    img{
        margin: auto;
        height: 200px;
        width: 200px;
        border: 2px dashed #fff;
        background-color: #abc;
    }
`;

const InputsSection = styled.div``;

const Button = styled.button`
    width: 100%;
    color: ${color.white};
    background: ${color.primaryColor};
    font-size: ${fontSize.fontText};
    border: none;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0 20px 0;
`;

export default AddDish;