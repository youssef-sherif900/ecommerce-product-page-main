import { useDispatch } from "react-redux/es/exports";
import React, { useState } from 'react';
import { confirm } from "../utility/cart";





function ProductDescription() {
  const dispatch = useDispatch();
  const [quantity , setQuantity] =  useState(0)
  return (
    <div className="description-container">
      <div>
        <p className="title">SNEAKER COMPANY</p>
        <h1 className="head-title">
          Fall limited Edition <br />
          Sneaker
        </h1>
      </div>

      <p className="description">
        These low-profile sneakers are you perfect casual wear 
        comapanions. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer
      </p>
      <div>
        <div className="mobile-flex">
        <div className="diplay-flex-price">
          <h2 className="price-after-sale">$125.00</h2>
          <p className="discount">50%</p>
        </div>
        <p className="real-price">$250.00</p>
        </div>
      </div>
      <div className="buttons">
        <div className="quantity">
          <button
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1)
              }
            }}
            className="plus-minus"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity(quantity + 1)
            }}
            className="plus-minus"
          >
            +
          </button>
        </div>
        <button
          className="add-to-cart"
          onClick={() => {
            dispatch(confirm(quantity))
          }}
        >
          <svg
            className="button-cart"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="white"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDescription;
