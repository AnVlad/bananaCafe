import React from 'react';
import style from './Wrapper.module.css';
import Container from './Container';

function Wrapper({ children, backgroundColor }) {
  return (
    <div
      className={`${style.wrapper} ${
        backgroundColor === 'main' ? style.main : style.second
      }`}>
      <Container>{children}</Container>
    </div>
  );
}

export default Wrapper;
