import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { fontSize, color } from '../../theme/theme';

const Index = () => {
    const [file, setFile] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle uploading-', file);
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
        }

        reader.readAsDataURL(file)
    }

    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<Img src={imagePreviewUrl} />);
    } else {
        $imagePreview = (<span></span>);
    }

    return (
        <>
            <Wrapper>
                <input type="file" id="file" onChange={(e) => handleImageChange(e)} />
                <button>Selecciona una imagen</button>
                <span>o</span>
                <span>Arrastra y suelta una aquí</span>
                {$imagePreview}
            </Wrapper>
        </>
    );
}

const Img = styled.img`
    z-index: 9;
    position: absolute;
    object-fit: contain;
    width: 203px;
    height: 203px;
    background-color: ${color.white};
`;

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
        z-index: 10;
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


// const Index = () => {
//     return (
//         <Wrapper>
//             <input type="file" id="file" />
//             <button>Selecciona una imagen</button>
//             <span>o</span>
//             <span>Arrastra y suelta una aquí</span>
//             {/* <Img src={img1} /> */}
//         </Wrapper>
//     );
// };
// // const Img = styled.img`
// //     position: absolute;
// //     object-fit: cover;
// //     width: 203px;
// //     height: 203px;
// // `;

// const Wrapper = styled.div`
//     border: 2px dashed #dadce0;
//     position: relative;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     width: 203px;
//     height: 203px;

//     input{
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         background: red;
//         opacity: 0;
//         cursor: pointer;
//     }

//     button{
//         height: 40px;
//         border: none;
//         border-radius: 10px;
//         background: ${color.primaryColor};
//         font-size: ${fontSize.fontText};
//         color: ${color.white};
//     }

//     span{
//         margin-top: 10px;
//     }

//     @media(max-width: 790px){
//         &{
//             margin-top: 20px;
//         }
//     }

//     @media(max-width: 490px){
//         &{
//             margin-top: 20px;
//         }
//     }
// `;

// export default Index;