import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Index';
import styled from 'styled-components';
import { color, fontSize } from '../theme/theme';
import { Input } from '../components/Input/Index';
import { useFormik } from 'formik';
import { db } from '../firebase/initBD';
import * as yup from 'yup';
import { message } from 'antd';
import { MdDelete } from "react-icons/md";

const AddCategory = () => {
    const [list, setList] = useState([]);

    const key = 'updatable';

    const openMessage = () => {
        message.success({ content: 'Categoría agregada.', key, duration: 2 });
    };

    const openMessageDelete = () => {
        message.success({ content: 'Categoría eliminada.', key, duration: 2 });
    };

    const deletePlato = async (id) => {
        await db.collection("categories").doc(id).delete().then(() => {
            openMessageDelete();
        }).catch(error => {
            console.log(error);
        })
    }

    const formik = useFormik({
        initialValues: {
            category: ''
        },
        validationSchema: yup.object({
            category: yup.string().required('No puede agregar una categoria vacía')
        }),
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            const { category } = formik.values;
            await db.collection('categories').doc().set({ category }).then(res => {
                console.log('Se guardo correctamente')
                openMessage();
                resetForm()
            }).catch(error => {
                console.log('ERROR', error)
            })
        }
    })

    useEffect(() => {
        const getCategories = db.collection('categories')
        getCategories.onSnapshot(querySnapshot => {
            const listcat = [];
            querySnapshot.forEach(function (doc) {
                listcat.push({ ...doc.data(), id: doc.id });
            })
            setList(listcat);
        })
    }, [])

    return (
        <Layout>
            <ContainerForm>
                <p> Nuevo categoría </p>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        name="category"
                        text="Categoría"
                        type="text"
                        InputClassName="input"
                        divClassName="div"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    />
                    {
                        formik.errors.category && formik.touched && (
                            <Validator>{formik.errors.category}</Validator>
                        )
                    }
                    <Button type="submit">Guardar categoría</Button>
                </form>
            </ContainerForm>
            <Categories>
                <Title>Categorías existentes</Title>
                {
                    list.length === 0 ? (<Empity><p>No se ha agregado ninguna categoría.</p></Empity>) :
                        list.map((item) => (
                            <WrapperCategory key={item.id}>
                                <p>{item.category}</p>
                                <button
                                    onClick={() => deletePlato(item.id)}
                                    className="delete">
                                    <span style={{ marginRight: '5px', marginLeft: '5px' }} >
                                        Eliminar
                                     </span>
                                    <IConDelete />
                                </button>
                            </WrapperCategory>
                        ))
                }
            </Categories>
        </Layout>
    );
};

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 40px 40px 20px 40px;
    width: 420px;
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

const Button = styled.button`
    width: 100%;
    color: ${color.white};
    background: ${color.primaryColor};
    font-size: ${fontSize.fontMedium};
    border: none;
    border-radius: 10px;
    outline: none;
    height: 40px;
    margin: 10px 0 20px 0;
    cursor: pointer;
`;

const Validator = styled.p`
    text-align: start!important;
    color: red;
    font-size: 10pt!important;
    margin: -26px 0 25px 15px!important;
`;

const Title = styled.div`
    border: none;
    width: 420px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSize.fontBig};
    color: ${color.white};
    background-color: #777777;
    border-radius: 7px 7px 0px 0px;
`;

const Categories = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        margin: 10px 0;
        color: #fff;
        border: none;
        border-radius: 10px;
        outline: none;
        height: 35px;
        background-color: #ce1414;
        cursor: pointer;
    }

    p{
        margin: 0;
        font-size: ${fontSize.fontMedium};
    }
`;

const Empity = styled.div`
    p{
        margin-top: 15px;
        font-size: ${fontSize.fontMedium};
    }
`;

const IConDelete = styled(MdDelete)`
    font-size: ${fontSize.fontExBigger};
`;

const WrapperCategory = styled.div`
    border: none;
    background-color: #fff;
    margin-bottom: 2px;
    padding: 0 15px;
    display: flex;
    width: 420px;
    align-items: center;
    justify-content: space-between;
`;

export default AddCategory;