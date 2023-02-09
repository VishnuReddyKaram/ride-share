import './Footer.css'

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='upper-footer-container'>
            <div className='footer-logo'>
                <h2 className='footer-logo-h2'>Ride Share</h2>
            </div>
            <ul className='footer-contents'>
                <li>About</li>
                <li>Privacy</li>
                <li>Contact</li>
            </ul>
        </div>
        <hr className='footer-divider'></hr>
        <div className='bottom-footer-container'>
            <span>© Ride Share. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer