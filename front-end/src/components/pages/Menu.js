import Wrapper from '../helper/Wrapper';
import Card from '../card/Card';

import style from './Menu.module.css';
import { useSelector } from 'react-redux';

function Menu() {
  const menuList = useSelector((state) => state.menu);
  console.log(menuList);

  return (
    <>
      <Wrapper>
        <h1>Pancakes</h1>
        <div className={style['menu-list']}>
          {menuList.length
            ? menuList
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
          {menuList.length
            ? menuList
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
          {menuList.length
            ? menuList
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
