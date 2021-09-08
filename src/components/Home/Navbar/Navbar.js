import React from 'react';
import { a } from 'react-router-dom';

const Navbar = () => {
    return (
        <section>
            <nav className='navbar p-6 tracking-normal font-medium'>
                <ul className='flex flex-row justify-center'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/top-news">Top-News</a>
                    </li>
                    <li>
                        <a href="/category">Category</a>
                    </li>
                    <li>
                        <a href="/admin">Admin</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;