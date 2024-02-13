import { FormContact } from './FormContact/FormContact';
import HeroContact from './HeroC/HeroContact';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Contact = () => {
 
  return (
    <>
    <HeroContact />
      <section className='contactForm'>
       <div className="container">
       <div className="formDiv">
          <h6>Get In Touch</h6>
          <h1>Visit Our Agnecy Locations Or Contact Us On Our Various Platform</h1>
          <div className="icon-div">
            <h5>Head Office</h5>
            <ul>
              <li><FaInstagram className='fa' />@official</li>
              <li><FaWhatsapp className='fa'/>+1 679 983 0973</li>
              <li><FaLinkedin className='fa' />@JerryJakesMoore</li>
              <li><FaFacebook className='fa' />@TheJerryJakesMoore</li>
              <li><FaYoutube className='fa' />TheJerryJakes.com</li>
              <li><FaMap className='fa' /> 21 rockell, New York.USA</li>
              <li><FaPhone className='fa' /><span>+234 09161729605</span></li>
              <li><FaClock className='fa' />mon: 8am - Friday: 5pm</li>
              <li><FaEnvelope className='fa' /><span>jerryjake227@gmail.com</span></li>
            </ul>
          </div>
        </div>
    <div className='mapDiv'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0441934394!2d-118.74139310430913!3d34.020608450452684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1706890115391!5m2!1sen!2sng"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>  
    </div> 
       </div>
    </section> 
    <FormContact />   
    </>  
  )
};

export default Contact;


