import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import style from './Bottom.module.css';

function Bottom() {
  return (
    <footer className={style.bottom}>
      <div className={style['bottom-information']}>
        <div className={style.address}>
          <h4>
            Banan-pannkook{' '}
            <span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                {' '}
                <g clipPath='url(#clip0)'>
                  {' '}
                  <path
                    d='M19.8927 17.6218C17.6922 21.4333 12.8185 22.7392 9.00702 20.5387C8.78128 20.4083 8.61764 20.2991 8.50073 20.2115C8.50542 20.2087 8.51017 20.2059 8.51501 20.203C8.77472 20.0478 9.13026 19.8794 9.58928 19.6751C9.72253 19.6158 9.86313 19.5542 10.0097 19.4899C10.8328 19.1289 11.8439 18.6855 12.7947 18.1165C13.9209 17.4424 15.0606 16.5381 15.7993 15.2585C16.5381 13.9789 16.7514 12.5398 16.7721 11.2274C16.7895 10.1195 16.668 9.02218 16.569 8.12883C16.5514 7.96977 16.5345 7.81717 16.5192 7.67213C16.4666 7.17248 16.4347 6.78036 16.4392 6.47787C16.4393 6.47223 16.4394 6.46668 16.4395 6.46121C16.5738 6.51867 16.7502 6.60578 16.9759 6.73611C20.7874 8.93666 22.0933 13.8104 19.8927 17.6218Z'
                    stroke='#333333'
                    strokeWidth='2'
                  />{' '}
                  <path
                    d='M13.3262 2L14.7547 4.06969'
                    stroke='#333333'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />{' '}
                </g>{' '}
                <defs>
                  {' '}
                  <clipPath id='clip0'>
                    {' '}
                    <rect width='24' height='24' fill='white' />{' '}
                  </clipPath>{' '}
                </defs>{' '}
              </svg>
            </span>
          </h4>
          <div>Sõpruse pst 211a, 13411 Tallinn</div>
        </div>
        <div className={style.company}>
          <h4>company</h4>
          <div>
            <a href='/'>about us</a>
          </div>
          <div>
            <a href='/'>contact</a>
          </div>
        </div>
        <div>
          <h4>social media</h4>
          <div className={style.icons}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#000000' }} />
            <FontAwesomeIcon icon={faFacebookF} style={{ color: '#000000' }} />
          </div>
        </div>

        <div>
          <h4>Get in touch</h4>
          <div>+37253929428</div>
          <div>e-mail@gmail.com</div>
        </div>
      </div>
      <div className={style['bottom-break']}>
        <hr className={style['underline']} />

        <p className={style['copyright-text']}>
          © 2022 Banana kook. NO RIGHT RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default Bottom;
