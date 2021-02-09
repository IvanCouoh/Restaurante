import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Index';
import styled from 'styled-components';
import { db } from '../firebase/initBD';
import { MdModeEdit, MdSearch, MdFilterList, MdDelete } from "react-icons/md";
import { fontSize } from '../theme/theme';
import { message } from 'antd';

const MenuAdmin = () => {

    const [platillos, setPlatillos] = useState([]);
    const [showHide, setShowHide] = useState(false);
    const [id, setId] = useState('');

    const key = 'updatable';

    const openMessageDelete = () => {
        message.success({ content: 'Categoría eliminada.', key, duration: 2 });
    };

    const deletePlato = (id) => {
        db.collection('prueba').doc(id).delete()
        console.log('Eliminado', id);
        openMessageDelete();
    }

    const editarPlato = (item) => {
        console.log('=>', item);
    }

    useEffect(() => {
        const getPlatillos = db.collection('prueba')
            .onSnapshot(function (querySnapshot) {
                const docs = [];
                querySnapshot.forEach(function (doc) {
                    docs.push({ ...doc.data(), id: doc.id });
                })
                setPlatillos(docs);
            })
    }, [])

    const changeState = () => {
        if (showHide === false) {
            setShowHide(true);
        } else {
            setShowHide(false);
        }
    }

    return (
        <Layout>
            <Wrapper>
                <EnElMenu>
                    <Search>
                        <InputShearch
                            placeholder="Busque el nombre del platillo."
                        />
                        <IconSearch />
                    </Search>
                    <SecctionFilter>
                        <BtnFilter onClick={changeState}><IconFilter /><span style={{ marginLeft: '5px' }} ></span>Filtrar por</BtnFilter>
                        {
                            showHide ? (
                                <>
                                    <div>
                                        <input type="checkbox" /><span>Disponibles</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" /><span>Agotados</span>
                                    </div>
                                </>
                            ) : false
                        }

                    </SecctionFilter>
                    {/* <h3>Gestión de platillos</h3> */}
                    <Tabla>
                        <Cabecera style={{ borderRadius: '7px 0px 0px 0px' }}>Imagen</Cabecera>
                        <Cabecera>Platillo</Cabecera>
                        <Cabecera>Precio</Cabecera>
                        <Cabecera>Categoria</Cabecera>
                        <Cabecera>Descripción</Cabecera>
                        <Cabecera>Disponible/Agotado</Cabecera>
                        <Cabecera style={{ borderRadius: '0px 7px 0px 0px' }}>Editar</Cabecera>
                        {
                            platillos.length === 0 ? (<Empity><p>No se ha agregado ningún platillo.</p></Empity>) :

                                platillos.map((item) => (
                                    <>
                                        <DivImg>
                                            <img src={item.imageURL} />
                                        </DivImg>
                                        <p>{item.name}</p>
                                        <p>${item.price}.00</p>
                                        <p>{item.category}</p>
                                        <p>{item.description}</p>
                                        <p>{item.disponible ? 'Disponible' : 'Agotado'}</p>
                                        <DivImg>
                                            <button
                                                onClick={() => editarPlato(item)}
                                                className="edit"
                                            >
                                                <span style={{ marginRight: '5px', marginLeft: '5px' }} >
                                                    Editar
                                             </span>
                                                <IConEdit />
                                            </button>
                                            <button
                                                onClick={() => deletePlato(item.id)}
                                                className="delete">
                                                <span style={{ marginRight: '5px', marginLeft: '5px' }} >
                                                    Eliminar
                                             </span>
                                                <IConDelete />
                                            </button>
                                        </DivImg>
                                    </>
                                ))}

                    </Tabla>
                </EnElMenu>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    p{
        margin: 0;
        border: 1px solid #e4e4e4;
        display: flex;
        align-items: center;
        justify-content: center
    }
`;

const EnElMenu = styled.div`
    text-align: center;
`;

const Tabla = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
    border-radius: 6px 6px 0px 0px;
    background-color: #fff;

    img{
        width: 100px;
        height: 100px;
    }
`;

const Cabecera = styled.div`
    padding: 10px 0;
    border: 1px solid #e4e4e4;
    background: #777777;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Empity = styled.div`
    p{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        left: 0;
        right: 0;
        border: none;
        font-size: ${fontSize.fontMedium};
    }
`;

const Datos = styled.div`
    display: grid;
    grid-template-columns: repeat(7, auto);
`;

const DivImg = styled.div`
    border: 1px solid #e4e4e4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
        cursor: pointer;
    }

    .edit{
        background-color: #ffc00f;
    }

    .delete{
        background-color: #ce1414;
    }
`;

const IConEdit = styled(MdModeEdit)`
    font-size: ${fontSize.fontExBigger};
`;

const IConDelete = styled(MdDelete)`
    font-size: ${fontSize.fontExBigger};
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconSearch = styled(MdSearch)`
    background-color: #fff;
    color: #000;
    border-radius: 1px 15px 15px 1px;
    border: 1px solid #ececec;
    border-left: none;
    height: 50px;
    padding: 13px 13px;
    font-size: ${fontSize.fontExBigger};
    width: 50px;
`;

const InputShearch = styled.input`
    border-radius: 15px 1px 1px 15px;
    border: 1px solid #ececec;
    border-right: none;
    padding: 15px 0px 15px 15px;
    outline: none;
    height: 50px;
    font-size: ${fontSize.fontMedium};
    width: 350px;
`;

const BtnFilter = styled.button`
    margin: 15px 0;
    display: flex;
    align-items: center;
    border: 1px solid #001529;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    background-color: #fff;
    color: #000;
    font-size: ${fontSize.fontMedium};

    &:hover{
        background-color: #001529;
        color: #fff;
    }
`;

const IconFilter = styled(MdFilterList)`
    font-size: ${fontSize.fontExBigger};
    margin-bottom: 1px;
`;

const SecctionFilter = styled.div`
    display: flex;
    align-items: center;

    div:nth-child(2){
        margin: 0 15px;
    }
    
    input{
        margin-right: 8px;
    }
`;

export default MenuAdmin;