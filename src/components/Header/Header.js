import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-links'>
            <Link to={'/'}>Home</Link>
            <Link to={'/orderReview'}>Order Review</Link>
        </nav>
    );
};

export default Header;