import React from 'react';
import style from './CardForCart.module.css';
import { useDispatch } from 'react-redux';
import {
  deleteFromCart,
  increaseQuantity,
  reduceQuantity,
} from '../../slices/cartSlice';

function CardForCart({ title, description, prices, quantity, image, card }) {
  const dispatch = useDispatch();
  if (description.length > 90) {
    description = description.slice(0, 90) + '...';
  }

  const increaseQuantityInCart = () => {
    dispatch(increaseQuantity({ ...card, quantity: card.quantity + 1 }));
  };

  const reduceQuantityInCart = () => {
    if (card.quantity === 1) deleteItemFromCart();

    dispatch(reduceQuantity({ ...card, quantity: card.quantity - 1 }));
  };

  const deleteItemFromCart = () => {
    dispatch(deleteFromCart(card));
  };

  return (
    <div className={style.card}>
      <div className={style['image']}>
        <img src={image} alt={title} />
      </div>
      <div className={style['card-information']}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style['bottom-card']}>
          <p className={style.price}>{prices[0].normal} $</p>
          <p className={style.price}> x </p>
          <p className={style.price}> {quantity} </p>
          <p className={style.price}> = </p>
          <p className={style.price}>
            {(prices[0].normal * quantity).toFixed(2)} $
          </p>
        </div>
        <div className={style['bottom-card']}>
          <button onClick={reduceQuantityInCart}>{'<'}</button>
          <div>{quantity}</div>
          <button onClick={increaseQuantityInCart}>{'>'}</button>
        </div>
      </div>
      {/* <svg
        className={style['svg-background']}
        xmlns='http://www.w3.org/2000/svg'
        width='280'
        height='132'
        viewBox='0 0 280 132'
        fill='none'>
        <path
          d='M0 30.5588C0 26.0386 2.99259 22.0967 7.37579 20.9921C29.1892 15.495 94.6943 0 140 0C185.306 0 250.811 15.495 272.624 20.9921C277.007 22.0967 280 26.0386 280 30.5588V122C280 127.523 275.523 132 270 132H10C4.47715 132 0 127.523 0 122V30.5588Z'
          fill='white'
        />
      </svg> */}
    </div>
  );
}

export default CardForCart;
