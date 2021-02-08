import React, { useState, useEffect } from 'react';
import { Input, Textarea } from '../components/Input/Index';
import styled from 'styled-components';
import { color, fontSize } from '../theme/theme';
import Layout from "../components/Layout/Index";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Message from '../components/ValidationInputs/Index';
import { db, storage } from '../firebase/initBD';
import { FiUpload } from "react-icons/fi";
import { message } from 'antd';

const AddDish = () => {

    const [options, setOptions] = useState([])
    const [idCategory, setIdCategory] = useState(-1);
    const [validateCategory, setValidateCategory] = useState(true);
    const key = 'updatable';

    const openMessage = () => {
        message.loading({ content: 'Guardando...', key });
        setTimeout(() => {
            message.success({ content: 'El platillo a sedo guardado.', key, duration: 2 });
        }, 1000);
    };

    const indexCategory = (e) => {
        const indexOption = e.target.value;

        if (indexOption == '-1') {
            console.log('El indice es', indexOption);
            setIdCategory(indexOption);
            setValidateCategory(false)
        } else {
            console.log('Es mayor a 1', indexOption);
            setIdCategory(indexOption);
            setValidateCategory(true);
        }
    }

    useEffect(() => {
        let restQuery = db.collection('categories').get()
        restQuery.then(function (snapshot) {
            snapshot.forEach(function (doc) {
                setOptions(prevState => [...prevState, doc.data()])
            })
        })
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            category: '',
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
            category: yup.string()
                .required('Asigne un categoría al platillo.'),
        }),
        onSubmit: async (data) => {
            console.log(data);
            // indexCategory()

            const { name, price, description, category, file } = formik.values;

            const storageRef = storage.ref(`/platillos/${Date.now()}_${file.name}`);
            const task = storageRef.put(file);
            task.on('state_changed', snapshot => { },
                error => {
                    console.log(error.message);
                }, async () => {
                    const imageURL = await (await task).ref.getDownloadURL()
                    db.collection('prueba').doc()
                        .set({
                            createDate: new Date(),
                            name,
                            price,
                            description,
                            category,
                            imageURL,
                            disponible: true,
                        }).then(res => {
                            console.log("EXITOSO");
                            openMessage();
                        }).catch(error => {
                            console.error("ERROR", error)
                        })
                })
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
                                <Select
                                    id="category"
                                    name="category"
                                    onClick={indexCategory}
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value={-1}>Selecciona una categoría</option>
                                    {options.map((item, index) =>
                                        <option name="category" value={item.category} key={index}>
                                            {item.category}
                                        </option>
                                    )}
                                </Select>
                                {
                                    validateCategory ? false : <Validator2>Asigne un categoría al platillo.</Validator2>
                                }
                                {
                                    formik.errors.category && formik.touched.category &&
                                    (<Validator>{formik.errors.category}</Validator>)
                                }
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
                                <input
                                    type="file"
                                    onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
                                />
                            </UploadSection>
                        </WrapperFormData>
                        <Button type="submit">Guardar platillo</Button>
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
        font-size: ${fontSize.fontBigger};
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
    font-size: ${fontSize.fontMedium};
    border: none;
    border-radius: 10px;
    outline: none;
    height: 40px;
    margin: 20px 0 20px 0;
    cursor: pointer;
`;

const Select = styled.select`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    outline: none;
    cursor: pointer;
    font-size: ${fontSize.fontSmall};
    font-family: 'Montserrat',sans-serif;
    border: 1px solid #dadce0;
    border-radius: 5px;
    margin-bottom: 30px;

    option{
        margin: 13px 0;
    }
`;

const Validator = styled.p`
    text-align: start!important;
    color: red;
    font-size: 10pt!important;
    margin: -30px 0 25px 15px!important;
`;

const Validator2 = styled.p`
    text-align: start!important;
    color: red;
    font-size: 10pt!important;
    margin: -30px 0 25px 15px!important;
    position: absolute;
`;

//para la imagen
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: auto; */
`;

const ImgPreview = styled.div`
    width: 200px;
    height: 200px;
`;

const UploadClick = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px dashed #dadce0;
    width: 200px;
    height: 200px;
    cursor: pointer;
    background: ${color.white};

    &:hover{
        border: 2px dashed #70a3e6;
    }

    span{
        border: none;
        color: ${color.black};
        user-select: none;
    }

    input{
        display: none;
    }
`;

const IconFileUpload = styled(FiUpload)`
    font-size: 23px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    object-fit: contain;
    border: 2px dashed #9a9898;
    width: 200px;
    height: 200px;
    position: relative;
    top:0;
    pointer-events: none;
`;

const Required = styled.p`
    margin: 33px 0px 0px 0px!important;
    font-size: ${fontSize.fontSmall}!important;
`;

export default AddDish;