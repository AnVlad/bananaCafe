import React from 'react';
import style from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  increaseQuantity,
  reduceQuantity,
  deleteFromCart,
} from '../../slices/cartSlice';

function Card({ title, description, image, prices, id, card }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const currentElement = cart.find(
    (elementInCart) => elementInCart.title === title
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ ...card, quantity: 1 }));
  };

  const increaseQuantityInCart = () => {
    dispatch(
      increaseQuantity({ ...card, quantity: currentElement.quantity + 1 })
    );
  };

  const reduceQuantityInCart = () => {
    if (currentElement.quantity === 1) deleteItemFromCart();

    dispatch(
      reduceQuantity({ ...card, quantity: currentElement.quantity - 1 })
    );
  };

  const deleteItemFromCart = () => {
    dispatch(deleteFromCart(currentElement));
  };

  if (!title || !prices) return null;

  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt='pancake' />
      <div className={style.information}>
        <h2 className={style.title}>{title}</h2>
        {/* <p className={style.description}>{description}</p> */}
        <div className={style['add-to-cart']}>
          {!currentElement ? (
            <button
              className={style['add-to-cart-button']}
              onClick={handleAddToCart}>
              add to cart
            </button>
          ) : (
            <>
              {' '}
              <button
                className={style['change-quantity-button']}
                onClick={reduceQuantityInCart}>
                {' < '}
              </button>
              <span> {currentElement.quantity} </span>
              <button
                className={style['change-quantity-button']}
                onClick={increaseQuantityInCart}>
                {' > '}
              </button>
            </>
          )}
        </div>
        <div className={style['bottom-card']}>
          <p className={style.price}>{prices[0].normal}</p>
          <button className={style['add-to-favorite']}>
            {false ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M11.9646 6.12862C8.29143 0.454909 0.857147 3.54577 0.857147 9.72634C0.857147 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z'
                  fill='#FFCB45'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M11.9646 6.12862C8.29143 0.454909 0.857147 3.54577 0.857147 9.72634C0.857147 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z'
                  fill='#1D1D1D'
                  fillOpacity='0.7'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <svg
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
      </svg>
    </div>
  );
}

export default Card;
