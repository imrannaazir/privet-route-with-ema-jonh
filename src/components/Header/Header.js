import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

            </div>
            {user ?
                <button
                    onClick={logout}
                    className=' border-2 border-orange-400 px-4 py-2 rounded-full text-orange-400' to='signup'>Log out</button>
                :
                <div>
                    <Link to='/login'>Login</Link>
                    <Link className=' border-2 border-orange-400 px-4 py-2 rounded-full' to='signup'>Sign Up</Link>
                </div>}
        </nav>
    );
};

export default Header;