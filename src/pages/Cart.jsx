import React, { useContext } from 'react';
import { PRODUCTs } from '../util/data';
import { ProductApi } from '../contextApi/ContextApi';
import { CartP } from './cartP/CartP';

const Cart = () => {
  const { cartItems ,  getTotalAmount} = useContext(ProductApi);
  const totalA = getTotalAmount();

  return (
    <>
    <section className="cartList">
    <h2>All Carts List</h2>
    </section>
      <div className="cartProduct">
        {PRODUCTs.map((product) => {
          if (cartItems !== 0 ) {
            return <CartP data={product} />
          }
        })} 
      </div>
      <div className="checkout" style={{textAlign: 'center', marginBottom: '20px'}}>
  <p>Subtotal: ${totalA}</p>
  <button>Continue Shopping </button>
    </div>
    </>
  );
};

export default Cart;
