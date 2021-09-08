import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div>
            <nav className='navbar p-6 tracking-normal font-medium'>
                <ul className='flex flex-row justify-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Add-News</Link>
                    </li>
                    <li>
                        <Link to="#">Add-Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminNavbar;