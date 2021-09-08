import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <section>
            <nav className='navbar p-6 tracking-normal font-medium'>
                <ul className='flex flex-row justify-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/top-news">Top-News</Link>
                    </li>
                    <li>
                        <Link to="/international">International</Link>
                    </li>
                    <li>
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/login">{loggedInUser.email ? loggedInUser.name : "Login"}</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;