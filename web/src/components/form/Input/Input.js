import React from 'react';

const Input = ({ value, onInput, type, errorMessage, label, placeholder, name, htmlId, className, autocomplete }) => {
  return (
    <div className={'input-group ' + {className}}>
      { label ? <label htmlFor={ htmlId } className='input-label'>{ label }</label> : <></> }
      <input
        type={ type }
        value={ value }
        onChange={ onInput }
        name={ name }
        id={ htmlId }
        placeholder={ placeholder }
        className='input-control'
        autocomplete={ autocomplete ? autocomplete : 'off'} />
      <span className='input-error-star'>{errorMessage ? '*' : ''}</span>
      <span className='input-error'>{ errorMessage }</span>
    </div>
  );
};

export default Input;
