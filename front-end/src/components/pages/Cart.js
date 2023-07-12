import React from 'react';
import Wrapper from '../helper/Wrapper';
import Form from './cart/Form';
import CardForCart from '../card/CardForCart';

import style from './Cart.module.css';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart);

  const SimpleList = () => {
    return (
      <div>
        <div>simple list of items:</div>

        {cart.map((elem) => {
          return (
            <div>
              {elem.title} x {elem.quantity}{' '}
            </div>
          );
        })}

        <br />
        <div>
          Total price:{' '}
          {cart
            .reduce(
              (prev, current) =>
                prev + +current.prices[0].normal * +current.quantity,
              0
            )
            .toFixed(2)}
          $
        </div>
      </div>
    );
  };

  return (
    <>
      <Wrapper>
        <div className={style.cart}>
          <div className={style['cart-list']}>
            {cart.length ? (
              cart.map((elem) => {
                return <CardForCart key={elem.id} card={elem} {...elem} />;
              })
            ) : (
              <div> Cart is empty </div>
            )}
            {/* <CardForCart title={'Mac Pow Dpu with 2 colas and 1 ice cream'} />
            <CardForCart title={'Mac Pow Dpu'} />
            <CardForCart title={'Mac Pow Dpu'} />
            <CardForCart title={'Mac Pow Dpu'} /> */}
          </div>
          <aside className={style.information}>
            <Form />
            {cart.length ? <SimpleList /> : <div>cart is empty</div>}
          </aside>
        </div>
      </Wrapper>
    </>
  );
}

export default Cart;
