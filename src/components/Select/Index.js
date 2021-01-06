import React, { useState } from 'react';

const Index = ({ id, name, title, arrayName, options }) => {


    return (
        <>
            <select id={id} name={name} >
                <option>{title}</option>
                {
                    arrayName.map((index, item) => (
                        <option key={index}>{options}</option>
                    ))
                }
            </select>
        </>
    );
};

export default Index;