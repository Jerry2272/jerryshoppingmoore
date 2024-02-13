import './Newsletter.css'

export const Newsletter = () => {
  const subcribeBt =() => {
      alert('Thank you for subscribing to our newsletter, a email will be send to your mail shortly.')
  }
  return (
    <div className='newsLetter'>
        <div className="container">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our lastest products and promotion discount</p>
            <form action="\" onSubmit={subcribeBt}>
                <input type="email" placeholder='Your Email' required />
                <button type='submit' >Subscribe</button>
            </form>
        </div>
    </div>
  )
}
