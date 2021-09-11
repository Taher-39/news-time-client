import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidenav from '../SideBar/Sidenav';

const Header = () => {
    const day = new Date().toDateString()
    return (
        <header className='heading text-white'>
            {/* <Sidenav /> */}
            <div className='heading-content container mx-auto md:flex flex-row justify-between' >
                <div className='social-icon'>
                    <span><Link to="//facebook.com"><FaFacebook size="1.3em" /></Link></span>
                    <span><Link to="//instagram.com"><FaInstagram size="1.3em" /></Link></span>
                    <span><Link to="//twitter.com"><FaTwitter size="1.3em" /></Link></span>
                    <span><Link to="//youtube.com"><FaYoutube size="1.3em" /></Link></span>
                </div>
                <h1 className='paper-heading font-normal tracking-normal'>News Time24</h1>
                <p className='date'>{day}</p>
            </div>
       </header>
    );
};

export default Header;