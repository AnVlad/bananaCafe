import React, { useEffect, useState } from 'react';
import Wrapper from '../helper/Wrapper';
import Card from '../card/Card';
import axios from 'axios';

import style from './Menu.module.css';

function Menu() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const result = await axios.get('http://localhost:4000/food');
      setList(result.data);
    };
    getList();
  }, []);

  return (
    <>
      <Wrapper>
        <h1>Pancakes</h1>
        <div className={style['menu-list']}>
          {list
            ? list
                .filter((elem) => elem.type === 'pancake')
                .map((elem) => {
                  return (
                    <div key={elem.id} className={style['menu-item']}>
                      <Card card={elem} {...elem} />
                    </div>
                  );
                })
            : null}
        </div>
        <h1>sweet pancakes</h1>
        <div className={style['menu-list']}>
          {list
            ? list
                .filter((elem) => elem.type === 'sweet-pancake')
                .map((elem) => {
                  return (
                    <div key={elem.id} className={style['menu-item']}>
                      <Card card={elem} {...elem} />
                    </div>
                  );
                })
            : null}
        </div>
        <h1>ice-cream cocktails</h1>
        <div className={style['menu-list']}>
          {list
            ? list
                .filter((elem) => elem.type === 'ice-cream-cocktail')
                .map((elem) => {
                  return (
                    <div key={elem.id} className={style['menu-item']}>
                      <Card card={elem} {...elem} />
                    </div>
                  );
                })
            : null}
        </div>
      </Wrapper>
    </>
  );
}

export default Menu;
