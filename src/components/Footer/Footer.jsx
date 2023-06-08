import React from 'react';
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className="footer-btns">
        <button onClick={() => navigate('/aboutme')}>About Me</button>
        <button onClick={() => navigate('/disclaimer')}>Disclaimer</button>
        <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
        <button onClick={() => navigate('/terms-and-condition')}>Terms and conditions</button>
      </div>
      <p>Copyright © Blog 2022-{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;