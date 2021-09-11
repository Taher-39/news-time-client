import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container mx-auto footer-content">
                <div className="md:flex flex-row justify-around py-20">
                    <div className="footer-heading">
                        <h1 className="paper-heading font-normal tracking-normal">News Time24</h1>
                    </div>
                    <div className="social-icon">
                        <h1 className="text-2xl font-normal ml-6">Follow Us:</h1>
                        <span><Link to="//facebook.com"><FaFacebook size="1.3em" /></Link></span>
                        <span><Link to="//instagram.com"><FaInstagram size="1.3em" /></Link></span>
                        <span><Link to="//twitter.com"><FaTwitter size="1.3em" /></Link></span>
                        <span><Link to="//youtube.com"><FaYoutube size="1.3em" /></Link></span>
                    </div>
                </div>
                <div className="md:flex flex-row justify-around">
                    <div className='mb-6'>
                        <h1 className='text-2xl font-normal pb-3'>Quick Links</h1>
                        <ul className='text-gray-400'>
                            <li>
                                <Link to='#'>About</Link>
                            </li>
                            <li>
                                <Link to='#'>Advertise</Link>
                            </li>
                            <li>
                                <Link to='#'>Cooking Policy</Link>
                            </li>
                            <li>
                                <Link to='#'>Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link to='#'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-2xl font-normal pb-3'>News Category</h1>
                        <ul className='text-gray-400'>
                            <li>
                                <Link to='/international'>International</Link>
                            </li>
                            <li>
                                <Link to='#'>Covid-19</Link>
                            </li>
                            <li>
                                <Link to='#'>Politics</Link>
                            </li>
                            <li>
                                <Link to='#'>Tech</Link>
                            </li>
                            <li>
                                <Link to='/sports'>Sports</Link>
                            </li>
                            <li>
                                <Link to='#'>Top News</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl font-normal pb-3'>Contact Us</h1>
                        <ul className='text-gray-400'>
                            <li>
                                <Link to='#'>Submit a News Tip</Link>
                            </li>
                            <li>
                                <Link to='#'>Member Services</Link>
                            </li>
                            <li>
                                <Link to='#'>Advertise with Us</Link>
                            </li>
                            <li>
                                <Link to='#'>Advertising</Link>
                            </li>
                            <li>
                                <Link to='#'>Careers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-center py-6 footer-bottom'>
                    <hr className='text-light pt-3' style={{ height: '3px' }} />
                    <p className='text-center text-light'>Build & design By <span style={{ color: 'tomato' }}> &copy; Abu Taher</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;