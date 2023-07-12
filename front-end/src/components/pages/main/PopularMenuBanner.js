import React from 'react';
import style from './PopularMenuBanner.module.css';
import Card from '../../card/Card';
import Button from '../../elements/Button';

function PopularMenuBanner() {
  return (
    <article className={style['popular-menu']}>
      <h1>Our popular menu</h1>
      <p>Try our best dishes out</p>
      <div className={style['popular-cards']}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={style['more-menu-button']}>
        <Button>More menu</Button>
      </div>
    </article>
  );
}

export default PopularMenuBanner;
