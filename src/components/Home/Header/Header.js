import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = () => {
    const day = new Date().toDateString()
    return (
        <header className='heading text-white'>
            <div className='container mx-auto flex flex-row justify-between'>
                <div className='social-icon'>
                    <span><a href="//facebook.com" target="_blank"><FaFacebook size="1.3em" /></a></span>
                    <span><a href="//instagram.com" target="_blank"><FaInstagram size="1.3em" /></a></span>
                    <span><a href="//twitter.com" target="_blank"><FaTwitter size="1.3em" /></a></span>
                    <span><a href="//youtube.com" target="_blank"><FaYoutube size="1.3em" /></a></span>
                </div>
                <h1 className='paper-heading font-normal tracking-normal'>New Time</h1>
                <p className='date'>{day}</p>
            </div>
       </header>
    );
};

export default Header;