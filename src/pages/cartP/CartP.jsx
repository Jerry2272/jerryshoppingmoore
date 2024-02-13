import React, {useContext, useState} from 'react'
import {FaMinus, FaPlus, FaTimes} from 'react-icons/fa'
import { ProductApi } from '../../contextApi/ContextApi';
import './CartP.css'

export const CartP = (props) => {
    const { id, productPrice, productImg, productTitle } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ProductApi);
    
    const [shouldRemove, setShouldRemove] = useState(true);
  
    const DeleteBtn = () => {
      removeFromCart(id); 
      setShouldRemove(false);
    };
    if(!shouldRemove)
    {
        return null;
    }
    // if (shouldRemove) {
    //   return null; 
    // };
    
  return (
  <>
  <div  key={id} className="cartContainer">
    <div className="imgContent">
    <img src={productImg} alt="" />
    </div>
    <div className="infoContent">
    <h2><b>{productTitle}</b></h2>
    <h4>${productPrice}</h4>
    <div className="butonContent">
    <button onClick={() => addToCart(id)}> <FaPlus /> </button>
    <input type="text" value={cartItems[id]} />
    <button onClick={() => removeFromCart(id)}><FaMinus /> </button>
    <button onClick={DeleteBtn} style={{marginLeft: 'auto'}}><FaTimes /> </button>
    </div>
    </div>
  </div>
  {/* <table className='cart-table'>
  <thead>
        <tr>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>REMOVE</th>
          <th>ADD</th>
          <th>QUANTITY</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
          <tr key={id}>
            <td className="table-img"> <img src={productImg} alt="" /></td>
            <td>{productTitle}</td>
            <td>${productPrice}</td>
            <td><button onClick={() => removeFromCart(id)}><FaMinus /> </button></td>
            <td><button onClick={() => addToCart(id)}> <FaPlus /> </button></td>
            <td><input type="text" value={cartItems[id]} /></td>
            <td><button onClick={DeleteBtn}><FaTimes /> </button></td>
          </tr>
      </tbody>
  </table>   */}
  {/* <div className="checkout">
  <p>Subtotal: ${toTalAA}</p>
  <button>Continue Shopping </button>
    </div> */}
  </> 
  )
}
