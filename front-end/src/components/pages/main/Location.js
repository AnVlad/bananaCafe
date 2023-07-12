import React from 'react';
import style from './Location.module.css';

function Location() {
  return (
    <article className={style['map-wrapper']}>
      <h2>Our Location</h2>
      <div className={style.map}>map</div>
    </article>
  );
}

export default Location;
