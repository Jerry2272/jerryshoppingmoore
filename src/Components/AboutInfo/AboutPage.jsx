import React from 'react';
import './AboutPage.css';
import Laptop4 from  '../../assets/laptop3.jpg';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export const AboutInfo = () => {
  return (
    <section className='aboutInfo'>
        <div className="container">
          <div className="imgDiv">
            <img src={Laptop4} alt="" />
          </div>
          <div className="detailInfo">
            <h2>Who We Are</h2>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, blanditiis facilis enim corrupti placeat maxime consequatur repellat dicta esse odit optio. Nisi, blanditiis necessitatibus? Distinctio provident iste quis beatae laudantium voluptas asperiores temporibus accusantium ducimus numquam.
            </h6>
            <div className="iconDiv">
              <FaFacebook />
              <FaInstagram />
              <FaWhatsapp />
              <FaYoutube />
            </div>
          </div>
        </div>
    </section>
  )
}
;
