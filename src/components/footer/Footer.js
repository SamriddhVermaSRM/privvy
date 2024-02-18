import "./Footer.css";

import tdl from './Two-Dots-Lifestyle.png';
import logo from './logo.png';


function Footer() {
    return (
      <>
        <div className='footer breakout'>
          <div className='newsletter'>
          <img src={tdl} alt="logo" />
            <h1>Stay in the know</h1>
            <input type='text' placeholder='Enter your email address' />
            <button>Subscribe</button>
          </div>
          <div className='stayintouch'>
            <h1>Stay in touch</h1>
            <p>
              11, UGF, Street No. 5-B, Vipin Garden Extension
              Uttam Nagar, New Delhi-110059
            </p>
            <a href='info@twodotslifestyle.com' className='mail'>
              info@twodotslifestyle.com
            </a>
            <a href='tel:+91123567890' className='phone'>
            +91-123567890
            </a>
          </div>
          <div className='social'>
            <h1>
              Follow us
            </h1>
            <a href='https://www.instagram.com/privvy_tdl.24/'>
              Instagram
            </a>
            <a href='https://www.facebook.com/profile.php?id=61551983887620'>
              Facebook
            </a>
          </div>
          <div className='copyright'>
            <div className='rights'>© 2023 <img src={logo} alt='logo' /> All Rights Reserved</div>
            <div className='policy'>
              <button>Privacy Policy</button>
              &nbsp;&#47;&nbsp; 
              <button>Terms & Conditions</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Footer;