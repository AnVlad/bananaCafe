import React from 'react';

import style from './Header.module.css';

import Button from '../../elements/Button';
import Wrapper from '../../helper/Wrapper';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHeart,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <Wrapper backgroundColor='main'>
      <header className={style.header}>
        <Link to={'/'} className={style.logo}>
          <span>Banana</span>
          🥞
        </Link>
        <nav className={style.navigation}>
          <ul className={style.menu}>
            <Link
              to={'/'}
              className={location === '/' ? style['active-menu'] : null}>
              Home
            </Link>
            <Link
              className={location === '/menu' ? style['active-menu'] : null}
              to={'/menu'}>
              Menu
            </Link>
            <Link
              className={location === '/about' ? style['active-menu'] : null}
              to={'/about'}>
              About
            </Link>
            <Link
              className={location === '/contact' ? style['active-menu'] : null}
              to={'/contact'}>
              Contact
            </Link>
          </ul>
        </nav>
        <div className={style.user}>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: '#1d1d1d' }} />
          </div>
          <Link to={'/cart'}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: '#000000' }}
            />
          </Link>
          <Button>
            <div>
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ color: '#000000' }}
              />{' '}
              sign in
            </div>
          </Button>
        </div>
      </header>
    </Wrapper>
  );
}

export default Header;
