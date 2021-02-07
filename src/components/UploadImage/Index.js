import React, { useState } from "react";
import styled from 'styled-components';
import { FiUpload } from "react-icons/fi";
import { Error, Success } from '../Alerts/Index';
import { color, fontSize } from '../../theme/theme';

const Ultimo = () => {
    const [messageType, setMessageType] = useState(false);
    const [messageSize, setMessageSize] = useState(false);
    const [imgPreview, setImgPreview] = useState(null);

    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const typeFile = ["image/png", "image/jpeg", "image/jpg"];
        if (!selected) {
            setMessageSize(true);
            setMessageType(true);
        }
        if ((selected && typeFile.includes(selected.type)) && selected.size / (1024 * 1024) <= 1) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
            setMessageSize(false);
            setMessageType(false);
        } else if (!(selected && typeFile.includes(selected.type))) {
            setMessageType(true);
        } else if (selected.size / (1024 * 1024) >= 1) {
            setMessageSize(true);
        }
    };

    const handleUpload = async () => {

    }

    return (
        <>
            <Container>
                <ImgPreview>
                    {imgPreview && (
                        <Image src={imgPreview} alt="Platillo" />
                    )}

                    {!imgPreview && (
                        <>
                            <label>
                                <UploadClick>
                                    <IconFileUpload />
                                    <input type="file" onChange={handleImageChange} />
                                    <span>Selecciona una imagen</span>
                                </UploadClick>
                            </label>
                        </>
                    )}
                    {/* <Required>{onChangeImg ? onChangeImg : ''}</Required> */}
                </ImgPreview>
                {imgPreview && (
                    <>
                        <Button onClick={() => setImgPreview(null)}>Remover imagen</Button>
                    </>
                )}
            </Container>
            {
                messageType ? (<Validator>Solo puede seleccionar imagenes de tipo .png o .jpg</Validator>) : null
            }
            {
                messageSize ? (<Validator>Solo puede seleccionar imagenes menores a 2MB</Validator>) : null
            }
        </>
    );
};

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

const Button = styled.button`
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    background: ${color.primaryColor};
    color: ${color.white};
    cursor: pointer;
    margin-top: 15px;
`;

const Validator = styled.p`
    color: red;
    font-size: ${fontSize.fontFooter}!important;
    margin: 30px 0 -10px 0!important;
`;

const Required = styled.p`
    margin: 33px 0px 0px 0px!important;
    font-size: ${fontSize.fontFooter}!important;
`;

export default Ultimo;
