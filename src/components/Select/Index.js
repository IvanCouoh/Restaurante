import React from 'react';

const Index = ({ id, name, title, onClick, value, onChange, onBlur, options }) => {

    return (
        <>
            <select
                id={id}
                name={name}
                onClick={onClick}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option>{options}</option>
            </select>
        </>
    );
};

export default Index;






// <Select
//     id="category"
//     name="category"
//     onClick={indexCategory}
//     value={formik.values.category}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
// >
//     <option value={-1}>Selecciona una categoría</option>
//     {
//         arrayCategories.map((item, index) => (
//             <option key={index} value={item.category}>{item.category}</option>
//         ))
//     }
// </Select>
// {
//     formik.errors.category && formik.touched.category &&
//         (<Validator>{formik.errors.category}</Validator>)
// }
// {
//     validateCategory ? false : <Validator2>Asigne un categoría al platillo.</Validator2>
// }