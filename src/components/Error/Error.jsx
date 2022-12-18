import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.css';

const Error = ({pwdreset}) => {

const navigate = useNavigate();
const handleHome = () => {
    navigate('/');
}
return (
    <div className='error-page-main'>
        <h1>404</h1>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <p className='text'>Sorry, the page you are looking for doesn't exist.</p>
        <button className='404-to-home' onClick={handleHome}>Return Home</button>
    </div>
  )
}

export default Error;