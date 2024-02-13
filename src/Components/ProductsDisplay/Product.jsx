import React from 'react'
import { PRODUCTs } from '../../util/data'
import { ProductList } from './ProductList/ProductList'
import './Product.css'

const ProductDisplay = () =>{
    return(
    <section className='products'>
        <h1>All Product List</h1>
       <div className="productContainer">
       {PRODUCTs.map(item => (
            <ProductList data={item} />
        ))}
       </div>
    </section>
    )
}

export default ProductDisplay