import React from 'react';
import { Input, Textarea } from '../components/Input/Index';
import styled from 'styled-components';
import { fontSize } from '../theme/theme';
import { color } from '../theme/theme';
// import UploadImage from '../components/UploadImage/EsteFunciona';
import UploadImage from '../components/UploadImage/Index';
import Layout from "../components/Layout/Index";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Message from '../components/ValidationInputs/Index';

const AddDish = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            image: '',
        },
        validationSchema: yup.object({
            name: yup.string()
                .required("Necesario poner nombre al platillo."),
            price: yup.number()
                .required("¿Cuánto cuesta el platillo?")
                .moreThan(0, "No puede tener precios negativos"),
            description: yup.string()
                .required("Escribe una breve descripción del platillo.")
                .min(8, "La descripción es muy corta"),
        }),
        onSubmit: (data) => {
            console.log(data);
        }
    })

    return (
        <Layout>
            <Wrapper>
                <ContainerForm>
                    <p> Nuevo platillo </p>
                    <Form onSubmit={formik.handleSubmit}>
                        <WrapperFormData>
                            <InputsSection>
                                <Input
                                    name="name"
                                    text="Nombre del platillo"
                                    type="text"
                                    InputClassName="input"
                                    divClassName="div"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <Message text={formik.errors.name}></Message>
                                )}
                                <Input
                                    name="price"
                                    text="Presio del platillo"
                                    type="number"
                                    InputClassName="input"
                                    divClassName="div"
                                    onChange={formik.handleChange}
                                    value={formik.values.price}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.price && formik.touched.price && (
                                    <Message text={formik.errors.price}></Message>
                                )}
                                <Textarea
                                    name="description"
                                    text="Descripción"
                                    type="textarea"
                                    cols="30"
                                    rows="10"
                                    InputClassName="input textarea"
                                    divClassName="div-textarea"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                />
                                {formik.errors.description && formik.touched.description && (
                                    <Message text={formik.errors.description}></Message>
                                )}
                            </InputsSection>
                            <Divider />
                            <UploadSection>
                                <UploadImage
                                    onImageLoaded={file => formik.setFieldValue("file", file)} />
                                {formik.errors.image && formik.touched.image && (
                                    <Message text={formik.errors.image}></Message>
                                )}
                            </UploadSection>
                        </WrapperFormData>
                        <Button type="submit">Guardar platillo</Button>
                        {/* <button type="submit">Submit</button> */}
                    </Form>
                </ContainerForm>
            </Wrapper>
        </Layout>

    );
};

const Wrapper = styled.div`
    /* background-color: #f6f7f9;
    height: 100vh;
    padding-top: 10%; */
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
    background-color: ${color.white};

    p{
        margin: -10px 0 20px 0;
        text-align: center;
        font-size: ${fontSize.fontTitle};
    }

    @media(max-width: 845px){
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
    flex-direction: column;
`;

const Divider = styled.span`
    border: 1px solid #DADCE0;
    height: auto;
    margin: 0 40px;;

    @media(max-width: 845px){
       &{
            display: none;
        }
    }
`;

const UploadSection = styled.div`
    display: flex;
    flex-direction: column;
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

const InputsSection = styled.div`
    @media(max-width: 845px){
       &{
            margin-bottom: 30px;
        }
    }
`;

const WrapperFormData = styled.div`
    display: flex;

    @media(max-width: 845px){
        &{
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;
        }
    }
`;

const Button = styled.button`
    width: 100%;
    color: ${color.white};
    background: ${color.primaryColor};
    font-size: ${fontSize.fontText};
    border: none;
    border-radius: 10px;
    outline: none;
    height: 40px;
    margin: 20px 0 20px 0;
    cursor: pointer;
`;

export default AddDish;