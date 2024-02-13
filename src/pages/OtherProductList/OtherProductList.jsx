import React, { useState } from 'react'
import { PRoDUCTS } from '../../util/data';
import './OtherProductList.css'

export const OtherProductList = () => {
    const [searchItem, setSearchItem] =useState('');
    const searchChangeTarget = (e) =>{
        setSearchItem(e.target.value)
    };

    const filterSearch = PRoDUCTS.filter((filterId) =>
        filterId.productTitle.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <div className='otherProductList'>
       <div className='filterArea'>
        <h1>Available Collection</h1>
       <input type="text"
          placeholder='Search Product'
          value={searchItem}
          onChange={searchChangeTarget}
        />
        <p>{searchItem}</p>
       </div>
        <div className='searchProduct'>
        {filterSearch.map((item =>
           <div key={item.id} className='cardProduct'>
            <div className="img-div">
            <img src={item.productImg} alt="" />
            </div>
            <p>{item.productDescription}</p>
            <h2>{item.productTitle}</h2>
            <h6>${item.productPrice}</h6>
           </div>
            ))}
            </div>
    </div>
  )
}
