import React, { Fragment } from 'react';

const TextError = props => {
    return (
        <Fragment>
            <div className="error">
                {props.children}
            </div>
        </Fragment>
    )
};

export default TextError;