import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

            </div>
            <div>
                <Link to='/login'>Login</Link>
                <Link className=' border-2 border-orange-400 px-4 py-2 rounded-full' to='signup'>Sign Up</Link>
            </div>
        </nav>
    );
};

export default Header;