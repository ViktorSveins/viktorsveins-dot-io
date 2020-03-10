import React from 'react';

const Form = inputFields => {
    return (
        <form onSubmit={ inputFields.onSubmit } className="form">
            { inputFields.children }
        </form>
    )
};

export default Form;