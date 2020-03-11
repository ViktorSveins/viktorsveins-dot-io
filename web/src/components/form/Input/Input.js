import React from 'react';

const Input = ({ value, onInput, type, errorMessage, label, placeholder, name, htmlId, className }) => {
  return (
    <div className={'input ' + {className}}>
      { label ? <label htmlFor={ htmlId } className='input-label'>{ label }</label> : <></> }
      <input
        type={ type }
        value={ value }
        onChange={ onInput }
        name={ name }
        id={ htmlId }
        placeholder={ placeholder }
        className='input-control' />
      <span className='input-error'>{ errorMessage }</span>
    </div>
  );
};

export default Input;
