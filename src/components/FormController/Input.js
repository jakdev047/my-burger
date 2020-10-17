import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError';

const Input = props => {
    const { label,name,...rest } = props;
    return (
        <>
            <label htmlFor={name}>{label}</label> <br/>
            <Field id={name} name={name} {...rest}/> <br/>
            <ErrorMessage name={name} component={TextError} /> <br/>
        </>
    )
}

export default Input;