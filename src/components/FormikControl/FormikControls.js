  
import React from 'react';
import Input from '../FormController/Input';

const FormikControls = props => {

    const {control,...rest} = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />;
        default: 
            return null;
    }
};

export default FormikControls;