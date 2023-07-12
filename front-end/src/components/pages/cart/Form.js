import React from 'react';
import style from './Form.module.css';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={style['cart-form']} onSubmit={handleSubmit}>
      <label htmlFor='name'> name </label>
      <input type='name' name='name' />
      <label htmlFor='surname'> surname </label>
      <input type='surname' name='surname' />
      <label htmlFor='phone'> phone </label>
      <input type='phone' name='phone' />

      <label htmlFor='address'> address </label>
      <input type='address' name='address' />
      <button type='submit'>submit</button>
    </form>
  );
}

export default Form;
