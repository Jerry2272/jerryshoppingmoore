import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './HeroContact.css'

const HeroContact = () => {
  return (
    <section className="heroContact">
      <div className="container">
        <div className="textDiv">
          <h1>Contact Us On All Our Social Media Platform</h1>
          <div className="iconDiv">
              <FaFacebook />
              <FaInstagram />
              <FaWhatsapp />
              <FaYoutube />
              <FaLinkedin />
            </div>
        </div>
      </div>
    </section>
  )
}
export  default HeroContact