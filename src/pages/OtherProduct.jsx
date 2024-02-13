import React from 'react'
import { OtherProductList } from './OtherProductList/OtherProductList'

const OtherProduct = () => {
  return (
    <>
    <section className="otherProduct">
      <div className="container">
        <div className="textDiv">
          <h1>Get <span style={{color: "orangered"}}>10%</span> Discount From Each Products</h1>
          <h6>Online Sales and Online Delivery made Faster with our Services</h6>
        </div>
      </div>
    </section>
      <OtherProductList />
      </>
  )
}
export  default OtherProduct