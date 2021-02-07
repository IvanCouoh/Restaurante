import React from 'react';
import UploadImage from '../components/ComponentsTest/UploadImage';
import { useFormik } from 'formik';
import { storage, db } from "../firebase/initBD";

const Test = () => {

    const formik = useFormik({
        initialValues: {
            nombre: '',
        },
        onSubmit: (values) => {
            console.log('values=>', values);

            const { nombre, fileimg } = formik.values;

            const storageRef = storage.ref(`/platillos/${Date.now()}_${fileimg.name}`);
            const task = storageRef.put(fileimg);
            task.on('state_changed', snapshot => {

            }, error => {
                console.log(error.message);
            },
                async () => {
                    const imageURL = await (await task).ref.getDownloadURL()
                    db.collection('prueba').doc()
                        .set({
                            fecha: new Date(),
                            nombre,
                            imageURL
                        }).then(res => {
                            console.log("EXITOSO");
                        }).catch(error => {
                            console.error("ERROR", error)
                        })
                })
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label>Nombre</label><br />
                <input
                    name="nombre"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                />
                <br /><br />
                <input
                    type="file"
                    onChange={(event) => formik.setFieldValue("fileimg", event.target.files[0])}
                ></input>
                <button type="submit">Enviar datos</button>
            </form>
        </>
    );
};

export default Test;