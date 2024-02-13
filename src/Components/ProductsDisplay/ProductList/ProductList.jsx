// import React, { useContext } from 'react';
import './ProductList.css';

export const ProductList = (props) => {
    const { id, productPrice, productImg, productDescription, productTitle } = props.data;

    return (
        <div key={id} className="cardProduct">
            <div className="imgProduct">
            <img src={productImg} alt="" />
            </div>
            <div className="productInfo">
                <div className="divText">
                <p className="productDes">{productDescription}</p>
                </div>
                <h2 className="productTitle"><b>{productTitle}</b></h2>
                <p className='productPrice'>${productPrice}</p>
                <button className='addToCart'>Add to Cart</button>
            </div>
        </div>
    );
};



