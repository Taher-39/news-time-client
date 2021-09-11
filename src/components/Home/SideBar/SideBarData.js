import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'International',
        path: '/international',
        icon: <FaIcons.FaYandexInternational />,
        cName: 'nav-text'
    },
    {
        title: 'Sports',
        path: '/sports',
        icon: <FaIcons.FaGamepad />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <FaIcons.FaAddressCard />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaSignInAlt />,
        cName: 'nav-text'
    },
]
