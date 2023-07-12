import React from 'react';
import Button from '../../elements/Button';
import style from './Gallery.module.css';

function Gallery() {
  return (
    <article className={style.gallery}>
      <div className={style.images}>
        <div className={style.image}>
          <img
            alt='Pancake is a paradise of taste'
            src='https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/347245397_276251108413044_3854460776118944660_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q8FbwKNxKsMAX_4fPi3&_nc_ht=scontent-hel3-1.xx&oh=00_AfBSGPOBc8EnuiraYinBzeiF7tuJQ_-Ad4y3JxvlhzbZgA&oe=64AB31BE'
          />
        </div>
        <div className={style.image}>
          <img
            alt='Chocolate shake'
            src='https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/347420200_275951021776386_2363897083150749587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7FecaZrH4kgAX8NRBFX&_nc_ht=scontent-hel3-1.xx&oh=00_AfAgH8hfcJkPXylJm0Pf5EH6o7MkIgioiTLRH0ab20rmzA&oe=64ABA4A9'
          />
        </div>
        <div className={style.image}>
          <img
            alt='Ice creams'
            src='https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/356379478_275934235111398_4105614525975134503_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_fu5sy_X6LsAX9RBcDL&_nc_ht=scontent-hel3-1.xx&oh=00_AfB-9x6nX0jZKt9lbF-2TdgMfMSUYpegzKUemvn5-hHdSg&oe=64AC9E4F'
          />
        </div>
        <div className={style.image}>
          <img
            alt='Pancake - Angry Bull'
            src='https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/355880327_275589105145911_2114964420250030702_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GaMW35IKdsIAX-cuYli&_nc_ht=scontent-hel3-1.xx&oh=00_AfA3DGiVsaYQtGKgMKPhFalpciTdHm-vCbS_t0apckPtWA&oe=64ACBC1F'
          />
        </div>
      </div>
      <div className={style.information}>
        <h2>Find more in our social media</h2>
        <Button>Instagram</Button>
      </div>
    </article>
  );
}

export default Gallery;
