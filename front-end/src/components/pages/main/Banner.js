import React from 'react';

import style from './Banner.module.css';

import Button from '../../elements/Button';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <article className={style.banner}>
      <section>
        <img
          className={style['banner-img']}
          src='https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/356086875_275941101777378_3124503751055486398_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VUzVWRs4s9MAX_XkfOi&_nc_ht=scontent-hel3-1.xx&oh=00_AfC4LDr7ry2qSBnazyIqvaYvZLFnGnlcvu4dXD-_EbciWQ&oe=64A497CD'
          alt='pancake'
        />
      </section>
      <section>
        <h1>Best pancakes in the Tallinn</h1>
        <p>You should try our pancakes at least once before judging</p>
        <p>bla bla bla bla</p>
        <div className={style['menu-button']}>
          <Button>
            <Link to={'menu'}>show menu</Link>
          </Button>
        </div>
        <div className={style['start-order']}>
          <h2>start order</h2>
          <ul className={style.delivery}>
            <li>
              <Button>bolt food</Button>
            </li>
            <li>
              <Button>wolt</Button>
            </li>
            <li>
              <Button>fudy</Button>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}

export default Banner;
