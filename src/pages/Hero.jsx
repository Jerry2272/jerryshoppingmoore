import React from 'react'
import ProductDisplay from '../Components/ProductsDisplay/Product'

 const Hero = () => {
  return (
    <React.Fragment>
    <section className='hero-section'>
      <div className="container hero-content">
         <h1>Welcome to The Jerry Jakes Shoping Moore</h1>
         <p>Discover premium Gadgets for a lifestyle of elegance and comfort</p>
         <p>A place where you find all various kinds of Gadget product and also get 10% discount for any other</p>
         <a href="/">Shop Now</a>
      </div>
      <div className="overlay"></div>
    </section>
    <ProductDisplay />
  </React.Fragment>
  )
}

export default Hero
