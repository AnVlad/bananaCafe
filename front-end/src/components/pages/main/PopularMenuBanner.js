import React from 'react';
import style from './PopularMenuBanner.module.css';
import Card from '../../card/Card';
import Button from '../../elements/Button';
import { useSelector } from 'react-redux';

function PopularMenuBanner() {
  const menu = useSelector((state) => state.menu);
  const mostPopular = [...menu]
    .sort((a, b) => b.rating - a.rating)
    .splice(0, 4);

  console.log(mostPopular);

  return (
    <article className={style['popular-menu']}>
      <h1>Our popular menu</h1>
      <p>Try our best dishes out</p>
      <div className={style['popular-cards']}>
        {mostPopular.map((elem) => {
          return <Card key={elem.id} {...elem} card={elem} />;
        })}
      </div>
      <div className={style['more-menu-button']}>
        <Button>More menu</Button>
      </div>
    </article>
  );
}

export default PopularMenuBanner;
