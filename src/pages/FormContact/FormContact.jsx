import React, {useState} from 'react'
import './FormContact.css'

export const FormContact = () => {
    const [label, setLabel] = useState('');
    const [email, setEmail] = useState('');

    const labelChange = () => {
        setLabel('Full Name');
    };
    const emailChange = () => {
        setEmail('Please make sure you Input your correct email address')
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic for form submission here
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
    
  return (
    <div className='form'>
        
        <form onSubmit={handleSubmit}>
     <div className="form-control">
     <label for="name">{label}</label>
      <input
      placeholder='Your Full Name'
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onKeyDown={labelChange}
        required
      />
     </div>

     <div className="form-control">
     <label htmlFor="email">{email}</label>
      <input
      placeholder='Your Email Address'
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onKeyDown={emailChange}
        required
      />
     </div>

     <div className="form-control">
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
     </div>

      <button type="submit">Submit</button>
    </form>  
    </div>
  )
}
